const { router, text } = require('bottender/router');

const 卡米狗學說話 = require('./卡米狗學說話');
const 卡米狗忘記 = require('./卡米狗忘記');
const 卡米狗試著回話 = require('./卡米狗試著回話');

module.exports = async function App() {
  return router([
    text(/^卡米狗學說話;([^;]+);([^;]+)$/, 卡米狗學說話),
    text(/^卡米狗忘記;([^;]+)$/, 卡米狗忘記),
    text('*', 卡米狗試著回話),
  ]);
};
