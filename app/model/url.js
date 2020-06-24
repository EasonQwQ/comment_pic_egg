module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const url = app.model.define('urls', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    shortUrl: {
      field: 'short_url',
      type: STRING(100),
    },
    longUrl: {
      field: 'long_url',
      type: STRING(100),
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
  return url;
};
