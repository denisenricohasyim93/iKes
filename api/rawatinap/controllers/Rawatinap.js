'use strict';

/**
 * Rawatinap.js controller
 *
 * @description: A set of functions called "actions" for managing `Rawatinap`.
 */

module.exports = {

  /**
   * Retrieve rawatinap records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.rawatinap.fetchAll(ctx.query);
  },

  /**
   * Retrieve a rawatinap record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.rawatinap.fetch(ctx.params);
  },

  /**
   * Count rawatinap records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.rawatinap.count(ctx.query);
  },

  /**
   * Create a/an rawatinap record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.rawatinap.add(ctx.request.body);
  },

  /**
   * Update a/an rawatinap record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.rawatinap.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an rawatinap record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.rawatinap.remove(ctx.params);
  },

  /**
   * Add relation to a/an rawatinap record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.rawatinap.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an rawatinap record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.rawatinap.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an rawatinap record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.rawatinap.removeRelation(ctx.params, ctx.request.body);
  }
};
