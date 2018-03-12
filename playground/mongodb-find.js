const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, client) {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    
    //find() is just a MongoDB cursor - points to where the documents are.
    //toArray() returns a promise.
    db.collection("Todos").find({completed: false}).toArray().then(function(docs) {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    }, function(err) {
        console.log("Unable to fetch todos", err)
    });
    
    db.collection("Todos").find({completed: true}).count().then(function(count) {
        console.log(`Count: ${count}`);
    }, function(err) {
        console.log("Unable to fetch todos", err);
    });
    
//    client.close();
});