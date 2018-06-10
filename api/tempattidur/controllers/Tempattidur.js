'use strict';

/**
 * Tempattidur.js controller
 *
 * @description: A set of functions called "actions" for managing `Tempattidur`.
 */

module.exports = {

  /**
   * Retrieve tempattidur records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.tempattidur.fetchAll(ctx.query);
  },

  /**
   * Retrieve a tempattidur record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.tempattidur.fetch(ctx.params);
  },

  /**
   * Count tempattidur records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tempattidur.count(ctx.query);
  },

  /**
   * Create a/an tempattidur record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tempattidur.add(ctx.request.body);
  },

  /**
   * Update a/an tempattidur record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tempattidur.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tempattidur record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tempattidur.remove(ctx.params);
  },

  /**
   * Add relation to a/an tempattidur record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.tempattidur.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an tempattidur record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.tempattidur.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an tempattidur record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.tempattidur.removeRelation(ctx.params, ctx.request.body);
  }
};
