let button = document.getElementsByClassName("btn")[0];
let input = document.getElementById("task");
let ul = document.querySelector("ul");


button.addEventListener("click", function() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value ="";
    } else {
        alert("Please enter a Goal")
    }
})

input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.code === "Enter") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value ="";
    } else if (input.value.length <= 0 && event.code === "Enter") {
        alert("Please enter a Goal")
    }
})

ul.onclick = function(event) {
    var target= event.target;
    target.classList.toggle("done");
}

function deleteButton(x) {
    var del = document.createElement('button');
    del.style.textDecoration = 'none';
    del.innerHTML = 'Remove this person?';
    del.style.color = 'white';
    del.style.backgroundColor = 'blue';
    document.body.appendChild(del);
}