const mongoose = require("mongoose");                      // Import mongoose library (used to connect and interact with MongoDB)  

// Define schema (structure of documents inside "chats" collection)
const chatSchema = new mongoose.Schema({
    from: {                                                  // sender's name / id
        type: String,                                        // must be a string
        required: true                                            // field is mandatory
    },
    to: {                                                      // receiver's name / id
        type: String,                                           // must be a string
        required: true                                            // field is mandatory
    },
    msg: {                                                     // actual message text
        type: String,                                        // must be a string
        maxLength: 200                                                      // maximum length allowed = 200 characters
    },
    created_at: {                                                 // time when the message was created
        type: Date,                                                    // must be a Date object
        required: true                                            // must be provided
    }
});


const Chat = mongoose.model("Chat", chatSchema);       // Create model based on schema, "Chat" will automatically map to "chats" collection in MongoDB

module.exports = Chat;                   // Export the model so it can be used in other files 