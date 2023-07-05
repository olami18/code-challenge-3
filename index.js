let availableTickets=0
function showMoviedetails(movie){
    const availableTickets=movie.capacity - movie.tickets_sold
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML= `
    <img src="${movie.poster}" alt="${movie.title} Poster">
    <h2>${movie.title}</h2>
    <p>Runtime : ${movie.runtime} mins </p>
    <p>Showtime :${movie.showtime}</p>
    <p id="available">Available Tickets: ${availableTickets}</p>
    <p>${movie.description}</p>
    <button id="buy-ticket">Buy Ticket</button>
    `;
    const ticketButton = document.getElementById("buy-ticket");
ticketButton.addEventListener("click",buyTickets(movie))
}

function getMovieDetails(movieId){
fetch(`http://localhost:3000/films/${movieId}`)
.then(response => response.json())
.then((movie) =>{
    showMoviedetails(movie)
})
}
getMovieDetails(1)

fetch('http://localhost:3000/films')
.then(response => response.json())
.then(movies => {
    const filmMenu = document.getElementById('films');
    movies.forEach(movie => {
        const filmItem = document.createElement('li');
        filmItem.classList.add('film', 'item');
        filmItem.textContent = movie.title;
        filmItem.addEventListener('click', function() {
            getMovieDetails(movie.id);
          });
        
        filmMenu.appendChild(filmItem);
    });
})
 function buyTickets(movie){
    const Tickets= document.getElementById("available")
    if (availableTickets>0){
        movie.tickets_sold += 1
        availableTickets -= 1
        Tickets.textContent=`Available Tickets: ${availableTickets}`
    }
    if (availableTickets===0){
        availableTickets.textContent="Available Tickets: Sold Out"
    }
}
