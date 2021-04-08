'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/user', controller.user.index);
  router.get('/name', controller.user.userInfo);
  router.get('/userid/:id', controller.user.getId);
  router.post('/add', controller.user.add);
};
