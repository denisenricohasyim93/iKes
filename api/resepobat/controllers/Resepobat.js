'use strict';

/**
 * Resepobat.js controller
 *
 * @description: A set of functions called "actions" for managing `Resepobat`.
 */

module.exports = {

  /**
   * Retrieve resepobat records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.resepobat.fetchAll(ctx.query);
  },

  /**
   * Retrieve a resepobat record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.resepobat.fetch(ctx.params);
  },

  /**
   * Count resepobat records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.resepobat.count(ctx.query);
  },

  /**
   * Create a/an resepobat record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.resepobat.add(ctx.request.body);
  },

  /**
   * Update a/an resepobat record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.resepobat.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an resepobat record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.resepobat.remove(ctx.params);
  },

  /**
   * Add relation to a/an resepobat record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.resepobat.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an resepobat record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.resepobat.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an resepobat record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.resepobat.removeRelation(ctx.params, ctx.request.body);
  }
};
