const { Controller } = require('egg');
const { string10to62 } = require('../util/util');

class UrlController extends Controller {
  /**
   * 先从url表中找有没有短链接，
   * 有的话就redirect去短链接，没有就返回错误
   */
  async index() {
    const { ctx } = this;
    const { shortUrl } = ctx.params;
    // 查找短链接
    const res = await ctx.service.url.findUrl(shortUrl);
    if (res) {
      // 301重定向跳转
      this.ctx.redirect(`https://${res.longUrl}`);
    } else {
      ctx.helper.fail({ ctx, code: 500, res: '没有找到短链接，请检查短连接' });
    }
  }

  /**
   * 根据longUrl增加短链
   */
  async add() {
    const { ctx } = this;
    // 先从post提交的参数中获取longUrl
    const { longUrl } = ctx.request.body;
    // 如果longUrl存在，那么就返回，如果没有，就创建并返回
    const res = await ctx.service.url.findOrCreate(longUrl);
    // 获取返回的id 和shortUrl
    const { id, shortUrl } = res.length > 0 && res[0].dataValues && res[0].dataValues;
    // 如果有id 但是没有short
    if (id && !shortUrl) {
      // 将id转成62进制
      const idTo64 = string10to62(id);
      // 根据id更新短链
      const result = await ctx.service.url.updateShortUrl(id, idTo64);
      if (result) {
        ctx.helper.success({ ctx, code: 200, res: idTo64 });
      } else {
        ctx.helper.fail({ ctx, code: 500, res: '更新时出了一点问题' });
      }
      // 如果这个短链存在就直接返回这个短链
    } else if (id && shortUrl) {
      ctx.helper.success({ ctx, code: 200, res: shortUrl });
    } else {
      ctx.helper.fail({ ctx, code: 500, res: '服务器出了一点问题' });
    }
  }
}

module.exports = UrlController;
