// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    {title: "Hotel Carlifonia", artist: "Eagles", genre: "Rock"},
    {title: "Superstition", artist: "Stevie Wonder", genre: "Soul"},
    { title: "Dancing Queen", artist: "ABBA", genre: "Pop" },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" }
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "Soul",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    const playlistsDiv = document.getElementById("playlists")
    playlistsDiv.innerHTML = '' //Clear some existing content

    Object.keys(guardians).map(guardian => {
        const genrePreference = guardians[guardian]
        const guardianPlaylist = songs.filter(song => song.genre === genrePreference)
     //Generate playlist div
     const playlistDiv = document.createElement('div')
     playlistDiv.classList.add('playlist')

     //Add guardian's name as the playlist title
     const playlistTitle = document.createElement('h3')
     playlistTitle.innerHTML = `${guardian}'s playlist`
     playlistDiv.appendChild(playlistTitle)
    if (guardianPlaylist.length > 0){
         //Add songs to the playlist
        guardianPlaylist.forEach(song => {
        const songElement = document.createElement('p')
        songElement.innerHTML = `<a href="#">${song.title}</a> By ${song.artist}`
        playlistDiv.appendChild(songElement)});
    }
    else{
        // Show a message if no songs are available
        const noSongsMessage = document.createElement("p");
        noSongsMessage.innerText = "No songs available for this genre.";
        playlistDiv.appendChild(noSongsMessage);
    }
     playlistsDiv.appendChild(playlistDiv)
    })
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


