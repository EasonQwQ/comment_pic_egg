module.exports = (app) => {
  require('./router/url')(app);
  require('./router/user')(app);
  // const { router, controller } = app;
  // router.get('/:shortUrl', controller.home.index);
};
