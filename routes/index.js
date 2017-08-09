var moviesJson = require('../movies.json');


//home
exports.home = function (req,res) {
	//getting all the movies
	var movies = moviesJson.movies;
	res.render('home',{
		title:"Star_Wars_Movies",
		movies : movies
	});
};

//movie single
exports.movie_single = function(req,res){
	var episode_number = req.params.episode_number;

	var movies = moviesJson.movies;

	if (episode_number >=1 && episode_number<=6) {
		var movie = movies[episode_number-1];
	
		var title = movie.title;

		var poster = movie.poster;

		var description = movie.description;

		var main_characters = movie.main_characters;

		var hero_image = movie.hero_image;

		res.render('movie_single', {
			movies :movies,
			title :title,
			poster :poster,
			description: description,
			main_characters :main_characters,
			hero_image : hero_image
		});
	}else {
		res.render('notfound', {
			movies :movies,
			title : "This is not the page you are looking for"
		});
	}
};

//not found
exports.notFound =  function (req,res){
	var movies = moviesJson.movies;

	res.render('notfound', {
		movies : movies,
		title : "This is not the page you are looking for"
	});
};