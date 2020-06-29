const { Controller } = require('egg');

class PictureController extends Controller {
  async add() {
    const { ctx, app } = this;
    // post请求传来的参数
    const code = ctx.request.body;
    ctx.body = code;
    console.log('PictureController -> add -> code', code);
  }
}

module.exports = PictureController;
