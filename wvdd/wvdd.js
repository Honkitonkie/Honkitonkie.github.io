var counter = 0;

var myArray = ["Acceptance",
  "Focus",
  "Perseverance",
  "Endurance",
  "Excellence",
  "Ambition",
  "Patience",
  "Criticism",
  "Mindfullness",
  "Thruth",
  "Honesty",
  "Efficiency",
  "Forgiveness",
  "Resourcefulness"
];

var mywords = ['"The greatest gift that you can give to others is the gift of unconditional love and acceptance"',
  '"Listen, smile, agree, and then do whatever you were going to do anyway."',
  '"Great works are performed not by strength but by perseverance."',
  '"Do not pray for an easy life, pray for the strength to endure a difficult one."',
  '"Excellence is not a skill, it is an attitude"',
  '"Men who say it cannot be done should not interrupt men doing it."',
  '"Patience is bitter, but its fruit is sweet"',
  '"Let the refining and improving of your own life keep you so busy that you have little time to criticize others."',
  '"Mindfulness can help people of any age. That is because we become what we think"',
  '"Three things cannot be long hidden: The sun, The moon, and the thruth"',
  '"Honesty is the first chapter of wisdom"',
  '"Everything should be made as simple as possible, but not simpler"',
  '"Always forgive your enemies; nothing annoys them so much"',
  '"It is not resources but resourcefulness that ultimately makes the difference"'
];

var whosaidit = ["Brian Tracy",
  "Robert Downey, Jr.",
  "Samuel Johnson",
  "Bruce Lee",
  "Ralph Marston",
  "Confucius",
  "Jean-Jacques Rousseau",
  "Jackson Brown",
  "Goldie Hawn",
  "Buddha",
  "Thomas Jefferson",
  "Albert Einstein",
  "Oscar Wilde",
  "Tony Robbins"
];




function putitin() {

  var x = Math.floor(Math.random() * myArray.length);
  var j = myArray[x];
  var m = mywords[x];
  var w = whosaidit[x];
  var height = window.outerHeight;
  var width = window.outerWidth;


  document.getElementById("hoi").innerHTML = j;
  document.getElementById("quote").innerHTML = m;
  document.getElementById("author").innerHTML = w;
  document.getElementById("one").style.visibility = "hidden";

  document.getElementsByTagName("body")[0].style.backgroundImage = 'url(https://source.unsplash.com/' + width + 'x' + height + '/?' + j + ',' + j + ')';
  document.getElementsByTagName("body")[0].style.backgroundSize = "cover";
  document.getElementsByTagName("body")[0].style.backgroundPosition = "center";
  document.getElementsByTagName("body")[0].style.backgroundRepeat = "no-repeat";
  document.getElementsByTagName("body")[0].style.backgroundMinHeight = "100%";
  document.getElementsByTagName("body")[0].style.backgroundMinWidth = "100%";
  //document.getElementById("one").addEventListener("click", myFunction);

  var myVar = setTimeout(test, 3500);
  //clearTimeout(myVar);

};//pututin




function test() {

  if (counter == 0) {
    document.getElementById("one").innerHTML = "Second";
    document.getElementById("one").style.visibility = "visible";
    document.getElementById("one").style.marginLeft = "40%";


  };
  if (counter == 1) {
    document.getElementById("one").innerHTML = "Final";
    document.getElementById("one").style.visibility = "visible";
    document.getElementById("one").style.marginLeft = "40%";


  }

  counter++;
  //console.log(counter);
};



