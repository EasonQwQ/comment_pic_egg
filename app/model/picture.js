module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;

  const url = app.model.define('pictures', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    shortUrl: {
      field: 'shorturl',
      type: STRING(100),
    },
    longUrl: {
      field: 'longurl',
      type: STRING(100),
    },
    uid: INTEGER(10),
    imgUrl: {
      field: 'imgurl',
      type: STRING(100),
    },
  }, {
    timestamps: true,
    paranoid: true,
  });
  return url;
};
