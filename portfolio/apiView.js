
(function(){
  var firebaseConfig = {
    apiKey: "AIzaSyAMF4h4eg3-ohvt0grw66S48Tr3-sbm40c",
    authDomain: "my-arts7.firebaseapp.com",
    projectId: "my-arts7",
    storageBucket: "my-arts7.appspot.com",
    messagingSenderId: "929407521419",
    appId: "1:929407521419:web:0296f988a5408a3e93ba8e",
    measurementId: "G-6KDPWK6HSL"
  }
    firebase.initializeApp(firebaseConfig)
})()




var db = firebase.firestore()




function view(ip,data,hora){
    db.collection('visits').doc(`${ip}`).set({
    ip: `${ip}`,
    date: `${data}`,
    hora:`${hora}`
    
})
  db.collection('allVisits').add({
    ip: `${ip}`,
    date: `${data}`,
    hora: `${hora}`
    
})    
.then((docRef) => {
    console.log("Document written with ID: ");
})
}







