const con = require("../mysql/db.mysql");

function createMessage(msgId, msgBody, msgIv) {
  let sql = `INSERT INTO burntable (messageId, messageEnc, messageIv) VALUES ("${msgId}", "${msgBody}", "${msgIv}")`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`Burnmessage ${msgId} inserted into the database`);
  });
}

function burnMessage(msgID) {
  let sql = `DELETE FROM burntable WHERE messageId = "${msgID}"`;
  con.query(sql, function (err, result) {
    if (result) {
      console.log(`Message ${msgID} burned 🔥`);
    }
  });
}

module.exports = {
  burnMessage,
  createMessage,
};
