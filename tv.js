const tv = [
  {
    name: "Dexter",
    dateAired: "October 1st, 2006",
    mainCharacters: ["Dexter Morgan", "Debra Morgan", "Harry Morgan"],
    premise:
      "Dexter Morgan lives a double life: by day, he helps solve murders as a forensic expert; by night, he tracks down and kills criminals who have escaped justice. Guided by a strict moral code instilled by his adoptive father, Dexter struggles with his dark urges while trying to maintain the facade of a normal life.",
    genre: "Crime,Drama,Psycological, Thriller,Mystery",
    rating: "TV-MA",
  },

  {
    name: "Daredevil",
    dateAired: "April 10, 2015",
    mainCharacters: ["Matt Murdock / Daredevil", "Foggy Nelson", "Karen Page"],
    premise:
      "Blinded in a childhood accident, Matt Murdock gains extraordinary senses and becomes Daredevil, a masked vigilante defending Hells Kitchen, New York. By day, he works as a lawyer seeking justice within the legal system; by night, he battles corruption and crime in brutal hand-to-hand combat, facing off against enemies like Kingpin and The Hand.",
    genre: "Action, Crime, Drama, Superhero, Thriller",
    rating: "TV-MA",
  },

  {
    //game of thrones
    name: "Game of Thrones",
    dateAired: "April 17, 2011",
    mainCharacters: [
      "Jon Snow",
      "Daenerys Targaryen",
      "Tyrion Lannister",
      "Arya Stark",
      "Cersei Lannister",
      "Jaime Lannister",
      "Sansa Stark",
    ],
    premise:
      "Set in the fictional continents of Westeros and Essos, the series revolves around noble families vying for control of the Iron Throne, while an ancient threat from beyond the Wall also looms. It explores themes of power, betrayal, politics, and survival.",
    genre: "Fantasy, Drama, Adventure",
    rating: "TV-MA",
  },

  {
    //breaking bad
    name: "Breaking Bad",
    dateAired: "January 20, 2008",
    mainCharacters: [
      "Walter White",
      "Jesse Pinkman",
      "Hank Schrader",
      "Skyler White",
      "Saul Goodman",
      "Gus Fring",
    ],
    premise:
      "The series follows Walter White, a high school chemistry teacher turned methamphetamine manufacturer, who partners with his former student, Jesse Pinkman. As Walter becomes more involved in the criminal underworld, his life spirals out of control, affecting his family, friends, and anyone who gets close to him.",
    genre: "Crime, Drama, Thriller",
    rating: "TV-MA",
  },

  {
    //Chernobyl
    name: "Chernobyl",
    dateAired: "May 6, 2019",
    mainCharacters: [
      "Valery Legasov",
      "Ulana Khomyuk",
      "Boris Shcerbina",
      "Anatoly Dyatlov",
      "Viktor Bryukhanov",
    ],
    premise:
      "a historical drama miniseries that dramatizes the events surrounding the 1986 nuclear disaster at the Chernobyl Nuclear Power Plant in the Soviet Union. The series focuses on the efforts of scientists, government officials, and workers as they struggle to understand and contain the catastrophic consequences of the explosion while dealing with the political climate and misinformation surrounding the disaster",
    genre: "Drama, History, Thriller",
    rating: "TV-MA",
  },

  {
    //last of us
    name: "Last of Us",
    dateAired: "Janurary 15,2023",
    mainCharacters: [
      "Joel Miller",
      "Ellie Williams",
      "Tess",
      "Tommy Miller",
      "Marlene",
      "Bill",
      "Henry",
      "Sam",
    ],
    premise:
      "Based on the popular video game, The Last of Us follows Joel, a hardened survivor in a post-apocalyptic world ravaged by a fungal infection that turns humans into monstrous creatures. Joel is tasked with escorting Ellie, a young girl who may hold the key to curing the infection, across a dangerous and ruined America. The series explores themes of survival, love, loss, and the bonds formed in extreme circumstances",
    genre: "Drama, Horror, Thriller, Post-apocalyptic",
    rating: "TV-MA",
  },

  {
    //stranger things
    name: "Stranger Things",
    dateAired: "July 15, 2016",
    mainCharacters: [
      "Eleven",
      "Mike Wheeler",
      "Dustin Henderson",
      "Lucas Sinclair",
      "Will Byers",
      "Jim Hopper",
      "Steve Harrington",
      "Max Mayfield",
    ],
    premise:
      "Set in the 1980s, Stranger Things follows a group of kids in the small town of Hawkins, Indiana, as they encounter mysterious supernatural events. When one of their friends, Will Byers, goes missing, they uncover a government experiment gone wrong and a parallel dimension called the Upside Down. The group faces terrifying creatures and conspiracies while trying to rescue their friends and stop the dangers from spreading.",
    genre: "Sci-Fi, Horror, Mystery, Drama, Thriller",
    rating: "TV-MA",
  },

  {
    //The haunting of hill house
    name: "The Haunting of Hill House",
    dateAired: "October 12,2018",
    mainCharacters: [
      "Shirley Vance",
      "Theo Vance",
      "Steven Vance",
      "Nell Vance",
      "Luke Vance",
      "Hugh Crain",
      "Olivia Crain",
    ],
    premise:
      "The Haunting of Hill House is a chilling, psychological horror series that alternates between two timelines: one in the past, when a family lived in the haunted Hill House, and one in the present, as the now-adult children confront the trauma of their experiences. As they return to the house to deal with unresolved issues, the ghosts of their past continue to haunt them in unsettling ways.",
    genre: "Horror, Drama, Mystery",
    rating: "TV-MA",
  },

  {
    //Greys anatomy
    name: "Greys Anatomy",
    dateAired: "March 27, 2005",
    mainCharacters: [
      "Meredith Grey",
      "Derek Shepherd",
      "Miranda Bailey",
      "Alex Karev",
      "Cristina Yang",
      "Izzie Stevens",
      "George O'Malley",
      "Richard Webber",
      "April Kepner",
      "Jackson Avery",
    ],
    premise:
      "Grey's Anatomy is a long-running medical drama that follows the lives of surgical interns, residents, and attending physicians at the fictional Grey Sloan Memorial Hospital in Seattle. The series focuses on their professional challenges and personal relationships, blending complex medical cases with emotional storylines about love, loss, and personal growth.",
    genre: "Medical Drama, Romance",
    rating: "TV-16",
  },

  {
    //Alchemy of souls
    name: "Alchemy of Souls",
    dateAired: "June 18, 2022",
    mainCharacters: [
      "Jang Uk",
      "Mu Deok",
      "Naksu",
      "Park Jin",
      "Heo Yeom",
      "Sep Yul",
      "Jin Mu",
    ],
    premise:
      "Alchemy of Souls is a South Korean fantasy drama set in the fictional Daeho, where magic exists and powerful sorcerers control the lives of others. The story centers around Jang Uk, the son of a prestigious family who becomes entangled with Mu Deok, a skilled assassin whose soul has been trapped in the body of a powerless servant. Together, they navigate the world of magic, uncovering secrets about the soul-swapping magic and the consequences it brings",
    genre: "Fantasy, Romance, Action, Drama",
    rating: "TV-MA",
  },
];

function showTV(show){
  document.getElementById('box').innerHTML=`
  <h1>${show.name}</h1>
  
  <p>${show.dateAired}</p>
  <p>${show.mainCharacters}</p>
  <p>${show.premise}</p>
  <p>${show.genre}</p>
  <p>${show.rating}</p>

  `
}
showTV(tv[0])

// function showCm(){
//   let cm = tv[1]
//   document.getElementById('box').innerHTML=`
//   <h1>Name</h1>
//   <p>${cm.name}</p>
//   <p>${cm.dateAired}</p>
//   <p>${cm.mainCharacters}</p>
//   <p>${cm.premise}</p>
//   <p>${cm.genre}</p>
//   <p>${cm.rating}</p>

//   `
// }
// showCm()

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
                <a href = "#box">
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
    btn.addEventListener("click", () => showTV(tv[index]));
  });
}

// search shows
function initializeSearch() {
  console.log("Initializing search functionality");
  renderShows(tv);
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
      renderShows(tv);
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

  if (typeof tv === "undefined" || !Array.isArray(tv)) {
    console.error("showData is not definied or not an array in searchShows");
    return;
  }

  if (searchTerm === "") {
    console.log("Empty search term, showing all shows");
    renderShows(tv);
    return;
  }

  let filtered = tv.filter((s) => {
    return s.name.toLowerCase().includes(searchTerm)
  })

  renderShows(filtered)

}

function saveSearchTerm() {}
