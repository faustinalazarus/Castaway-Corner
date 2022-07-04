document.getElementById("loginform").addEventListener("submit",(Event)=>{

    Event.preventDefault()

})

firebase.auth().onAuthStateChanged((user)=>{
    if (user){
      location.replace("overview2.html")
    }
  })


  
  document.getElementById("signin").addEventListener('click', function(){

    const email2 = document.getElementById("email2").value
    const password2 = document.getElementById("password2").value    
    
    signInWithEmailAndPassword(auth, email2, password2)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log("logged in");

      function myFunction() {
    window.location.href="overview.html";
  }

      signin.myFunction();

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });

    firebase.auth().onAuthStateChanged((user)=>{
      if (user){
        location.replace("homepage.html")
      }
    })

  })