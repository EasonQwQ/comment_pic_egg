module.exports = (app) => {
  const { controller } = app;
  const user = app.router.namespace('/user');
  user.post('/login', controller.user.login);
  user.get('/', controller.user.get);
};
