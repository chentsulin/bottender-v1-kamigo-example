const db = require('./db');

module.exports = async function 卡米狗忘記(context) {
  const { text } = context.event;

  // 斷開後第一個部分是「卡米狗忘記」，可以直接忽略它
  const [, key] = text.split(';');

  // 只過濾掉這個 session 所定義的
  db.map[key] = db.map[key].filter(
    mapping => mapping.sessionId !== context.session.id
  );

  await context.sendText('好哦~好哦~*1');
};
