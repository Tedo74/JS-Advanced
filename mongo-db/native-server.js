const mongodb = require('mongodb');

connectionStr = 'mongodb://localhost:27017/myDb';

mongodb.MongoClient.connect(
  connectionStr,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (connectErr, client) => {
    if (connectErr) {
      console.log(connectErr);
      return;
    }
    const coll = client.db('myDb').collection('cars');
    coll.insertOne({ model: 'BMW' });// add item to db
    coll
      .find()
      .toArray()
      .then((data) => {
        console.log(JSON.stringify(data));
      });
    // read all
  }
);
