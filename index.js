const express = require("express");
const app = express();                                                 // initialize express app
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");                                     // import Chat model
const methodOverride = require("method-override");                                  

// ------------------ View Engine Setup ------------------
app.set("views", path.join(__dirname, "views"));                               // set views folder path
app.set("view engine", "ejs");                                                // set EJS as template engine
app.use(express.static(path.join(__dirname, "public")));             // Serve static files (CSS, JS, images) from "public" folder
app.use(methodOverride("_method"));

// ------------------ Start Server ------------------
app.listen(8080, () => {
    console.log("app is listening at port 8080");
});

// ------------------ MongoDB Connection ------------------
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');            // connects to MongoDB (localhost, port 27017, DB name = whatsapp)
}

main()                                                                       // run connection and handle promise result                     
    .then((res) => console.log("connection successful"))
    .catch((err) => console.log(err));



app.get("/", (req, res) => {                                                 //home route
    res.send("root is working");
});




// Index route → show all chats
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();                      // Fetch all chat documents from the database (Chat collection)

    res.render("index.ejs", { chats });               // Render the "index.ejs" template and pass chats data to it
});




//new route
app.get("/chats/new", (req, res) => {                  // "New chat" route → shows a form to create a new chat
    res.render("new.ejs");                                      // Render the new.ejs template (form for adding a chat)
});

app.use(express.urlencoded({ extended: true }));                   // Middleware to parse data from POST request body (form data)

app.post("/chats", (req, res) => {                        // "Create chat" route → handles form submission
    let { from, to, msg } = req.body;                    // Extract "from", "to", and "msg" fields from the submitted form
    let newChat = new Chat({                                // Create a new Chat object with the extracted data
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save()                                               // Save the new chat to MongoDB
        .then((res) => {
            console.log("chat was saved");
        })
        .catch((err) => {
            console.log(err);
        })
    res.redirect("/chats");                                 // After saving, redirect the user back to the chats index page
});





//edit route
app.get("/chats/:id/edit", async (req,res) => {                // Show the edit form for a specific chat
    let { id } = req.params;
    let chat = await Chat.findById(id);                           // Find the chat in MongoDB by its ID
    res.render("edit.ejs", { chat });                               // Render the edit.ejs template and pass the chat object
});

app.put("/chats/:id", async (req,res) => {                     // Handle form submission when a chat is edited
    let { id } = req.params;
    let {msg: newMsg} = req.body;                                  // Extract "msg" field from the form data (rename it as newMsg)

    // Find chat by ID & update its "msg" field, runValidators -> applies schema validation rules,  new: true -> returns the updated document instead of the old one
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});

    console.log(updatedChat);                                      // Log the updated chat object in the server console
    res.redirect("/chats");                                       // Redirect back to the chats index page after updating
})






//delet route
app.delete("/chats/:id", async (req,res) => {                             // Handles deletion of a specific chat
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);                       // Find the chat by ID and delete it from the database
    console.log(deletedChat);                                        // Log the deleted chat object (useful for debugging)
    res.redirect("/chats");
})




