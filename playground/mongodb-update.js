const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, client) {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    
    // Arguments for find one and update: (filter, update, options, callback) 
    
//    db.collection("Todos").findOneAndUpdate({
//        _id: new ObjectID("5aa6e7945d5fb707e16a4291")
//    }, {
//        $set: {
//            completed: true
//        }
//    }, {
//        returnOriginal: false
//    }).then(function(result) {
//        console.log(result);
//    });
    
//    db.collection("Users").findOneAndUpdate({
//        name: "Vuk"
//    }, {
//        $set: {
//            name: "Drogba"
//        }
//    }, {
//        returnOriginal: false
//    }).then(function(result) {
//        console.log(result);
//    });
    
    db.collection("Users").findOneAndUpdate({
        age: 19
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(function(result) {
        console.log(result);
    });
    
//    client.close();
});