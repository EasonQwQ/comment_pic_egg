module.exports = (app) => {
  require('./router/url')(app);
  // const { router, controller } = app;
  // router.get('/:shortUrl', controller.home.index);
};
