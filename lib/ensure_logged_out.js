module.exports = function(options) {
  if (typeof options == "string") {
    options = {
      redirectTo: options
    };
  }
  options = options || {};

  var url = options.redirectTo || "/";

  return function ensureLoggedOut(ctx, next) {
    if (ctx.isAuthenticated && ctx.isAuthenticated()) {
      return ctx.redirect(url);
    }
    return next();
  };
};
