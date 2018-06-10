'use strict';

/**
 * Ruangan.js controller
 *
 * @description: A set of functions called "actions" for managing `Ruangan`.
 */

module.exports = {

  /**
   * Retrieve ruangan records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.ruangan.fetchAll(ctx.query);
  },

  /**
   * Retrieve a ruangan record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.ruangan.fetch(ctx.params);
  },

  /**
   * Count ruangan records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.ruangan.count(ctx.query);
  },

  /**
   * Create a/an ruangan record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ruangan.add(ctx.request.body);
  },

  /**
   * Update a/an ruangan record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ruangan.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ruangan record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ruangan.remove(ctx.params);
  },

  /**
   * Add relation to a/an ruangan record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.ruangan.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an ruangan record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.ruangan.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an ruangan record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.ruangan.removeRelation(ctx.params, ctx.request.body);
  }
};
