console.log("this is note app.This is aap.js");
showNotes();
//if user add a note, add it to be localstorage
//create note
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let now = new Date();
	let dateTime = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} | ${now.getHours()}:${now.getMinutes()}`;
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})
//Function to show element from localstorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card bg-warning" 
            style="width: 21.5rem; height:350px; font-size:26px; padding:25px; margin-top:50px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");> 
                       <div class="card-body">
                        <h5 class="card-title text-white"> Note ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-danger w-100" style=" border-radius: 15px;
                        box-shadow: 0 9px #999;">Delete Note</button><br><br>
                        <button id="${index}" onclick="element.update( newContent );" class="btn btn-info w-100" style=" display: inline-block;
                        padding: 15px 25px;
                        font-size: 24px;
                        cursor: pointer;
                        text-align: center;
                        text-decoration: none;
                        outline: none;
                        color: #fff;
                        background-color: #4CAF50;
                        border: none;
                        border-radius: 15px;
                        box-shadow: 0 9px #999;">Reset Note</button>
                    </div>
                </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! use "Add a Note" section above to add notes.`;

    }
}
//Function to delete a note
function deleteNote(index) {
    console.log('i am deleting.', index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
//search function
let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        console.log(cardTxt);

    })
})



function margin(){
    var random_margin = ["-5px","1px","5px","10px","15px","20px"];
   return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate(){
    var random_rotate = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"];
   return random_rotate[Math.floor(Math.random() * random_rotate.length)];
}

function color(){
    var random_color = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
    if(i > random_color.length - 1){
        i = 0;
    }
    return random_color[i++]; 
}