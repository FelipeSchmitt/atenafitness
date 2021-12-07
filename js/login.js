var firebaseConfig = {
    apiKey: "AIzaSyACcdPFcKsqkJj8x1t6z-C27c5i4q00EUQ",
    authDomain: "fir-add-f9176.firebaseapp.com",
    databaseURL: "https://fir-add-f9176.firebaseio.com",
    projectId: "fir-add-f9176",
    storageBucket: "fir-add-f9176.appspot.com",
    messagingSenderId: "136362278141",
    appId: "1:136362278141:web:0b0f2479439806641fd294"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function login() {
    if (firebase.auth().currentUser) {
      firebase.auth().signOut()
    }
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        swal
          .fire({
            icon: "success",
            title: "Login realizado com sucesso",
          })
          .then(() => {
            setTimeout(() => {
              window.location.replace("user_info.html")
            }, 1000)
          })
      })
      .catch((error) => {
        const errorCode = error.code
        switch (errorCode) {
          case "auth/wrong-password":
            swal.fire({
              icon: "error",
              title: "Senha inválida",
            })
            break
          case "auth/invalid-email":
            swal.fire({
              icon: "error",
              title: "E-mail inválido",
            })
              .then((result) => {
                if (result.value) {
                  signUp(email, password)
                }
              })
            break
          default:
            swal.fire({
              icon: "error",
              title: "Usuário ou senha invalidos!",
            })
        }
      })
  }
  
  function cadastro() {
    if (firebase.auth().currentUser) {
        firebase.auth().signOut()
      }
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        swal
          .fire({ icon: "success", title: "Usuário foi criado com sucesso" })
          .then(() => {
            setTimeout(() => {
              window.location.replace("user_info.html")
            }, 1000)
          })
      })
    }
    
  function logout() {
  firebase.auth().signOut()
}

function showhide(){
  var showhide = document.getElementById("password")
  console.log(showhide)
  if(showhide.type == "password"){
      showhide.type="text"
  }else{
      showhide.type="password"
  }
}