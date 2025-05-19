const cartoons = [
  {
    name: "Regular Show",
    dateAired: "September 6, 2010",
    mainCharacters: ["Mordecai", "Rigby", "Benson", "Skips", "Pops", "Ghost"],
    premise:
      "Regular Show centers on two best friends, Mordecai, a blue jay, and Rigby, a raccoon, who are groundskeepers at a park. Their mundane jobs are constantly threatened by their boss, Benson, but they frequently get into bizarre and humorous adventures that often have a surreal, almost magical, quality. The show's premise revolves around their attempts to liven up their everyday lives, sometimes with disastrous consequences.",
    genre: "Action-Adventure",
    rating: "PG-13",
  },

  {
    name: "Adventure Time",
    dateAired: "April 5, 2010",
    mainCharacters: ["Finn", "Jake"],
    premise:
      "In a post-apocalyptic land called Ooo, a brave boy named Finn and his magical, shape-shifting dog Jake embark on surreal adventures. Along the way, they encounter quirky kingdoms, strange creatures, and uncover deep emotional and cosmic mysteries.",
    genre: "Fantasy, Adventure, Comedy",
    rating: "PG-13",
  },

  {
    name: "Teenage Mutant Ninja Turtles",
    //teenage mutant ninja turtles
    dateAired: "December 14, 1987",
    mainCharacters: [
      "Leonardo",
      "Raphael",
      "Donatello",
      "Michaelangelo",
      "Splinter",
      "April O'Neil",
    ],
    premise:
      "Teenage Mutant Ninja Turtles follows four mutated turtle brothers trained in ninjutsu by their sensei, Splinter. Living in the sewers of New York City, they protect the city from various threats—including the evil Shredder, mutant monsters, aliens, and street gangs—while balancing their love for pizza, brotherhood, and teenage life. Each series explores different tones—from goofy humor to action-packed or darker arcs—but all focus on themes of family, loyalty, and heroism",
    genre: "Action, Comedy, Superhero, Sci-fi, Martial Arts, Adventure",
    rating: "TV-Y7",
  },

  {
    //teen titans
    name: "Teen Titans",
    dateAired: "July 19, 2003",
    mainCharacters: ["Robin", "Starfire", "Raven", "Beast Boy", "Cyborg"],
    premise:
      "Teen Titans follows five teenage superheroes living together in Titans Tower as they battle villains, stop invasions, and navigate the challenges of friendship and growing up. While action-packed and stylized like anime, the series dives into deep emotional arcs, particularly focusing on Ravens demonic origins, Robins rivalry with Slade, and Terras betrayal. Each season spotlights a different characters personal journey, combining superhero action with humor, drama, and coming-of-age themes.",
    genre: "Superhero, Action, Comedy, Sci-Fi, Drama",
    rating: "TV-Y7",
  },

  {
    //ben 10
    name: "Ben 10",
    dateAired: "December 27, 2005",
    mainCharacters: ["Ben Tennyson", "Gwen Tennyson", "Grandpa Max"],
    premise:
      "Ben 10 follows the summer road trip of Ben Tennyson, who stumbles upon the Omnitrix—a mysterious alien watch that grants him the power to transform into various alien species, each with unique abilities. Alongside his cousin Gwen and Grandpa Max, Ben battles villains, alien threats, and learns the responsibility that comes with power. The show balances lighthearted adventure with action, sci-fi, and some surprisingly mature themes as the franchise evolves.",
    genre: "Action, Sci-Fi, Superhero, Comedy, Action",
    rating: "TV-Y7",
  },

  {
    //gravity falls
    name: "Gravity Falls",
    dateAired: "June 15,2012",
    mainCharacters: [
      "Dipper Pines",
      "Mabel Pines",
      "Stanley Pines",
      "Soos Ramirez",
      "Wendy Corduroy",
    ],
    premise:
      "Gravity Falls follows twins Dipper and Mabel Pines as they spend the summer with their great-uncle Stan in the strange town of Gravity Falls, Oregon. When Dipper discovers a mysterious journal in the woods, they begin uncovering supernatural secrets, strange creatures, conspiracies, and cryptic puzzles hidden throughout the town. As the mystery deepens, the siblings face increasingly bizarre and dangerous challenges, all leading to a thrilling confrontation with the villainous Bill Cipher.",
    genre: "Mystery, Comedy, Supernatural, Adventure",
    rating: "TV-Y7",
  },

  {
    //kim possible
    name: "Kim Possible",
    dateAired: "June 7, 2002",
    mainCharacters: [
      "Kim Possible",
      "Ron Stoppable",
      "Rufus",
      "Wade Load",
      "Shego",
    ],
    premise:
      "Kim Possible follows the life of Kim, an ordinary high school student who moonlights as a globe-trotting action hero. Whether she is thwarting villains like Dr. Drakken or acing a cheerleading tryout, Kim juggles saving the world with navigating friendships, crushes, homework, and typical teenage drama. The show blends action, comedy, and coming-of-age themes with a unique spy-fi twist, becoming one of Disney Channels most iconic animated series.",
    genre: "Action, Comedy, Adventure",
    rating: "TV-G",
  },

  {
    //The boondocks
    name: "Boondocks",
    dateAired: "November 6, 2005",
    mainCharacters: [
      "Huey Freeman",
      "Riley Freeman",
      "Robert Freeman",
      "Uncle Ruckus",
    ],
    premise:
      "The Boondocks is a satirical animated series that follows Huey and Riley Freeman, two brothers from inner-city Chicago who move with their grandfather to the predominantly white suburb of Woodcrest. The show uses sharp, often controversial humor to explore themes like race, class, media influence, politics, and Black identity in America. With Hueys radical intellect and Rileys street-inspired antics, the show balances intense social critique with exaggerated comedy and action.",
    genre: "Comedy, Action, Political, Black Culture, Adult Animation",
    rating: "TV-MA",
  },

  {
    //south park
    name: "South Park",
    dateAired: "August 13, 1997",
    mainCharacters: [
      "Stan Marsh",
      "Kyle Broflovski",
      "Eric Cartman",
      "Kenny McCormick",
      "Butter",
    ],
    premise:
      "South Park follows four foul-mouthed grade schoolers—Stan, Kyle, Cartman, and Kenny—as they navigate life in the small, fictional town of South Park, Colorado. The show is known for its crude animation and sharp, satirical takes on current events, pop culture, politics, religion, and just about every controversial topic imaginable. With its absurd humor and fearless storytelling, it often pushes boundaries to provoke thought, laughter, and sometimes outrage.",
    genre: "Satire, Surreal, Political, Adult Animation",
    rating: "TV-MA",
  },

  {
    //courage the cowardly dog
    name: "Courage the Cowardly Dog",
    dateAired: "November 12, 1999",
    mainCharacters: ["Courage", "Muriel", "Eustace"],
    premise:
      "Courage the Cowardly Dog revolves around a lovable yet fearful dog named Courage who lives with his elderly owners, Muriel and Eustace, on a farm in the middle of nowhere. Though Courage is often terrified by the bizarre and eerie situations that arise, he is constantly forced to step up and protect his owners from the many strange creatures and supernatural threats that invade their lives. The show blends horror, dark comedy, and surreal elements, with Courage always rising to the challenge, even though he's scared out of his mind.",
    genre: "Animated Horror, Dark Comedy, Surreal, Adventure, Mystery",
    rating: "TV-Y7",
  },

  {
    //family guy
    name: "Family Guy",
    dateAired: "Janurary 31, 1999",
    mainCharacters: [
      "Peter Griffin",
      "Lois Griffin",
      "Meg Griffin",
      "Chris Griffin",
      "Stewie Griffin",
      "Brian Griffin",
    ],
    premise:
      "Family Guy is an animated sitcom that follows the Griffin family in the fictional town of Quahog, Rhode Island. The show centers on Peter Griffin, a well-meaning but extremely flawed father, and his quirky family members, each with their own set of oddities. The series is known for its random cutaway gags, irreverent humor, and cultural references, which often push boundaries. While it explores everyday family dynamics, it also satirizes various aspects of American society, politics, and pop culture.",
    genre: "Dark Comedy, Family, Satire, Political",
    rating: "TV-MA",
  },

  {
    //powerpuff girls
    name: "Powerpuff Girls",
    dateAired: "November 18, 1998",
    mainCharacters: ["Blossom", "Bubbles", "Buttercup", "Professor Utonium"],
    premise:
      "The Powerpuff Girls follows three super-powered sisters, Blossom, Bubbles, and Buttercup, who were created by Professor Utonium in Townsville. The girls use their extraordinary abilities to fight crime and protect the city from a variety of villains, most notably Mojo Jojo. Each sister has distinct characteristics that make them strong as individuals and a great team when fighting evil. The show balances humor, action, and heartwarming moments as the girls deal with both superhero duties and typical childhood situations.",
    genre: "Action, Science fiction, Adventure, Family, Comedy",
    rating: "TV-Y7",
  },
];

 function showCartoon(show) {
  document.getElementById("box").innerHTML = `
    <h1>${show.name}</h1>
    <p>${show.dateAired}</p>
    <p>${show.genre}</p>
    <p>${show.rating}</p>
    <p>${show.mainCharacters}</p>
    <p>${show.premise}</p>


    `;
} 

showCartoon(cartoons[0])

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

function addEvents(){
  document.querySelectorAll(".learn-more-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => showCartoon(cartoons[index]))
  })
}

// search shows
function initializeSearch() {
  console.log("Initializing search functionality");
  renderShows(cartoons);
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) {
    console.error("Search input element not found");
    return;
  }

  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.trim().toLowerCase();
    console.log("Input event detected, search term:", searchTerm);

    if (searchTerm !== "") {
      searchShows(searchTerm);
    } else {
      renderShows(cartoons);
    }
  });

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
      const searchTerm = searchInput.value.trim().toLowerCase();
      console.log("Enter key pressed for search term:", searchTerm);

      if (searchTerm !== "") {
        searchShows(searchTerm);
       saveSearchTerm(searchTerm);

       // clear the search box after pressing enter
       searchInput.value = "";
      }
      
      
    }
  });
} // end of initializeSearch


function searchShows(searchTerm) {
  console.log("searchShows called with term:", searchTerm);

  if (typeof cartoons === "undefined" || !Array.isArray(cartoons)) {
    console.error("cartoons is not definied or not an array");
    return;
  }

  if (searchTerm === "") {
    console.log("Empty search term, showing all shows");
    renderShows(cartoons);
    return;
  }

  let filtered = cartoons.filter((s) => {
    return s.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  renderShows(filtered)
  showCartoon(filtered)
}

function saveSearchTerm(searchTerm){
  let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  // limit history to last 10 searches
  if (searchHistory >=10){
    searchHistory.shift() // remove oldest search
  }
  if(!searchHistory.includes(searchTerm))
     searchHistory.push(searchTerm);
     localStorage.setItem('searchHistory', JSON.stringify(searchHistory))

}

/* function saveSearchTerm() {} */
initializeSearch();


