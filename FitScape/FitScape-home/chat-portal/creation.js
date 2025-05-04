// Import the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKHchgZEmwnyhHiuRzn*********88",
  authDomain: "groupchat-b228d.firebaseapp.com",
  projectId: "groupchat-b228d",
  storageBucket: "groupchat-b228d.appspot.com",
  messagingSenderId: "329230089438",
  appId: "1:3292mu6u7m7kl7b3c0b9564f",
  measurementId: "7j7kikNXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


document.getElementById('createGroupButton').addEventListener('click', function() {
    document.getElementById('groupPopup').classList.add('show');
  });
  
  // Hide popup when "Cancel" button is clicked
  document.getElementById('cancelPopup').addEventListener('click', function() {
    document.getElementById('groupPopup').classList.remove('show');
  });
  

// Handle group creation
document.getElementById('createGroupSubmit').addEventListener('click', function() {
  const groupName = document.getElementById('groupName').value;
  const eventName = document.getElementById('eventName').value;
  const date = document.getElementById('date').value;
  const timings = document.getElementById('timings').value;
  const location = document.getElementById('location').value;
  const charges = document.getElementById('charges').value;
  const ageGroup = document.getElementById('ageGroup').value;
  const description = document.getElementById('description').value;

  // Ensure all fields are filled
  if (groupName && eventName && date && timings && location && charges && ageGroup && description) {
    const groupData = {
      groupName,
      eventName,
      date,
      timings,
      location,
      charges,
      ageGroup,
      description
    };
    
    
    // Add group data under "fitnessGroups" category in the database
    const groupId = groupName; // Generate a unique ID using the current timestamp
    set(ref(db, 'fitnessGroups/' + groupId), groupData)
      .then(() => {
        document.getElementById('groupName').value = '';
        document.getElementById('eventName').value = '';
        document.getElementById('date').value = '';
        document.getElementById('timings').value = '';
        document.getElementById('location').value = '';
        document.getElementById('charges').value = '';
        document.getElementById('ageGroup').value = '';
        document.getElementById('description').value = '';
        // Hide the popup and show success message
        document.getElementById('groupPopup').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
          document.getElementById('successMessage').style.display = 'none';
        }, 3000);
      })
      .catch((error) => {
        console.error("Error creating group: ", error);
      });
  } else {
    alert("Please fill in all fields");
  }
});

document.getElementById('ViewGroupButton').addEventListener('click', () => {
  // Close the current window or redirect to the previous page
  window.location.href = 'interface.html';  // Replace with the group list page or home page
});
