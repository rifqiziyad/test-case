import NavBar from "../../components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./MovieById.module.css";
import iconArrow from "../../assets/iconArrow.png";
import { useEffect, useState } from "react";

function MovieById(props) {
  const [data, setData] = useState({
    name: "-",
    realeaseDate: "00-00-00",
    genres: "-",
    userScore: "0",
    tagline: "-",
    overview: "-",
    poster: "",
    backgroundImage: "",
  });
  const [linkTrailer, setLinkTrailer] = useState("");
  const [isDisplay, setIsDisplay] = useState(false);

  const backgroundImage = {
    width: "100%",
    height: "95vh",
    backgroundImage: `url(${`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backgroundImage}`})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    getMovieDetail();
    getLinkTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieDetail = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=bf9b9dcdb82a2dedd93d2fec0a98a443&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const arr = [];
        res.genres.forEach((item) => {
          arr.push(item.name);
        });
        setData({
          name: res.original_title,
          realeaseDate: res.release_date,
          genres: arr.join(", "),
          userScore: res.vote_average,
          tagline: res.tagline,
          overview: res.overview,
          backgroundImage: res.backdrop_path,
          poster: res.poster_path,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLinkTrailer = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}/videos?api_key=bf9b9dcdb82a2dedd93d2fec0a98a443&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLinkTrailer(res.results[0].key);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavBar {...props} />
      <Container fluid className={styles.container}>
        <div className={styles.backgroundColor}></div>
        <div className={styles.backgroundImage} style={backgroundImage}>
          <Row className={styles.mainContent}>
            <Col md={3} className={styles.sideLeft}>
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster}`}
                alt="img"
                className={styles.poster}
              />
            </Col>
            <Col md={8} className={styles.sideRight}>
              <div>
                <h2>{`${data.name} (${data.realeaseDate.split("-")[0]})`}</h2>
                <span>
                  07/09/2021 (US) | Action, Adventure, Thriller, Science Fiction
                  | 2h 14m
                </span>
                <div className={styles.userScore}>
                  <span>{data.userScore.toString().split(".").join("")}%</span>
                  <h6>
                    User
                    <br />
                    Score
                  </h6>
                  <img src={iconArrow} alt="iconArrow" />
                  <h6 onClick={() => setIsDisplay(true)}>Play Trailer</h6>
                </div>
                <h6 className={styles.tagline}>{data.tagline}</h6>
                <h5>Overview</h5>
                <p>{data.overview}</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div
        style={
          !isDisplay ? { visibility: "hidden" } : { visibility: "visible" }
        }
        className={styles.backgroundDark}
      ></div>
      <div
        style={
          !isDisplay ? { visibility: "hidden" } : { visibility: "visible" }
        }
        className={styles.youtubePlayer}
      >
        <div>
          <h3>Play Trailer</h3>
          <h4 onClick={() => setIsDisplay(false)}>X</h4>
        </div>
        <iframe
          width="800"
          height="480"
          src={`https://www.youtube.com/embed/${linkTrailer}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default MovieById;
