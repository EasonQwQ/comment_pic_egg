module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
  }, {
    timestamps: true,
    paranoid: true,
  });

  return User;
};
