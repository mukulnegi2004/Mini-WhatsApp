# Mini WhatsApp

A simple chat application built with **Node.js**, **Express**, **MongoDB**, and **EJS**.  
Users can create, edit, view, and delete chats. This is a mini version of WhatsApp for learning and practice purposes.  

---

## 🚀 Features

- **View all chats** – See all messages in the database.
- **Create a new chat** – Add a new message with sender and receiver details.
- **Edit a chat** – Update the message content.
- **Delete a chat** – Remove a chat with confirmation.
- **Responsive layout** – Basic styling using CSS.
- **MongoDB database** – Stores all chat messages.

---

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Backend framework for handling routes and middleware.
- **MongoDB & Mongoose** – Database and ODM for storing chat data.
- **EJS** – Templating engine to render dynamic HTML.
- **HTML & CSS** – Frontend structure and styling.
- **JavaScript** – Client-side logic (confirmation for deletion).

---

## ⚡ Installation
```
1. Clone the repository:
2.git clone https://github.com/<your-username>/mini-whatsapp.git
cd mini-whatsapp

npm install
Start MongoDB (make sure MongoDB is installed and running):
mongod

Start the application:
node app.js

Open your browser and go to:
http://localhost:8080
```

---

## 📂 Folder Structure
```
mini-whatsapp/
│
├── models/
│   └── chat.js           # Mongoose schema & model for chats
│
├── views/
│   ├── index.ejs         # Displays all chats
│   ├── new.ejs           # Form to create new chat
│   └── edit.ejs          # Form to edit a chat
│
├── public/
│   ├── style.css         # CSS styles
│   └── app.js            # Client-side JS for delete confirmation
│
├── app.js                # Main server file
└── package.json
```

---

## 🔗 Routes
```
Method       	Route	         Description
GET           /	             Root route (test)
GET	          /chats	       List all chats
GET	         /chats/new	     Show form to create a chat
POST	       /chats	         Add a new chat
GET        	/chats/:id/edit	 Show form to edit a chat
PUT	        /chats/:id	     Update a chat message
DELETE	    /chats/:id      	Delete a chat message
```

