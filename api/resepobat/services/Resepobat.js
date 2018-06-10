'use strict';

/**
 * Resepobat.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all resepobats.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('resepobat', params);
    // Select field to populate.
    const populate = Resepobat.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Resepobat.query(function(qb) {
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
   * Promise to fetch a/an resepobat.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Resepobat.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Resepobat.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an resepobat.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('resepobat', params);

    return Resepobat.query(function(qb) {
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
   * Promise to add a/an resepobat.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Resepobat.associations.map(ast => ast.alias));
    const data = _.omit(values, Resepobat.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Resepobat.forge(data).save();

    // Create relational data and return the entry.
    return Resepobat.updateRelations({ id: entry.id , values: relations });
  },

  /**
   * Promise to edit a/an resepobat.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Resepobat.associations.map(ast => ast.alias));
    const data = _.omit(values, Resepobat.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = Resepobat.forge(params).save(data, { path: true });

    // Create relational data and return the entry.
    return Resepobat.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an resepobat.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    await Promise.all(
      Resepobat.associations.map(association =>
        Resepobat.forge(params)[association.alias]().detach()
      )
    );

    return Resepobat.forge(params).destroy();
  }
};
