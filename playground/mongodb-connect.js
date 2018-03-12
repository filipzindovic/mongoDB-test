//const MongoClient = require("mongodb").MongoClient;

// An example of Object destructuring.. Set the var/const name as an object literal with the actual name of the property inside. 
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, client) {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    
//    db.collection("Todos").insertOne({
//        text: "something to do",
//        completed: false
//    }, function(err, result) {
//        if (err) {
//            return console.log("Unable to insert To do.", err)
//        }
//        
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
    
    db.collection("Users").insertOne({
        name: "Vuk",
        age: 19,
        location: "London"
    }, function(err, result) {
        if (err) {
            return console.log("Unable to insert To do.", err)
    }
    
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    
    
    client.close();
});