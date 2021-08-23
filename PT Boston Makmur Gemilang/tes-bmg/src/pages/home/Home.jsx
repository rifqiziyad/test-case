import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../components/Navbar/Navbar";
import styles from "./home.module.css";
import defaultImg from "../../assets/default.jpg";

function Home(props) {
  const [btnPopular, setBtnPopular] = useState("Streaming");
  const [btnTrending, setBtnTrending] = useState("day");
  const [watchPopularData, setWatchPopularData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    getStreamingData();
    getTrendingData("day");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonPopular = (string) => {
    setBtnPopular(string);
  };

  const handleBtnTrending = (string) => {
    setBtnTrending(string);
  };

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
      "https://api.themoviedb.org/3/movie/upcoming?api_key=bf9b9dcdb82a2dedd93d2fec0a98a443&language=en-US&page=1"
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
      })
      .catch((error) => console.log(error));
  };

  const getTrendingData = (string) => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/${string}?api_key=bf9b9dcdb82a2dedd93d2fec0a98a443`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTrendingData(res.results);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      props.history.push(`/search-movie?search=${event.target.value}`);
    }
  };

  return (
    <>
      <NavBar {...props} />
      <Container fluid className={styles.container}>
        <div className={styles.welcome}>
          <h1>Welcome.</h1>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div className={styles.search}>
            <input
              type="search"
              placeholder="Search for a movie..."
              onKeyPress={handleSearch}
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
                const movieName = item.original_title;
                return (
                  <div
                    className={styles.card}
                    key={index}
                    onClick={() =>
                      props.history.push(
                        `/tv/${item.id}?movie-name=${movieName}`
                      )
                    }
                  >
                    <img
                      src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`}
                      alt={`${item.original_title}`}
                    />
                    <h5>{item.original_title}</h5>
                    <h6>{item.release_date}</h6>
                  </div>
                );
              })
            : null}
          {btnPopular === "On TV" || btnPopular === "In Theaters"
            ? watchPopularData.map((item, index) => {
                const movieName = item.name;
                return (
                  <div
                    className={styles.card}
                    key={index}
                    onClick={() =>
                      props.history.push(
                        `/tv/${item.id}?movie-name=${movieName}`
                      )
                    }
                  >
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
            : null}
        </div>

        <div className={styles.navPopular}>
          <h4>Treding</h4>
          <div>
            <button
              className={btnTrending === "day" ? styles.btnPopular : styles.not}
              onClick={() => {
                handleBtnTrending("day");
                getTrendingData("day");
              }}
            >
              Today
            </button>
            <button
              className={
                btnTrending === "week" ? styles.btnPopular : styles.not
              }
              onClick={() => {
                handleBtnTrending("week");
                getTrendingData("week");
              }}
            >
              This Week
            </button>
          </div>
        </div>
        <div className={styles.cardMovie}>
          {trendingData.map((item, index) => {
            return (
              <div
                className={styles.card}
                key={index}
                onClick={() =>
                  props.history.push(`/tv/${item.id}?movie-name=${item.title}`)
                }
              >
                <img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`}
                  alt=""
                />
                <h5>{item.title}</h5>
                <h6>{item.release_date}</h6>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default Home;
