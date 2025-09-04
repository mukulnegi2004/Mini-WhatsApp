const mongoose = require("mongoose");
const Chat = require("./models/chat.js");                                      // Import Chat model
 
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');            // Connect to local MongoDB server, database = "whatsapp"
}
 
main()                                                                  // Call main() to establish connection
    .then((res) => console.log("connection successful"))
    .catch((err) => console.log(err));

// ------------------ Sample Data ------------------
let allChats = [
    {
        from: "daksh",
        to: "kushan",
        msg: "i am daksh",
        created_at: new Date()    
    },
    {
        from: "rohit",
        to: "priyanshu",
        msg: "i am rohit",
        created_at: new Date()    
    },
    {
        from: "mukul",
        to: "saksham",
        msg: "i am mukul",
        created_at: new Date()    
    },
    {
        from: "harsh",
        to: "rakesh",
        msg: "i am harsh",
        created_at: new Date()    
    },
    {
        from: "raju",
        to: "bheem",
        msg: "i am raju",
        created_at: new Date()    
    },
];

Chat.insertMany(allChats)                                         // Insert multiple documents into "chats" collection 
    .then((res) => {
        console.log("Chats inserted:", res);
    })
    .catch((err) => {
        console.log("Error inserting chats:", err);
    });