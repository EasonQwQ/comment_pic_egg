const { Service } = require('egg');

class Url extends Service {
  async findUrl(shortUrl) {
    const res = await this.ctx.model.Url.findOne({
      where: {
        shortUrl,
      },
    });
    return res;
  }

  async findOrCreate(longUrl) {
    const res = await this.ctx.model.Url.findOrCreate({
      where: {
        longUrl,
      },
    });
    return res;
  }

  async updateShortUrl(id, idTo64) {
    const res = await this.ctx.model.Url.update({ shortUrl: idTo64 }, {
      where: {
        id,
      },
    });
    return res;
  }
}

module.exports = Url;
