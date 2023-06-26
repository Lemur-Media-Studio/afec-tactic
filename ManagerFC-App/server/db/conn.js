const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: async function (callback) {
    console.log("test");

    try {
      await client.connect();
    } catch (e) {
      console.error(e);
    }

    _db = client.db("employees");

    try {
      var count = await _db.collection("records").countDocuments();
      console.log("records player " + count);
      var count = await _db.collection("preselectPlayers").countDocuments();
      console.log("preselectPlayers " + count);
    } catch (e) {
      console.error(e);
    }

    if(_db !== undefined){
      return true;
    }
  },
  getDb: function () {
    return _db;
  },
};