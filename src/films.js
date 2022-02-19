const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(function(movie){
    return movie.director;
  });
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesFromDirector = array.filter(movie => movie.director == director)
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter(movie => movie.director == director)
  let scoreTotal = moviesFromDirector.reduce((acc, item) => acc.score + item.score)
  let scoreAverage = scoreTotal / moviesFromDirector.length;
  return scoreAverage;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titlesOrderAlphabeticaly = array.map(function(movie){
    return movie.title;
  });
  titlesOrderAlphabeticaly.sort()
  return titlesOrderAlphabeticaly.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayOrderByYear = array.slice()

  function sortArray(a, b){
    
  if (a.year < b.year) return -1;
  if (a.year > b.year) return 1;
  else {
   // Si es el mismo año ordenar alfabeticamente
    if (a.title > b.title) return 1;
    else if (a.title < b.title) return -1;
    return 0;
  }
  }
  return arrayOrderByYear.sort(sortArray);
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesGenre = array.filter(movie => movie.genre.includes(genre) && movie.score != "");
  let scoreGenreTotal = moviesGenre.reduce((acc, item) => acc + item.score, 0);
  let genreScoreAverage = scoreGenreTotal / moviesGenre.length;
  return genreScoreAverage;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let durationMinutes = array.map(movie => {
    let hours = parseInt(movie.duration[0])*60
    let minutes = movie.duration.length > 3 ? parseInt(movie.duration.slice(3, -3)) : 0;
      let newDuration = {
          duration: hours + minutes
      };
    return newDuration;
  });
  return durationMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filmsOfYear = array.filter(movie => movie.year == year)
  filmsOfYear.sort(function(a, b) {
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
      return 0;
  });
  return filmsOfYear.splice(0,1);
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
