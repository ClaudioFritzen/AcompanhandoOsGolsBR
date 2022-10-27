import app from "./firebase.js"

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

import { doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const db = getFirestore(app)


/*  modificando o placar  */ 
/* function updateScore(id, br, other) {
    const element = document.getElementById(id)
    element.innerText = `${br} x ${other}` 

} */

onSnapshot(doc(db, 'matches', 'br01'), (doc) => {
    console.log("Current data:", doc.data());
})


function showConfet(id) {
    const element = document.getElementById(id)
    party.confetti(element)
}


