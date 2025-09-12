import React, { useState } from "react";

function MusicPlayer() {
  const [songs, setSongs] = useState([
    { id: 1, title: "Song One", author: "Author A", isPlaying: false },
    { id: 2, title: "Song Two", author: "Author B", isPlaying: false },
    { id: 3, title: "Song Three", author: "Author C", isPlaying: false },
    { id: 4, title: "Song Four", author: "Author D", isPlaying: false },
  ]);

  const [currentSong, setCurrentSong] = useState(null);

  const togglePlay = (id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id
          ? { ...song, isPlaying: !song.isPlaying }
          : { ...song, isPlaying: false }
      )
    );

    setCurrentSong((prev) =>
      prev && prev.id === id && prev.isPlaying
        ? null
        : songs.find((s) => s.id === id)
    );
  };

  return (
    <div>
      <h2>🎶 Music Player</h2>
      <div>
        {songs.map((song) => (
          <div
            key={song.id}
            style={{
              padding: "10px",
              margin: "5px 0",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundColor: song.isPlaying ? "lightgreen" : "#f0f0f0",
            }}
            onClick={() => togglePlay(song.id)}
          >
            <strong>{song.title}</strong> — {song.author}{" "}
            <button style={{ marginLeft: "10px" }}>
              {song.isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px", padding: "10px", borderTop: "1px solid gray" }}>
        <p>
          <strong>Зараз грає:</strong>{" "}
          {currentSong ? currentSong.title : "нічого"}
        </p>
        <p>📀 Кількість пісень: {songs.length}</p>
      </div>
    </div>
  );
}

export default MusicPlayer;