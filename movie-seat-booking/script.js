const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;
populateUI();

function saveMovieData(movieIndex) {
  localStorage.setItem('movieIndex', movieIndex);
  //   localStorage.setItem('moviePrice', moviePrice);
}

function populateUI() {
  let selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    // console.log(seats);
    selectedSeats.forEach((el) => {
      //   console.log(seats[+el]);
      seats[el].classList.add('selected');
    });
  }

  let selectedMovieIndex = localStorage.getItem('movieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = +selectedMovieIndex;
    ticketPrice = movieSelect.value;
  }
  updateSelectedCount();
}

function updateSelectedCount() {
  let selectedSeats = document.querySelectorAll('.row .seat.selected');

  let seatsIndexArr = [...selectedSeats].map((seat) => {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndexArr));

  count.innerText = selectedSeats.length;
  total.innerText = selectedSeats.length * ticketPrice;
}

container.addEventListener('click', (evt) => {
  if (
    evt.target.classList.contains('seat') &&
    !evt.target.classList.contains('occupied')
  ) {
    evt.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

movieSelect.addEventListener('change', (evt) => {
  saveMovieData(evt.target.selectedIndex, evt.target.value);
  ticketPrice = +evt.target.value;
  updateSelectedCount();
});
