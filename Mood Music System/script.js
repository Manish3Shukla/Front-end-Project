function showPlaylist(mood) {
    const playlists = {
        happy: ["Happy Song 1", "Happy Song 2", "Happy Song 3"],
        calm: ["Calm Song 1", "Calm Song 2", "Calm Song 3"],
        focused: ["Focused Song 1", "Focused Song 2", "Focused Song 3"],
        energetic: ["Energetic Song 1", "Energetic Song 2", "Energetic Song 3"]
    };

    const playlistDiv = document.getElementById('playlist');
    playlistDiv.innerHTML = `<h2>${mood.charAt(0).toUpperCase() + mood.slice(1)} Playlist</h2><ul>${playlists[mood].map(song => `<li>${song}</li>`).join('')}</ul>`;
}