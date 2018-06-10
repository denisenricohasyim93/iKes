'use strict';

/**
 * Pertemuandokterpasien.js controller
 *
 * @description: A set of functions called "actions" for managing `Pertemuandokterpasien`.
 */

module.exports = {

  /**
   * Retrieve pertemuandokterpasien records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.pertemuandokterpasien.fetchAll(ctx.query);
  },

  /**
   * Retrieve a pertemuandokterpasien record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.pertemuandokterpasien.fetch(ctx.params);
  },

  /**
   * Count pertemuandokterpasien records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pertemuandokterpasien.count(ctx.query);
  },

  /**
   * Create a/an pertemuandokterpasien record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pertemuandokterpasien.add(ctx.request.body);
  },

  /**
   * Update a/an pertemuandokterpasien record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pertemuandokterpasien.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pertemuandokterpasien record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pertemuandokterpasien.remove(ctx.params);
  },

  /**
   * Add relation to a/an pertemuandokterpasien record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.pertemuandokterpasien.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an pertemuandokterpasien record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.pertemuandokterpasien.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an pertemuandokterpasien record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.pertemuandokterpasien.removeRelation(ctx.params, ctx.request.body);
  }
};
