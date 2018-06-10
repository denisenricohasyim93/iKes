'use strict';

/**
 * Perawat.js controller
 *
 * @description: A set of functions called "actions" for managing `Perawat`.
 */

module.exports = {

  /**
   * Retrieve perawat records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.perawat.fetchAll(ctx.query);
  },

  /**
   * Retrieve a perawat record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.perawat.fetch(ctx.params);
  },

  /**
   * Count perawat records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.perawat.count(ctx.query);
  },

  /**
   * Create a/an perawat record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.perawat.add(ctx.request.body);
  },

  /**
   * Update a/an perawat record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.perawat.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an perawat record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.perawat.remove(ctx.params);
  },

  /**
   * Add relation to a/an perawat record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.perawat.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an perawat record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.perawat.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an perawat record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.perawat.removeRelation(ctx.params, ctx.request.body);
  }
};
