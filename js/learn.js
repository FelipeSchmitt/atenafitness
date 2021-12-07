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

  const db = firebase.firestore()

  let learns = []

  function renderTasks(){
    const learn_session = document.getElementById("learn_session")
    for (doc of learns){  

        const box = document.createElement("div")
        box.id="box"
        learn_session.appendChild(box)

        const title_box = document.createElement("div")
        title_box.id="title_box"
        title_box.appendChild(document.createTextNode(doc.title))
        box.appendChild(title_box)

        const image_box = document.createElement("div")
        image_box.id="image_box"
        const img = document.createElement("img")
        img.src= doc.image;
        image_box.appendChild(img)
        box.appendChild(image_box)

        const abstract_box = document.createElement("div")
        abstract_box.id="abstract_box"
        abstract_box.appendChild(document.createTextNode(doc.description))
        box.appendChild(abstract_box)

        const author_box = document.createElement("div")
        author_box.id="author_box"
        author_box.appendChild(document.createTextNode(doc.author))
        box.appendChild(author_box)
      }
  }

async function readTasks() {
    learns = []
    const logTasks = await db.collection("learns").get()
    for (doc of logTasks.docs) {
    learns.push({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        image: doc.data().image,
        author: doc.data(). author,
        })
    }
    renderTasks()
}
readTasks()












///* <div id="box"> 
 ///*               <div id="title_box">Triceps Pulley</div>
 ///*               <hr>
 ///*               <div id="image_box"><img src="image/triceps_pulley.png" alt=""></div>
 ///*               <hr>
 ///*           <div id="abstract_box">O triceps pulley é um exercício fundamental para o desenvolvimento do braço, pois esse musculo compreende dois terços do tamanho!O triceps pulley é um exercício fundamental para o desenvolvimento do braço, pois esse musculo compreende dois terços do tamanho!</div>
 ///*           <div id="author_box">FelipeSchmitt007</div>
 ///*           </div>