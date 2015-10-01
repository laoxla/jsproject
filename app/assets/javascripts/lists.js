
// function outputLowBudgetMovies2HTML(movies){
//   var filteredMovies = movies.filter(function(movie){
//       return (movie.budget)=== 55;
//   });
//   var lowBudgetTitles = filteredMovies.map(function(movie){
//     return (movie.title)
//   })
//
//   lowBudgetTitles.forEach(function(title){
//     $(".low-budget-movies").append("<p>" + title + "</p>")
//    })
// }
//
// $(window).ready(function(){
//
//   $("button").on(  "click", function(){
//
//     $(".low-budget-movies").html("")
//
//     $.getJSON("/movies.json").then(function(data){
//       var movies = data.movies;
//
//       outputLowBudgetMovies2HTML(movies)
//
//
//
//       var leoWithMovies = _.filter(movies, function(movie){
//         return _.contains(movie.stars, 'Leonardo DiCaprio');
//
//       });
//       var leoMovieTitles = leoWithMovies.map(function(leoMovieTitle){
//         return (leoMovieTitle.title)
//       })
//
//       leoMovieTitles.forEach(function(title){
//         $(".leo-movies").append("<p>" + title + "</p>")
//        })
//
//
//
//     })
//
//   })
//
//
// });

 function groupedMovies(container, movies) {
$(container).html("");
  movies.forEach(function(movie) {
  $(container).append(
    '<div class="movie"><p>' + movie.title + '</p></div>'
  );

});
}

$(window).ready(function() {
 $('button').on('click', function() {
   $.getJSON('/movies.json', function(data) {
     var low = _.where(data.movies, { budget: 55 });
     groupedMovies('.low-budget-movies', low);

     var leo = _.filter(data.movies, function(movie) {
       return _.contains(movie.stars, 'Leonardo DiCaprio');
     });
     groupedMovies('.leo-movies', leo);

   });
 });

});
