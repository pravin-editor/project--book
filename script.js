//select pop
var pop = document.querySelector(".up")
var over = document.querySelector(".over")
var button = document.getElementById("pop")

button.addEventListener("click", function () {
    pop.style.display = "block"
    over.style.display = "block"
})

//slect delete btn
var cancle = document.getElementById("cancle")

cancle.addEventListener("click", function (event) {
    event.preventDefault()
    over.style.display = "none"
    pop.style.display = "none"
})

//slect add ,title,author,descript,conatiner

var contain = document.querySelector(".container")
var addb = document.getElementById("add")
var booktittle = document.getElementById("tittle")
var author = document.getElementById("author")
var descrip = document.getElementById("description")

addb.addEventListener("click", function (event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "Books")
    div.innerHTML = `<h2>${booktittle.value}</h2>
    <h4>${author.value} </h4>
    <p>${descrip.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    contain.append(div)
    over.style.display = "none"
    pop.style.display = "none"
})

function deletebook(event)
{
    event.target.parentElement.remove()
}