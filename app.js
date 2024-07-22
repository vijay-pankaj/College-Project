import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDr1yc8fUFPxgMgMCF0rSxJxjTC0GK8RnA",
    authDomain: "final-year-30c32.firebaseapp.com",
    projectId: "final-year-30c32",
    storageBucket: "final-year-30c32.appspot.com",
    messagingSenderId: "199698423825",
    appId: "1:199698423825:web:b6cc47b006b2b4ede9d1b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-Up Form
document.getElementById('signUpForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPwd').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account created successfully!");
            window.location.href = "Home.html"; // Redirect to a success page
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Sign-In Form
document.getElementById('signInForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signInPwd').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Signed in successfully!");
            window.location.href = "Home.html"; // Redirect to a dashboard or another page
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Toggle between sign-up and sign-in forms
document.getElementById('signin-btn').addEventListener('click', function() {
    document.getElementById('create-account-section').classList.add('hidden');
    document.getElementById('signin-section').classList.remove('hidden');
});

document.getElementById('create-account-btn').addEventListener('click', function() {
    document.getElementById('signin-section').classList.add('hidden');
    document.getElementById('create-account-section').classList.remove('hidden');
});
