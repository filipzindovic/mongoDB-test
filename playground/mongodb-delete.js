const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", function(err, client) {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    
    //deleteMany - deletes all documents that match the case provided - in this instance all that have text: "Eat lunch"
//    db.collection("Todos").deleteMany({text: "Eat lunch"}).then(function(result) {
//       console.log(result); 
//    });
    
    
    //deleteOne - deletes the first document in the collection based on the case provided.
//    db.collection("Todos").deleteOne({text: "Eat lunch"}).then(function(result) {
//       console.log(result); 
//    });
    
    
    //findOneAndDelete - finds, displays and deletes the first document in the collection that matches the case provided.
//    db.collection("Todos").findOneAndDelete({completed: false}).then(function(result) {
//       console.log(result); 
//    });
    
    db.collection("Users").findOneAndDelete({_id: new ObjectID("5aa688ce0601c55c508c62c2")}).then(function(result) {
        console.log(result);
    });
//    client.close();
});