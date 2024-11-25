// Select button element and all elements with the class 'subcontainer'
const btn = document.querySelector("button");
const condiv = document.querySelectorAll(".subcontainer");

/*
// Light/Dark mode toggle using manual styles and conditions (commented-out version)
btn.addEventListener('click', () => {
    if (btn.innerHTML === "light mode") {
        // Switch to light mode: update background, subcontainer styles, and button text
        document.body.style.backgroundImage = "url('light.jpg')";
        condiv.forEach(elements => {
            elements.style.backgroundColor = "white";
            elements.style.color = "black";
        });
        btn.innerHTML = "dark mode"; 
    } else {
        // Switch back to dark mode: restore original background and styles
        document.body.style.backgroundImage = "url('5073414.jpg')";
        condiv.forEach(elements => {
            elements.style.backgroundColor = "rgba(91, 110, 110, 0.6)";
            elements.style.color = "white";
        });
        btn.innerHTML = "light mode"; 
    }
});
*/

// Light/Dark mode toggle using class-based approach
btn.addEventListener('click', () => {
    // Toggle the 'light-mode' class for the body and subcontainers
    document.body.classList.toggle('light-mode');
    condiv.forEach(element => {
        element.classList.toggle('light-mode');
    });
    // Update button text based on the current mode
    btn.innerHTML = document.body.classList.contains('light-mode') ? "Dark-mode" : "Light mode";
});

// Form validation logic
// Validates user input for name, password, phone number, and USN format using regex
function check() {
    var uname = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    let usn = document.getElementById("usn").value;

    // Validate that the username has at least 6 characters
    if (uname.length < 6) {
        alert("Name should be more than 6 characters.");
        return false;
    }

    // Validate that the password has at least 6 characters
    if (password.length < 6) {
        alert("Password should be more than 6 characters.");
        return false;
    }

    // Validate that the phone number is exactly 10 digits
    if (phone.length !== 10) {
        alert("Enter a valid number.");
        return false;
    }

    // Validate USN format using regex
    if (!usn.match(/^[1-4][A-Z]{2}\d{2}[A-Z]{2}\d{3}$/)) {
        alert("Enter a valid USN.");
        return false;
    }

    // If all validations pass, alert successful submission
    alert("Form submitted.");
    return true;
}

// To-Do List logic
// Add new tasks with delete and completion buttons
addBtn = document.querySelector("#addBtn");
addBtn.addEventListener('click', () => {
    let inputText = document.querySelector("#inputTask").value.trim();
    let li = document.createElement('li'); // Task text
    li.textContent = inputText;

    let deleteBtn = document.createElement('button'); // Button to delete task
    deleteBtn.textContent = "Delete";

    let compBtn = document.createElement('input'); // Radio button for marking task as completed
    compBtn.type = 'radio';
    compBtn.name = 'tasks';
    compBtn.onclick = () => {
        compBtn.checked = true; // Mark the task as completed
    };

    // Create containers to organize the task structure
    let SubliContainer = document.createElement('div');
    SubliContainer.className = 'SubliContainer';

    let liContainer = document.createElement('div');
    liContainer.className = 'liContainer';

    let listContainer = document.createElement('div');
    listContainer.className = 'listContainer';

    // Append task and buttons to their respective containers
    listContainer.appendChild(li);
    SubliContainer.appendChild(compBtn);
    SubliContainer.appendChild(deleteBtn);
    liContainer.appendChild(listContainer);
    liContainer.appendChild(SubliContainer);

    // Delete the task when the delete button is clicked
    deleteBtn.onclick = () => {
        liContainer.remove();
    };

    // Add the task to the list
    let addedList = document.querySelector('.addedList');
    addedList.appendChild(liContainer);
});

// Shifting panel hover effect logic
// Change z-index and background color on hover for each panel
let shiftingPanels = document.querySelectorAll(".shifting-panel div");
shiftingPanels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        panel.style.zIndex = "999"; // Bring panel to the front
        panel.style.backgroundColor = "rgb(27, 18, 18)"; // Change color on hover
    });
    panel.addEventListener('mouseout', () => {
        panel.style.zIndex = ''; // Reset z-index
        panel.style.backgroundColor = ''; // Reset color
    });
});

// Gallery logic
// Open and close full-screen image view
const images = document.querySelectorAll('.photo');
const fullmode = document.querySelector('.fullmode'); // Fullscreen overlay
const fullImage = fullmode.querySelector('img'); // Fullscreen image
const cancelBtn = document.querySelector('.cancel'); // Cancel button to close full-screen view

images.forEach(photo => {
    photo.addEventListener('click', () => {
        fullImage.src = photo.querySelector('img').src; // Set full-screen image source
        fullmode.style.display = 'flex'; // Show full-screen mode
    });
});

// Close full-screen mode when the cancel button or outside the image is clicked
cancelBtn.addEventListener('
