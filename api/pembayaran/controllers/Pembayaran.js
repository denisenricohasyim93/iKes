'use strict';

/**
 * Pembayaran.js controller
 *
 * @description: A set of functions called "actions" for managing `Pembayaran`.
 */

module.exports = {

  /**
   * Retrieve pembayaran records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.pembayaran.fetchAll(ctx.query);
  },

  /**
   * Retrieve a pembayaran record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pembayaran.fetch(ctx.params);
  },

  /**
   * Count pembayaran records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pembayaran.count(ctx.query);
  },

  /**
   * Create a/an pembayaran record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pembayaran.add(ctx.request.body);
  },

  /**
   * Update a/an pembayaran record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pembayaran.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pembayaran record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pembayaran.remove(ctx.params);
  },

  /**
   * Add relation to a/an pembayaran record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.pembayaran.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an pembayaran record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.pembayaran.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an pembayaran record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.pembayaran.removeRelation(ctx.params, ctx.request.body);
  }
};
