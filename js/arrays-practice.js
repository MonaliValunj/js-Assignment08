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
//var movies = ["A Beautiful Mind","Drishaym2","Crazy Rich Asians","Murder mystery","Lion","Celine","Good Night Oppy","All Good Things"];


//STEP 13
/* 
let movies = ["A Beautiful Mind", 5, "Drishaym2", 1, "Good Night Oppy", 4, "Murder mystery", 3, "Celine", 2]

let names = movies.filter((item) => {
          return typeof item === 'string';
     });

console.log(names)
 */

//STEP 14
/* 
let employees = ["MONALI", "JOHN", "JESSICA", "MARK","FRED","SALLY"]
var showEmployee = function(arr){
     console.log("Employees: \n\n")
     arr.forEach((element) => console.log(element))
}
showEmployee(employees)
 */

//STEP 15
/* 
var arr =[58, '', 'abcd', true, null, false, 0]
function filterArray(elm){
     return (elm != null && elm !== false && elm !== "" && elm !== 0);
 }
console.log(arr.filter(filterArray));
 */
//STEP 16
/* 
var arr = [2,4,5,76,8,9,0,22,34,54,12,45]

function randomNum(arr){
     return arr[Math.floor(Math.random()*arr.length)]
}
console.log(randomNum(arr))
 */

//STEP 17
/* 
var arr = arr = [2, 4, 5, 76, 8, 9, 0, 22, 34, 54, 12, 45]
var largest = 0;

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > largest ) {
    largest = arr[i];
  }
}
console.log(largest);
 */