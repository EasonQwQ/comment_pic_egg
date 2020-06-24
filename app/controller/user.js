const { Controller } = require('egg');

class UserController extends Controller {
  async login() {
    const { ctx, app } = this;
    // post请求传来的参数
    const { name } = ctx.request.body;
    // 判断数据库里面是否存在该用户
    const user = await ctx.service.user.login(name);

    if (user) {
      // 用户存在,生成token
      const token = app.jwt.sign({
        name: user.name,
      }, app.config.jwt.secret);

      ctx.body = {
        code: 200,
        message: '登录成功',
        data: { id: user.id },
        token,
      };
    }
  }
}

module.exports = UserController;
