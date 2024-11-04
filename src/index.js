const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const search = document.getElementById("searchByID").value;
      // console.log(event.target.children[1].value);
      // console.log(search.value)
      fetch(`http://localhost:3000/movies/${search}`)
        .then((response) => response.json())
        .then((data) => {
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
          title.innerText = data.title;
          summary.textContent = data.summary;
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  fetch("http://localhost:3000/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Avengers Endgame",
      summary:
        "Earth heroes unite to bring back people who were wipped away by the mad titan",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));