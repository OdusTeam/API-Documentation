const hooks = require('hooks');
const getenv = require('getenv');

hooks.beforeEach((transaction) => {
  transaction.request.headers["X-AUTH-TOKEN"] = getenv("DREDD_AUTH_TOKEN")
});