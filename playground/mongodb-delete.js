const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MonogoDB server');
  }
  console.log('Connected to MonogoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Sam'}).then((result) => {
  //   console.log(result.result.n);
  // });

  db.collection('Users').deleteOne({
    _id: new ObjectID('58e7bc1ee498471bc3b6683b')
  }).then((result) => {
    console.log(result.result.n);
  });

  // db.close();
});
