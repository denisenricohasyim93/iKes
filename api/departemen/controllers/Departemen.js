'use strict';

/**
 * Departemen.js controller
 *
 * @description: A set of functions called "actions" for managing `Departemen`.
 */

module.exports = {

  /**
   * Retrieve departemen records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.departemen.fetchAll(ctx.query);
  },

  /**
   * Retrieve a departemen record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.departemen.fetch(ctx.params);
  },

  /**
   * Count departemen records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.departemen.count(ctx.query);
  },

  /**
   * Create a/an departemen record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.departemen.add(ctx.request.body);
  },

  /**
   * Update a/an departemen record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.departemen.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an departemen record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.departemen.remove(ctx.params);
  },

  /**
   * Add relation to a/an departemen record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.departemen.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an departemen record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.departemen.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an departemen record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.departemen.removeRelation(ctx.params, ctx.request.body);
  }
};
