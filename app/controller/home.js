const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { shortUrl } = ctx.params;
    const res = await ctx.service.url.findUrl(shortUrl);
    if (res) {
      this.ctx.redirect(`https://${res.longUrl}`);
    }
    ctx.body = res;
  }
}
module.exports = HomeController;
