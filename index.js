import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js"
import { getDatabase,
        ref,
        push
 } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js"


const firebaseConfig = {
    databaseURL: import.meta.env.VITE_DATABASE_URL
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

console.log("Database URL from .env:", firebaseConfig.databaseURL)
console.log("Firebase app initialized:", app.name)
console.log("Database object:", database)


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    
})

inputBtn.addEventListener("click", function() {
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
})