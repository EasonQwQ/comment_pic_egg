const { Controller } = require('egg');
const { string10to64 } = require('../util/util');

class UrlController extends Controller {
  async index() {
    const { ctx } = this;
    const { shortUrl } = ctx.params;
    const res = await ctx.service.url.findUrl(shortUrl);
    if (res) {
      this.ctx.redirect(`https://${res.longUrl}`);
    }
    ctx.body = res;
  }

  async add() {
    const { ctx } = this;
    const { longUrl } = ctx.request.body;
    const res = await ctx.service.url.findOrCreate(longUrl);
    const { id, shortUrl } = res.length > 0 && res[0].dataValues && res[0].dataValues;
    if (id && !shortUrl) {
      const idTo64 = string10to64(id);
      const result = await ctx.service.url.updateShortUrl(id, idTo64);
      if (result) {
        ctx.helper.success({ ctx, code: 200, res: idTo64 });
      } else {
        ctx.helper.fail({ ctx, code: 500, res: '更新时出了一点问题' });
      }
    } else if (id && shortUrl) {
      ctx.helper.success({ ctx, code: 200, res: shortUrl });
    } else {
      ctx.helper.fail({ ctx, code: 500, res: '服务器出了一点问题' });
    }
  }
}

module.exports = UrlController;
