module.exports = (app) => {
  const { controller } = app;
  const picture = app.router.namespace('/picture');
  picture.post('/', controller.url.add);
};