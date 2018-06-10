'use strict';

/**
 * Perawat.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all perawats.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('perawat', params);
    // Select field to populate.
    const populate = Perawat.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Perawat.query(function(qb) {
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
   * Promise to fetch a/an perawat.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Perawat.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Perawat.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an perawat.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('perawat', params);

    return Perawat.query(function(qb) {
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
   * Promise to add a/an perawat.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Perawat.associations.map(ast => ast.alias));
    const data = _.omit(values, Perawat.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Perawat.forge(data).save();

    // Create relational data and return the entry.
    return Perawat.updateRelations({ id: entry.id , values: relations });
  },

  /**
   * Promise to edit a/an perawat.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Perawat.associations.map(ast => ast.alias));
    const data = _.omit(values, Perawat.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = Perawat.forge(params).save(data, { path: true });

    // Create relational data and return the entry.
    return Perawat.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an perawat.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    await Promise.all(
      Perawat.associations.map(association =>
        Perawat.forge(params)[association.alias]().detach()
      )
    );

    return Perawat.forge(params).destroy();
  }
};
