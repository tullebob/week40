import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./jokeFacade"
import jokeFacade from "./jokeFacade"
import userFacade from "./userFacade"


/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */

function makeListItems(){

const jokes = jokeFacade.getJokes();
let jokeList = jokes.map(joke => `<li> ${joke} </>`).join("\n")
document.getElementById("jokes").innerHTML = jokeList;


}
makeListItems();

let myJoke = document.getElementById("jokeById");
let buttonFetch = document.getElementById("getJoke");
buttonFetch.addEventListener('click', (event) => {
    event.preventDefault();
    var id = document.getElementById("fetch").value;
    myJoke.innerHTML = jokeFacade.getJokeById(id -1);
});


let insertJoke = document.getElementById("addJokeP");
let buttonFetchJoke = document.getElementById("addJoke");
buttonFetchJoke.addEventListener('click', (event1) => {
  event1.preventDefault();
  var addJoke = document.getElementById("insertJoke").value;
  jokeFacade.addJoke(addJoke)
  var jokeID = jokeFacade.getJokes().length - 1

  insertJoke.innerHTML = jokeFacade.getJokeById(jokeID);

});



/* JS For Exercise-2 below */

//let insertQuote = document.getElementById("quote")
let buttonFetchQuote = document.getElementById("fetchQuote")
buttonFetchQuote.addEventListener('click', (event2) =>  {
  event2.preventDefault()
  //var quote = fetchQuote()
  fetchQuote()

})
function fetchQuote() {
  let url = 'https://studypoints.info/jokes/api/jokes/period/hour';
  let insertQuote = document.getElementById("quote")
  fetch(url)
      .then(res => res.text())
      .then((data) => {
          insertQuote.innerHTML = data
      });
}


/* JS For Exercise-3 below */

const URL = "http://localhost:3333/api/users"
fetch(URL)
.then(res=>res.json())
.then(users => {
    const userRows = users.map(user => `
    <tr>
      <td>${user.id}</td>
      <td>${user.age}</td>
      <td>${user.name}</td>
      <td>${user.gender}</td>
      <td>${user.email}</td>
    </tr>
    `)
    const userRowsAsString = userRows.join("")
    document.getElementById("allUserRows").innerHTML = userRowsAsString
})

/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/

function hideAllShowOne(idToShow) {
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt) {
  const id = evt.target.id;
  switch (id) {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



