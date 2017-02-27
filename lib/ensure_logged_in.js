module.exports = function(options) {
  if(typeof options === "string") {
    options = {
      redirectTo: options
    };
  }
  options = options || {};

  var url = options.redirectTo || "/login",
      setReturnTo = options.setReturnTo === undefined ? true : options.setReturnTo;

  return function ensureLogin(ctx, next) {
    if(!ctx.isAuthenticated || !ctx.isAuthenticated()) {
      if(setReturnTo && ctx.session) {
        ctx.session.returnTo = ctx.originalUrl || ctx.req.url;
      }
      return ctx.redirect(url);
    }
    return next();
  };
};
