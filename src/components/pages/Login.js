import React, { useEffect, useState } from "react";
import axios from "axios";

const CLIENT_ID = "106224c70a2546a5b0f2a2d7d38e1f56";
const SPOTIFY_AUTH = "https://accounts.spotify.com/authorize";
const REDIRECT_LOGIN = "http://localhost:3000/";
const SCOPES = ["playlist-modify-private"];
const RESPONSE_TYPE = "token";

const Login = () => {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.localStorage.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTH}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_LOGIN}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}&show_dialog=true`;
  };

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setArtists(data.artists.items);
  };

  const renderArtist = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.iamges[0].url} alt="" />
        ) : (
          <div>no image </div>
        )}
        {artist.name}
      </div>
    ));
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
      <img src="/spotify_logo.png" alt="logo_spotify" className="h-32 w-32" />
      {!token ? (
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white rounded-lg p-3 mt-40"
        >
          Login
        </button>
      ) : (
        <button
          onClick={logout}
          className="bg-green-500 text-white rounded-lg p-3 mt-40"
        >
          logout
        </button>
      )}
      {token ? (
        <form onSubmit={searchArtists}>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
          <button type={"submit"}>submit</button>
        </form>
      ) : (
        <h2 className="text-white">pls login</h2>
      )}

      {renderArtist()}
    </div>
  );
};

export default Login;
