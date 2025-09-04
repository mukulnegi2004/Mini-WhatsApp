const deleteForms = document.querySelectorAll(".delete-form");     // Selects ALL delete forms on the page (important since you have multiple chats)

for (let form of deleteForms) {                                  // Loops over each delete form one by one
    form.addEventListener("submit", function (e) {              // Adds an event listener for the "submit" event (when the Delete button is clicked)
        const confirmed = confirm("Are you sure you want to delete this chat?");                  // Show a confirmation popup to the user 

        if (confirmed == false) {                                                     // If the user clicks "Cancel", stop the form submission
            e.preventDefault();                                                       // Prevents sending the request to the server
        }                                                                  // If the user clicks "OK", the form submits normally → chat gets deleted
    });
}