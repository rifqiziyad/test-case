import React from "react";
import NavBar from "../../../components/Navbar/Navbar";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.welcome}>
        <h1>Welcome.</h1>
        <h3>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
        <div className={styles.search}>
          <input
            type="search"
            placeholder="Search for a movie, tv show, person....."
          />
          <button>Search</button>
        </div>
      </div>
    </>
  );
}

export default Home;
