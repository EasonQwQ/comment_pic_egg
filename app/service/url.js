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
    const uid = this.ctx.state.user.id;
    console.log('Url -> findOrCreate -> uid', uid);
    const res = await this.ctx.model.Url.findOrCreate({
      where: {
        longUrl, uid,
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
