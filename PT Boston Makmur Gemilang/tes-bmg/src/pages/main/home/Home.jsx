import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../../components/Navbar/Navbar";
import styles from "./home.module.css";
import defaultImg from "../../../assets/default.jpg";

function Home() {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [btnPopular, setBtnPopular] = useState("Streaming");
  const [btnFreeToWatch, setBtnFreeToWatch] = useState("Today");
  const [watchPopularData, setWatchPopularData] = useState([]);

  const handleButtonPopular = (string) => {
    setBtnPopular(string);
  };

  const handleBtnFreeToWatch = (string) => {
    setBtnFreeToWatch(string);
  };

  useEffect(() => {
    getStreamingData();
  }, []);

  const getStreamingData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=bf9b9dcdb82a2dedd93d2fec0a98a443&language=en-US&page=1"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setWatchPopularData(res.results);
      })
      .catch((error) => console.log(error));
  };

  const getOnTvData = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=bf9b9dcdb82a2dedd93d2fec0a98a443&language=en-US&page=1"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setWatchPopularData(res.results);
      })
      .catch((error) => console.log(error));
  };

  const getForRentData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=bf9b9dcdb82a2dedd93d2fec0a98a443&language=en-US&page=1s"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setWatchPopularData(res.results);
      })
      .catch((error) => console.log(error));
  };

  const getInTheatersData = () => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=bf9b9dcdb82a2dedd93d2fec0a98a443&language=en-US&page=1"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setWatchPopularData(res.results);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  console.log(watchPopularData);
  console.log(btnPopular);

  return (
    <>
      <NavBar />
      <Container fluid className={styles.container}>
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
        <div className={styles.navPopular}>
          <h4>What's Popular</h4>
          <div>
            <button
              className={
                btnPopular === "Streaming" ? styles.btnPopular : styles.not
              }
              onClick={() => {
                handleButtonPopular("Streaming");
                getStreamingData();
              }}
            >
              Steaming
            </button>
            <button
              className={
                btnPopular === "On TV" ? styles.btnPopular : styles.not
              }
              onClick={() => {
                handleButtonPopular("On TV");
                getOnTvData();
              }}
            >
              On TV
            </button>
            <button
              className={
                btnPopular === "For Rent" ? styles.btnPopular : styles.not
              }
              onClick={() => {
                handleButtonPopular("For Rent");
                getForRentData();
              }}
            >
              For Rent
            </button>
            <button
              className={
                btnPopular === "In Theaters" ? styles.btnPopular : styles.not
              }
              onClick={() => {
                handleButtonPopular("In Theaters");
                getInTheatersData();
              }}
            >
              In Theaters
            </button>
          </div>
        </div>
        <div className={styles.cardMovie}>
          {btnPopular === "Streaming" || btnPopular === "For Rent"
            ? watchPopularData.map((item, index) => {
                return (
                  <div className={styles.card} key={index}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`}
                      alt=""
                    />
                    <h5>{item.original_title}</h5>
                    <h6>{item.release_date}</h6>
                  </div>
                );
              })
            : ""}
          {btnPopular === "On TV" || btnPopular === "In Theaters"
            ? watchPopularData.map((item, index) => {
                return (
                  <div className={styles.card} key={index}>
                    <img
                      src={
                        item.poster_path
                          ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`
                          : defaultImg
                      }
                      alt=""
                    />
                    <h5>{item.name}</h5>
                    <h6>{item.first_air_date}</h6>
                  </div>
                );
              })
            : ""}
        </div>
        <div className={styles.navPopular}>
          <h4>Treding</h4>
          <div>
            <button
              className={
                btnFreeToWatch === "Today" ? styles.btnPopular : styles.not
              }
              onClick={() => handleBtnFreeToWatch("Today")}
            >
              Today
            </button>
            <button
              className={
                btnFreeToWatch === "This Week" ? styles.btnPopular : styles.not
              }
              onClick={() => handleBtnFreeToWatch("This Week")}
            >
              This Week
            </button>
          </div>
        </div>
        <div className={styles.cardMovie}>
          {num.map((item) => {
            return (
              <div className={styles.card} key={item}>
                <img
                  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg"
                  alt=""
                />
                <h5>Superman & Lois</h5>
                <h6>Feb 23, 2021</h6>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default Home;
