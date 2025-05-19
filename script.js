

let regular = {
  dateAired: "September 6, 2010",
  mainCharacters: ["Mordecai", "Rigby", "Benson", "Skips", "Pops", "Ghost"],
  premise: "Regular Show centers on two best friends, Mordecai, a blue jay, and Rigby, a raccoon, who are groundskeepers at a park. Their mundane jobs are constantly threatened by their boss, Benson, but they frequently get into bizarre and humorous adventures that often have a surreal, almost magical, quality. The show's premise revolves around their attempts to liven up their everyday lives, sometimes with disastrous consequences.",
  genre: "Action-Adventure",
  rating: "PG-13"
}

let advtm = {
dateAired: "April 5, 2010",
  mainCharacters: ["Finn","Jake",],
  premise:"In a post-apocalyptic land called Ooo, a brave boy named Finn and his magical, shape-shifting dog Jake embark on surreal adventures. Along the way, they encounter quirky kingdoms, strange creatures, and uncover deep emotional and cosmic mysteries.",
  genre: "Fantasy, Adventure, Comedy",
  rating: "PG-13"
}

let op = {
dateAired: "October 20, 1999",
mainCharacters: ["Monkey D. Luffy","Roronoa Zoro","Nami","Usopp","Sanji","Tony Tony Chopper","Nico Robin","Franky","Brook",],
  premise:"In a vast world of oceans, islands, and powerful pirates, Monkey D. Luffy sets sail with his crew, the Straw Hat Pirates, in search of the legendary treasure known as the One Piece in order to become the next Pirate King. Along the way, they confront powerful enemies, uncover world-shaking secrets, and forge unbreakable bonds",
  Genre:"Action, Adventure, Fantasy, Comedy, Drama, Shonen" ,
  Rating: "TV-14"
}
let bleach = {
    dateAired: "October 5, 2004",
    mainCharacters: ["Ichigo Kurosaki","Sosuke Aizen","Rukia Kuchiki","Orihime Inoue","Uryu Ishida",],
      premise:"Ichigo Kurosaki, a high school student who can see ghosts, accidentally obtains the powers of a Soul Reaper — a guardian who protects the living world from evil spirits and guides souls to the afterlife. As he takes on this new role, Ichigo becomes entangled in ancient spiritual conflicts, battles powerful enemies, and uncovers dark secrets about the Soul Society and his own origins.",
      genre: "Action, Supernatural, Fantasy, Drama, Shonen",
      rating: "TV-14"
    }

    let dex = {
        dateAired: "October 1st, 2006",
        mainCharacters: [ "Dexter Morgan","Debra Morgan","Harry Morgan"],
          premise:"Dexter Morgan lives a double life: by day, he helps solve murders as a forensic expert; by night, he tracks down and kills criminals who have escaped justice. Guided by a strict moral code instilled by his adoptive father, Dexter struggles with his dark urges while trying to maintain the facade of a normal life.",
          genre: "Crime,Drama,Psycological, Thriller,Mystery",
          rating: "TV-MA"
        }

        let dvl = {
            dateAired: "April 10, 2015",
            mainCharacters: ["Matt Murdock / Daredevil", "Foggy Nelson","Karen Page"],
              premise:"Blinded in a childhood accident, Matt Murdock gains extraordinary senses and becomes Daredevil, a masked vigilante defending Hells Kitchen, New York. By day, he works as a lawyer seeking justice within the legal system; by night, he battles corruption and crime in brutal hand-to-hand combat, facing off against enemies like Kingpin and The Hand.",
              genre: "Action, Crime, Drama, Superhero, Thriller",
              rating: "TV-MA"
            }
          
const regBtn = document.getElementById("regBtn");

regBtn.addEventListener("click", function () {
    window.location = "./cartoon.html"

});


// rewrite arrays -> objects

const advBtn = document.getElementById("advBtn");

advBtn.addEventListener("click", function () {
    window.location = "./cartoon.html"

});

const opBtn = document.getElementById("opBtn");

opBtn.addEventListener("click", function () {
    window.location = "./anime.html"

});

const bleachBtn = document.getElementById("bleachBtn");

bleachBtn.addEventListener("click", function () {
    window.location = "./anime.html"

});

const dexBtn = document.getElementById("dexBtn");

dexBtn.addEventListener("click", function () {
    window.location = "./tv.html"

});

const cmBtn = document.getElementById("cmBtn");

cmBtn.addEventListener("click", function () {
    window.location = "./tv.html"

});