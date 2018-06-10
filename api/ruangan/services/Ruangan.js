'use strict';

/**
 * Ruangan.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all ruangans.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('ruangan', params);
    // Select field to populate.
    const populate = Ruangan.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Ruangan.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });

      if (filters.sort) {
        qb.orderBy(filters.sort.key, filters.sort.order);
      }

      qb.offset(filters.start);
      qb.limit(filters.limit);
    }).fetchAll({
      withRelated: populate
    });
  },

  /**
   * Promise to fetch a/an ruangan.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Ruangan.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Ruangan.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an ruangan.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('ruangan', params);

    return Ruangan.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });
    }).count();
  },

  /**
   * Promise to add a/an ruangan.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Ruangan.associations.map(ast => ast.alias));
    const data = _.omit(values, Ruangan.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Ruangan.forge(data).save();

    // Create relational data and return the entry.
    return Ruangan.updateRelations({ id: entry.id , values: relations });
  },

  /**
   * Promise to edit a/an ruangan.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Ruangan.associations.map(ast => ast.alias));
    const data = _.omit(values, Ruangan.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = Ruangan.forge(params).save(data, { path: true });

    // Create relational data and return the entry.
    return Ruangan.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an ruangan.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    await Promise.all(
      Ruangan.associations.map(association =>
        Ruangan.forge(params)[association.alias]().detach()
      )
    );

    return Ruangan.forge(params).destroy();
  }
};
