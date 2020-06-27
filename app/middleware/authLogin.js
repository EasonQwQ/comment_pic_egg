module.exports = (options, app) => async function authLogin(ctx, next) {
  const { secret } = ctx.app.config.jwt;
  const whiteUrls = options.whiteUrls || [];

  // 如果ctx.url在白名单中
  const isWhiteUrl = whiteUrls.some((whiteUrl) => ctx.url.startsWith(whiteUrl));
  if (!isWhiteUrl) {
    try {
      const [, token] = ctx.request.header.authorization.split(' ');
      const { user } = app.jwt.verify(token, secret);
      [ctx.state.user] = user;
      await next();
    } catch (err) {
      ctx.helper.fail({ app, code: 401, res: 'toke获取失败' });
    }
  } else {
    // 白名单
    await next();
  }
};
