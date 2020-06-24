const { Service } = require('egg');

class User extends Service {
  async echo() {
    const user = await this.ctx.model.User.findAll();
    return user;
    // await this.ctx.model.User.destroy({
    //   where: {
    //     id: 1,
    //   },
    // });
  }
}

module.exports = User;
