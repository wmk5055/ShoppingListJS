// var counter = document.getElementsByClassName("count")[0];
// var counterBtn = document.getElementsByTagName("button")[0];
// counterVal = Number(counter.textContent);

// i =0; 
// counterBtn.addEventListener("click",function(){
//     i++;
//     counter.innerHTML = i;
//     console.log("click!");
// })

var buttonEnter = document.getElementById("enter");
var inputTxtBox = document.getElementById("userinput");
var ul = document.querySelector("ul");
var buttonDelete = document.querySelector("ul > button");


function inputLength() {
    return inputTxtBox.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    var button = document.createElement("button");
    li.appendChild(document.createTextNode(inputTxtBox.value));
    button.appendChild(document.createTextNode("Delete"));
    button.classList.add("delButton")
    ul.appendChild(li);
    li.appendChild(button);
    inputTxtBox.value="";
}

function addListAfterClick() {
    if(inputLength()> 0){
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if(inputLength() > 0 && event.key === 'Enter'){
        createListElement();
    }


}

function markListElementDone(event){
    if (event.target.tagName.toLowerCase() === "li"){
        event.target.classList.toggle("done");
    }

}

function deleteListElement(event){
    if (event.target.tagName.toLowerCase() === "button"){
        event.target.parentNode.remove();
    }

}

function handleULClick(event){
    deleteListElement(event);
    markListElementDone(event);
}


buttonEnter.addEventListener("click",addListAfterClick);

inputTxtBox.addEventListener("keypress", addListAfterKeyPress);

// ul.addEventListener("click",markListElementDone);

// ul.addEventListener("click",deleteListElement);
ul.addEventListener("click",handleULClick);