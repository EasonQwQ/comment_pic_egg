const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { shortUrl } = ctx.params;
    console.log('HomeController -> index -> shortUrl', shortUrl);
    const res = await ctx.service.url.findUrl(shortUrl);
    if (res) {
      this.ctx.redirect(`https://${res.longUrl}`);
    }
    console.log('HomeController -> index -> res', res);
    // const res = await ctx.service.user.echo();
    // console.log('HomeController -> index -> res', res);
    ctx.body = res;
  }
}
module.exports = HomeController;
