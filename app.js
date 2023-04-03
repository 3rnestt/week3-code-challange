// const endpointFilms = 'http://localhost:3000/films';
// const endpointFilm = 'http://localhost:3000/films/1';

// // DOM elements
// const filmList = document.querySelector('#films');
// const filmTitle = document.querySelector('#film-title');
// const filmPoster = document.querySelector('#film-poster');
// const filmRuntime = document.querySelector('#film-runtime');
// const filmShowtime = document.querySelector('#film-showtime');
// const filmTickets = document.querySelector('#film-tickets');
// const buyButton = document.querySelector('#buy-button');

// // Fetch the list of films and populate the menu
// fetch(endpointFilms)
//   .then(response => response.json())
//   .then(films => {
//     filmList.innerHTML = '';
//     films.forEach(film => {
//       const li = document.createElement('li');
//       li.textContent = film.title;
//       li.classList.add('film', 'item');
//       li.addEventListener('click', () => showFilmDetails(film));
//       filmList.appendChild(li);
//     });
//   });

// // Fetch the first film and show its details
// fetch(endpointFilm)
//   .then(response => response.json())
//   .then(film => showFilmDetails(film));

// // Show the details of a film
// function showFilmDetails(film) {
//   filmTitle.textContent = film.title;
//   filmPoster.src = film.poster;
//   filmRuntime.textContent = `${film.runtime} minutes`;
//   filmShowtime.textContent = `Showing at ${film.showtime}`;
//   const availableTickets = film.capacity - film.tickets_sold;
//   filmTickets.textContent = `${availableTickets} tickets available`;
//   if (availableTickets === 0) {
//     buyButton.disabled = true;
//     buyButton.textContent = 'Sold Out';
//   } else {
//     buyButton.disabled = false;
//     buyButton.textContent = 'Buy Ticket';
//   }
//   buyButton.removeEventListener('click', buyTicket);
//   buyButton.addEventListener('click', () => buyTicket(film));
// }

// // Buy a ticket for a film
// function buyTicket(film) {
//   const availableTickets = film.capacity - film.tickets_sold;
//   if (availableTickets > 0) {
//     film.tickets_sold++;
//     showFilmDetails(film);
//   }
// }
