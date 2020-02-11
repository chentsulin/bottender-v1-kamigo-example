const { partition, last } = require('lodash');

const db = require('./db');

module.exports = async function 卡米狗試著回話(context) {
  const { text } = context.event;

  const mappings = db.map[text];
  // 如果曾經有任何關於這個關鍵字的紀錄
  if (mappings && mappings.length > 0) {
    // 以 sessionId 匹配與否切分成兩個陣列
    const [localMappings, globalMappings] = partition(mappings, {
      sessionId: context.session.id,
    });

    // 先取 local 裡設定的最後一個，取不到才用 global 的
    const answer = last(
      localMappings.length > 0 ? localMappings : globalMappings
    ).message;

    await context.sendText(answer);
  }
};
