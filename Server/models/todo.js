const mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
   text: {
       type: String,
       required: true,
       minLength: 1,
       trim: true
   },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: "Fill up water",
    completed: false,
    completedAt: 1
});

newTodo.save().then(function(doc) {
    console.log(`Saved to-do: ${doc}`);
}, function(err) {
    console.log(`Unable to save todo`);
});

module.exports = {Todo};