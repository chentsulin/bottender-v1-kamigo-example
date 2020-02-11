const db = require('./db');

module.exports = async function 卡米狗學說話(context) {
  const { text } = context.event;

  // 斷開後第一個部分是「卡米狗學說話」，可以直接忽略它
  const [, key, val] = text.split(';');

  // 如果沒有教過就初始化
  if (!db.map[key]) db.map[key] = [];

  // 記錄到列表中
  db.map[key].push({
    sessionId: context.session.id,
    keyword: key,
    message: val,
  });

  // 這整段程式碼會放到 async function 中，所以可以等待這個 promise
  await context.sendText('好哦~好哦~*1');
};
