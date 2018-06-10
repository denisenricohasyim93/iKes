'use strict';

/**
 * Klinik.js controller
 *
 * @description: A set of functions called "actions" for managing `Klinik`.
 */

module.exports = {

  /**
   * Retrieve klinik records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.klinik.fetchAll(ctx.query);
  },

  /**
   * Retrieve a klinik record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.klinik.fetch(ctx.params);
  },

  /**
   * Count klinik records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.klinik.count(ctx.query);
  },

  /**
   * Create a/an klinik record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.klinik.add(ctx.request.body);
  },

  /**
   * Update a/an klinik record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.klinik.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an klinik record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.klinik.remove(ctx.params);
  },

  /**
   * Add relation to a/an klinik record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.klinik.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an klinik record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.klinik.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an klinik record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.klinik.removeRelation(ctx.params, ctx.request.body);
  }
};
