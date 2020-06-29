module.exports = (app) => {
  const { router, controller } = app;
  // router.get('/:shortUrl', controller.home.index);
  router.post('/login', controller.user.login);
  require('./router/url')(app);
  require('./router/user')(app);
  require('./router/picture')(app);
};
