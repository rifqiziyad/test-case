import React, { useEffect, useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import styles from "./Search.module.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";

function Search(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(
    props.location.search.split("=")[1] || ""
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    getMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getMovieData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const getMovieData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bf9b9dcdb82a2dedd93d2fec0a98a443&query=${search}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setIsLoading(false);
        setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onKeyPressEnter = (event) => {
    if (event.key === "Enter") {
      props.history.push(`/search-movie?search=${event.target.value}`);
      setSearch(event.target.value);
      setIsLoading(true);
      getMovieData();
    }
  };

  return (
    <>
      <NavBar {...props} />
      <Container className={styles.container}>
        <div className={styles.search}>
          <input
            type="search"
            placeholder="Search for a movie...."
            onKeyPress={onKeyPressEnter}
          />
          <button>Search</button>
        </div>

        {isLoading ? (
          <div className={styles.spinner}>
            <Spinner animation="border" />
          </div>
        ) : data.length > 0 ? (
          data.map((item, index) => {
            return (
              <Row className={styles.card} key={index}>
                <Col md={1} className={styles.colImg}>
                  <img
                    src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${item.backdrop_path}`}
                    alt=""
                  />
                </Col>
                <Col className={styles.colDesc}>
                  <p className={styles.nameMovie}>{item.original_title}</p>
                  <p className={styles.date}>{item.release_date}</p>
                  <p className={styles.overview}>
                    {item.overview.length > 260
                      ? `${item.overview.slice(0, 260)}...`
                      : item.overview}
                  </p>
                </Col>
              </Row>
            );
          })
        ) : (
          <div className={styles.spinner}>Movie Not Found</div>
        )}
      </Container>
    </>
  );
}

export default Search;
