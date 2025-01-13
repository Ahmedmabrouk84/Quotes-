/*
MY nam's Ahmed Mabrouk
Web C43 Mon&Wed 12 PM Dokki
offline Group 
Assignment (problem solving)
Assinment 8
*/
//=============== Q1 ===================//


var authorQuote = [
  "-- Marcus Tullius Cicero", // 0
  "-- Mahatma Gandhi", // 1
  "-- Mae West", // 2
  "-- Mahatma Gandhi", // 3
  "-- Frank Zappa", //4
];
var Quotes = [
  " “A room without books is like a body without a soul.”", // 0
  " “Be the change that you wish to see in the world.”", // 1
  " “You only live once, but if you do it right, once is enough.”", // 2
  " “Live as if you were to die tomorrow. Learn as if you were to live forever.”", // 3
  " “So many books, so little time.”", // 4
];

function randomQuotes() {

  Math.random() * authorQuote.length;

  // var counter = Math.floor(Math.random() * authorQuote.length);
  var numRandom = Math.trunc(Math.random() * authorQuote.length);

 // console.log(numRandom)
 
//   console.log(Quotes[numRandom]);
//   console.log(authorQuote[numRandom]);

  document.getElementById("Quote-Output").innerHTML = Quotes[numRandom];
  document.getElementById("author-Output").innerHTML= authorQuote[numRandom];
}
 


