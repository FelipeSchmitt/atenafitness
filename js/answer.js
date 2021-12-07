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

  let answers = []

  function renderTasks(){
    const answer_session = document.getElementById("answer_session")
    for (doc of answers){  

        const box = document.createElement("div")
        box.id="box"
        answer_session.appendChild(box)

        const date_box = document.createElement("div")
        date_box.id="date_box"
        date_box.appendChild(document.createTextNode(doc.date))
        box.appendChild(date_box)

        const user_box = document.createElement("div")
        user_box.id="user_box"
        const image = document.createElement("img")
        image.src=doc.user_image
        box.appendChild(user_box)
        user_box.appendChild(image)

        const title_box = document.createElement("div")
        title_box.id="title_box"
        title_box.appendChild(document.createTextNode(doc.title))
        box.appendChild(title_box)

        const answer_button = document.createElement("div")
        answer_button.id="answer_button"
        const button = document.createElement("button")
        button.appendChild(document.createTextNode("Responder"))
        answer_button.appendChild(button)
        box.appendChild(answer_button)

      }
  }

async function readTasks() {
    answers = []
    const logTasks = await db.collection("answers").get()
    for (doc of logTasks.docs) {
    answers.push({
        id: doc.id,
        date: doc.data(). date,
        title: doc.data().title,
        user_image: doc.data().user_image,
        })
    }
    renderTasks()
}
readTasks()








///<div id="box">
///        <div id="date_box">29/11/2021 - 8:40h</div>
///        <div id="user_box"><img src="https://w5f6e4y3.rocketcdn.me/wp-content/uploads/2020/09/01-muzy-1-757x1024.png" alt=""> Dr. Paulo Muzy</div>
 ///       <div id="title_box">Sua prioridade é carga ou execução? Por que?</div>
///        <div id="answer_button"><button>Responder</button></div>
///    </div>

///    <div id="box">
///        <div id="date_box">29/11/2021 - 8:01h</div>
///        <div id="user_box"><img src="https://scontent.fbnu3-1.fna.fbcdn.net/v/t39.30808-6/216551333_2889185274663229_7198721939241291798_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Enc2UyfQ7IYAX_9unfk&_nc_ht=scontent.fbnu3-1.fna&oh=db2d1333cb1a99a380dc1515d0aa34ff&oe=61AA67C2" alt=""> FelipeSchmitt007</div>
///        <div id="title_box">Tomar uma dose acima do recomendado de creatina faz mal ao corpo?</div>
///        <div id="answer_button"><button>Responder</button></div>
 ///   </div>