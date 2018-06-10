'use strict';

/**
 * Tiperuangan.js controller
 *
 * @description: A set of functions called "actions" for managing `Tiperuangan`.
 */

module.exports = {

  /**
   * Retrieve tiperuangan records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.tiperuangan.fetchAll(ctx.query);
  },

  /**
   * Retrieve a tiperuangan record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.tiperuangan.fetch(ctx.params);
  },

  /**
   * Count tiperuangan records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tiperuangan.count(ctx.query);
  },

  /**
   * Create a/an tiperuangan record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tiperuangan.add(ctx.request.body);
  },

  /**
   * Update a/an tiperuangan record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tiperuangan.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tiperuangan record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tiperuangan.remove(ctx.params);
  },

  /**
   * Add relation to a/an tiperuangan record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.tiperuangan.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an tiperuangan record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.tiperuangan.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an tiperuangan record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.tiperuangan.removeRelation(ctx.params, ctx.request.body);
  }
};
