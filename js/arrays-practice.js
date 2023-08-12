//STEP 1
/* 
var FavMovies = ["A Beautiful Mind", "Murder mystery","Lion","The Grand Budapest Hote",
"Australia"];
console.log(FavMovies[1]);
 */


//STEP 2
/* 
var movies = Array(5)
movies[0] = "A Beautiful Mind"
movies[1] = "Murder mystery"
movies[2] = "Lion"
movies[3] = "The Grand Budapest Hote"
movies[4] = "Celine"
console.log(movies[0])

 */

//STEP 3
/* 
var movies = Array(5)
movies[0] = "A Beautiful Mind"
movies[1] = "Murder mystery"
movies[2] = "Lion"
movies[3] = "The Grand Budapest Hote"
movies[4] = "Celine"

 movies.splice(2,0,"new movie")
 console.log(movies)
console.log(movies.length)
 */

//STEP 4
/* 
var movies = [];
movies[0] = "A Beautiful Mind"
movies[1] = "Murder mystery"
movies[2] = "Lion"
movies[3] = "The Grand Budapest Hote"
movies[4] = "Celine"
movies.shift();
console.log(movies);
 */

//STEP 5
/* 
var movies = [];
movies[0] = "A Beautiful Mind"
movies[1] = "Murder mystery"
movies[2] = "Lion"
movies[3] = "The Grand Budapest Hote"
movies[4] = "Celine"
movies[5] = "Australia"
movies[6] = "Good Night Oppy"

for (let i in movies) {
	console.log(movies[i]);
}

 */

//STEP 6
/* 
var movies = [];
movies[0] = "A Beautiful Mind"
movies[1] = "Murder mystery"
movies[2] = "Lion"
movies[3] = "The Grand Budapest Hote"
movies[4] = "Celine"
movies[5] = "Australia"
movies[6] = "Good Night Oppy"

for (let i of movies) {
	console.log(i);
}
 */
//STEP 7

/* var movies = [];
movies[0] = "A Beautiful Mind"
movies[1] = "Murder mystery"
movies[2] = "Lion"
movies[3] = "The Grand Budapest Hote"
movies[4] = "Celine"
movies[5] = "Australia"
movies[6] = "Good Night Oppy"

for (let i of movies) {
	console.log(movies.sort(i));
     ;
} */

//STEP 8
/* 
var movies = [];
movies[0] = "A Beautiful Mind"
movies[1] = "Murder mystery"
movies[2] = "Lion"
movies[3] = "Celine"
movies[4] = "Good Night Oppy"

var leastFavMovies = ["Drishaym2","Crazy Rich Asians","All Good Things"]

console.log("Movies I liked: \n\n")
for(var i = 0; i < movies.length; i++){
     console.log(movies[i]+" \n")
}

console.log("\n\nMovies I regret watching: \n\n")
for(var i = 0; i < leastFavMovies.length; i++){
     console.log(leastFavMovies[i]+" \n")
}
 */

//STEP 9
/* var movies = [];
movies[0] = "A Beautiful Mind"
movies[1] = "Murder mystery"
movies[2] = "Lion"
movies[3] = "Celine"
movies[4] = "Good Night Oppy"

var leastFavMovies = ["Drishaym2","Crazy Rich Asians","All Good Things"]

var movies = movies.concat(leastFavMovies)
console.log(movies.sort().reverse()) */


//STEP 10
/* 
var movies = [];
movies[0] = "A Beautiful Mind"
movies[1] = "Murder mystery"
movies[2] = "Lion"
movies[3] = "Celine"
movies[4] = "Good Night Oppy"

var leastFavMovies = ["Drishaym2","Crazy Rich Asians","All Good Things"]

var movies = movies.concat(leastFavMovies)
console.log(movies)
console.log("Last iten is: "+movies.slice(-1))
 */

//STEP 11
/* 
var movies = [];
movies[0] = "A Beautiful Mind"
movies[1] = "Murder mystery"
movies[2] = "Lion"
movies[3] = "Celine"
movies[4] = "Good Night Oppy"

var leastFavMovies = ["Drishaym2","Crazy Rich Asians","All Good Things"]

var movies = movies.concat(leastFavMovies)
console.log(movies)
console.log("first iten is: "+movies.shift())

 */
//STEP 12

// movies[0] = "A Beautiful Mind"
// movies[1] = "Murder mystery"
// movies[2] = "Lion"
// movies[3] = "Celine"
// movies[4] = "Good Night Oppy"

// var leastFavMovies = ["Drishaym2","Crazy Rich Asians","All Good Things"]
var movies = ["A Beautiful Mind","Drishaym2","Crazy Rich Asians","Murder mystery","Lion","Celine","Good Night Oppy","All Good Things"];


//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17