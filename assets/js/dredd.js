const hooks = require('hooks');
const getenv = require('getenv');

hooks.beforeEach((transaction) => {
  transaction.request.headers["X-AUTH-TOKEN"] = "yV_Y_mSKBkbCbdsw7S64oVnm5tGRQoQRuQNPoHPCU40"
});