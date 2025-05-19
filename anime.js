const animes = [
  {
    name: "One Piece",
    dateAired: "October 20, 1999",
    mainCharacters: [
      "Monkey D. Luffy",
      "Roronoa Zoro",
      "Nami",
      "Usopp",
      "Sanji",
      "Tony Tony Chopper",
      "Nico Robin",
      "Franky",
      "Brook",
    ],
    premise:
      "In a vast world of oceans, islands, and powerful pirates, Monkey D. Luffy sets sail with his crew, the Straw Hat Pirates, in search of the legendary treasure known as the One Piece in order to become the next Pirate King. Along the way, they confront powerful enemies, uncover world-shaking secrets, and forge unbreakable bonds",
    genre: "Action, Adventure, Fantasy, Comedy, Drama, Shonen",
    rating: "TV-14",
  },
  {
    name: "Bleach",
    dateAired: "October 5, 2004",
    mainCharacters: [
      "Ichigo Kurosaki",
      "Sosuke Aizen",
      "Rukia Kuchiki",
      "Orihime Inoue",
      "Uryu Ishida",
    ],
    premise:
      "Ichigo Kurosaki, a high school student who can see ghosts, accidentally obtains the powers of a Soul Reaper — a guardian who protects the living world from evil spirits and guides souls to the afterlife. As he takes on this new role, Ichigo becomes entangled in ancient spiritual conflicts, battles powerful enemies, and uncovers dark secrets about the Soul Society and his own origins.",
    genre: "Action, Supernatural, Fantasy, Drama, Shonen",
    rating: "TV-14",
  },
  {
    name: "Spy x Family",
    //spy x family
    dateAired: "April 9, 2022",
    mainCharacters: [
      "Loid Forger",
      "Yor Forger",
      "Anya Forger",
      "Bond Forger",
      "Franky Franklin",
      "Damian Desmond",
    ],
    premise:
      "Spy x Family follows Loid Forger, a spy with the codename “Twilight,” tasked with preventing war between two nations. To do so, he must infiltrate an elite school by creating a fake family. He adopts a telepathic girl, Anya, and marries an assassin, Yor, all while keeping their true identities hidden from each other. The result is a chaotic yet heartwarming blend of espionage, comedy, and family life.",
    genre: "Action, Comedy ,Slice of Life ,Spy / Espionage",
    rating: "TV-14",
  },
  {
    name: "Death Note",
    //death note
    dateAired: "October 3, 2006",
    mainCharacters: [
      "Light Yagami",
      "L Lawliet",
      "Ryuk",
      "Misa Amane",
      "Near",
      "Mello",
    ],
    premise:
      "Death Note follows Light Yagami, a high-achieving student who finds a mysterious notebook called the “Death Note.” Any name written in it dies, as long as the writer imagines the victims face. Light adopts the alias “Kira” and begins killing criminals to reshape the world. His actions attract the attention of a genius detective known as “L,” sparking a tense psychological battle between two masterminds, each trying to outwit the other.",
    genre: "Psychological Thriller, Supernatural, Mystery, Crime, Drama",
    rating: "TV-14",
  },

  {
    name: "Code Geass",
    //code geass
    dateAired: "October 5, 2006",
    mainCharacters: [
      "Lelouch",
      "Suzaku",
      "C.C.",
      "Kallen",
      "Nunnally",
      "Charles",
    ],
    premise:
      "Set in an alternate future where the Holy Britannian Empire has conquered Japan (renaming it Area 11), Code Geass follows Lelouch, a brilliant but disillusioned exiled prince. He acquires a mysterious power called Geass, which allows him to command anyone to obey a single order. Using the alias Zero, he forms a resistance to destroy Britannia and create a peaceful world for his sister—while clashing with old allies, moral ambiguity, and the cost of power.",
    genre: "Mecha, Psychological Thriller, Military, Action, Drama, Sci-Fi",
    rating: "TV-14",
  },

  {
    name: "Attack on Titan",
    //attack on titan
    dateAired: "April 7, 2013",
    mainCharacters: [
     "Eren Yeager",
      "Mikasa Ackerman",
      "Armin Arlert",
      "Levi Ackerman",
      "Zeke Yeager",
    ],
    premise:
      "Attack on Titan is set in a world where humanity lives inside massive walled cities to protect themselves from man-eating giants known as Titans. When a colossal Titan breaches the wall, Eren Yeager, whose mother is killed in the chaos, joins the military to fight back. As the story unfolds, the origin of the Titans, the secrets behind the walls, and the truth of the world are slowly revealed, shifting the series from a survival horror into a deep, complex political and philosophical saga about freedom, revenge, and the cycle of violence.",
    genre: "Action, Dark Fantasy, Post-Apocalyptic, Military, Horror ",
    rating: "TV-MA",
  },

  {
    name: "Solo Leveling",
    // solo leveling
    dateAired: "January 6, 2024",
    mainCharacters: ["Sung Jin-Woo", "Chae Hae-in", "Go Gun-Hee"],
    premise:
      "Solo Leveling is set in a world where gates to dungeons filled with monsters suddenly appear, and certain people gain powers to fight them—these people are called “hunters.” Sung Jin-Woo starts as the weakest of all hunters, risking his life in low-level raids. After a brutal dungeon nearly kills him, he awakens with a unique power: the ability to level up and grow stronger, unlike any other hunter. With his new system-like abilities, he rises from obscurity to become humanitys greatest weapon—while uncovering dark secrets about the origin of the gates and his own destiny.",
    genre: "Action, Fantasy, Supernatural, Adventure, RPG, Dark Fantasy",
    rating: "TV-14",
  },

  {
    name: "Jujutsu Kaisen",
    //jujutsu kaisen
    dateAired: "October 3, 2020",
    mainCharacters: [
      "Yuji Itadori",
      "Megumi Fushiguro",
      "Nobara Kugisaki",
      "Satoru Gojo",
      "Ryomen Sukuna",
    ],
    premise:
      "Jujutsu Kaisen follows Yuji Itadori, a high school student with extraordinary physical abilities who lives a normal life—until he consumes a cursed object: a finger of Sukuna, the King of Curses. Yuji becomes the host of Sukuna and is dragged into the world of jujutsu sorcerers, who battle deadly supernatural curses that arise from negative human emotions. Enrolled at Tokyo Jujutsu High, Yuji learns to control his curse powers while facing increasingly dangerous threats—and the question of how long he can survive housing the most dangerous curse of all.",
    genre: "Action, Supernatural, Dark Fantasy, Horror, Shounen",
    rating: "TV-MA",
  },

  {
    name: "Made in Abyss",
    //made in abyss
    dateAired: "July 7, 2017",
    mainCharacters: ["Riko", "Reg", "Nanachi"],
    premise:
      " Made in Abyss is set in a world where a colossal, mysterious pit called the Abyss is the last unexplored place on Earth. Strange creatures and powerful relics dwell within it, but the deeper one descends, the more dangerous the environment becomes—and ascending triggers progressively worse curse effects. Riko, the daughter of a legendary explorer, ventures into the Abyss searching for her mother, joined by Reg, a robot boy with no memories. Together, they face the Abyss horrifying truths, uncovering its secrets at great emotional and physical cost.",
    genre: "Dark Fantasy, Adventure, Sci-Fi, Psychological, Mystery, Drama",
    rating: "TV-MA",
  },

  {
    name: "Jojo Bizarre Adventure",
    //jojos bizarre adventure
    dateAired: "October 5, 2012",
    mainCharacters: [
      "Jonathan Joestar - [part 1",
      "Joeseph Joestar - part 2",
      "Jotaro Kujo - part 3",
      "Josuke Higashikata - part 4",
      "Giorno Giovanna - part 5",
      "Jolyne Cujoh - part 6",
      "Johnny Joestar - part 7",
    ],
    premise:
      "JoJo's Bizarre Adventure follows the Joestar family across multiple generations as they battle supernatural forces, curses, and enemies with extraordinary powers. The story starts with Jonathan Joestar, who faces the evil Dio Brando, and continues through various parts as different members of the Joestar family inherit unique abilities known as Stands. Each part introduces a new protagonist and setting, from the 19th century to modern-day Japan and even a bizarre race through the American West. The series blends action, supernatural battles, and extravagant characters with unique visual styles and eccentric storylines.",
    genre:
      "Action, Supernatural, Adventure, Drama, Shounen, Horror, Fantasy, Psychological",
    rating: "TV-14",
  },

  {
    name: "Angel Beats",
    //angel beats
    dateAired: "April 3, 2010",
    mainCharacters: [
      "Otonashi",
      "Kanade",
      "Yuri",
      "Hideki",
      "Naoi",
      "Takeyama",
    ],
    premise:
      "Angel Beats! is set in a mysterious high school in the afterlife, where teenagers who experienced trauma or unfulfilled lives must come to terms with their past before moving on. The protagonist, Otonashi, awakens with amnesia and is drawn into a rebellion led by Yuri against the enigmatic Tenshi,who they believe works for God. As Otonashi uncovers his memories and learns more about the world, he begins to question the purpose of their resistance, seeking peace and resolution for himself and other",
    genre:
      "Supernatural, Action, Drama, Comedy, Psychological, Romance, Tragedy",
    rating: "TV-14",
  },

  {
    name: "One Punch Man",
    // one punch man
    dateAired: "October 5, 2015",
    mainCharacters: ["Saitama", "Genos", "King", "Tatsumaki", ""],
    premise:
      "One Punch Man follows Saitama, an unremarkable man who trained so hard he became the strongest hero alive—able to destroy any opponent with one punch. However, his overwhelming power leaves him bored and unfulfilled, as no fight presents a challenge. While he joins the Hero Association to gain recognition, his exploits are often overlooked. The series explores his journey in a world full of flamboyant heroes, deadly monsters, and existential questions, blending epic action with sharp satire of superhero and shonen tropes.",
    genre: "Action, Comedy, Superhero, Sci-Fi, Seinen",
    rating: "TV-14",
  },
];

function showAnime(show) {
  document.getElementById("box").innerHTML = `
    <h1>${show.name}</h1>
  
    <p>${show.dateAired}</p>
    <p>${show.mainCharacters}</p>
    <p>${show.premise}</p>
    <p>${show.genre}</p>
    <p>${show.rating}</p>

    `;
}
showAnime(animes[0]);


function renderShows(shows) {
  console.log("renderShows called with", shows.length, "shows");

  const resultsContainer = document.getElementById("resultsContainer");

  if (!resultsContainer) {
    console.error("Results container not found");
    return;
  }

  resultsContainer.innerHTML = "";

  if (shows.length === 0) {
    console.log("No shows found, showing empty message");
    resultsContainer.innerHTML = '<p id = "noResults"> No shows found </p>';
    return;
  }

  const showElements = [];

  shows.forEach((show) => {
    if (!show || typeof show.name !== "string") {
      console.warn("Invalid show object:", show);
      return;
    }

    const showDiv = document.createElement("div");
    showDiv.className = "show-card";
    showDiv.innerHTML = `
        <div class="show-header">
        
                <h3>${show.name}</h3>
                </div>
                <p> <strong> Rating: </strong> ${show.rating || "Unknown"}</p>
                <p> <strong> Genre: </strong> ${show.genre || "Unknown"}</p>
                <a href="#box">
                <button class="learn-more-btn">Learn More</button>
                </a>

    `;
    showElements.push(showDiv);
  });

  showElements.forEach((elements) => {
    resultsContainer.appendChild(elements);
  });
  addEvents()
  console.log(`Successfully rendered ${shows.length} shows `);
} // end of renderShows
function addEvents() {
  document.querySelectorAll(".learn-more-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => showAnime(animes[index]));
  });
}

// search shows
function initializeSearch() {
  console.log("Initializing search functionality");
  renderShows(animes);
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) {
    console.error("Search input element not found");
    return;
  }

  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.trim().toLowerCase();
    console.log("Input event detected, search term:", searchTerm);

    if (searchTerm !== "") {
      searchShows(searchTerm);
    } else {
      renderShows(animes);
    }
  });

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const searchTerm = searchInput.value.trim().toLowerCase();
      console.log("Enter key pressed for search term:", searchTerm);

      if (searchTerm !== "") {
        searchShows(searchTerm);
        saveSearchTerm(searchTerm);

        searchInput.value = "";
      }
    }
  });
} // end of initializeSearch
initializeSearch();

function searchShows(searchTerm) {
  console.log("searchShows called with term:", searchTerm);

  if (typeof animes === "undefined" || !Array.isArray(animes)) {
    console.error("showData is not definied or not an array in searchShows");
    return;
  }

  if (searchTerm === "") {
    console.log("Empty search term, showing all shows");
    renderShows(animes);
    return;
  }

  let filtered = animes.filter((s) => {
    return s.name.toLowerCase().includes(searchTerm)
  })

  renderShows(filtered)
}

function saveSearchTerm() {}
