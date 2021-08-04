import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
import styles from "./home.module.css";
import axiosApiIntances from "../../utils/axios";

export default function Home(props) {
  const [dataEmployee, setDataEmployee] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosApiIntances
      .get("/form")
      .then((res) => {
        setDataEmployee(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah anda akan menghapus data ini ?")) {
      axiosApiIntances
        .patch(`/form/delete/${id}`)
        .then(() => {
          getData();
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const handleEdit = (data) => {
    props.history.push("/form");
    localStorage.setItem("id", data.ID);
    localStorage.setItem("name", data.NAME);
    localStorage.setItem(
      "birthDay",
      data.BIRTH_DATE.split("T")[0].split("-").join("-")
    );
    localStorage.setItem("nip", data.NIP);
    localStorage.setItem("positionId", data.POSITION_ID);
    localStorage.setItem("gender", data.GENDER);
  };

  return (
    <>
      <Container className={styles.container}>
        <h2 className={styles.title}>Master Karyawan</h2>
        <h4>List Karyawan</h4>

        <Button
          className={styles.btn}
          onClick={() => {
            props.history.push("/form");
          }}
        >
          Tambah
        </Button>
        <Table striped bordered hover className={styles.table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Tanggal Lahir</th>
              <th>Jabatan</th>
              <th>NIP</th>
              <th>Jenis Kelamin</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataEmployee.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.NAME}</td>
                  <td>
                    {item.BIRTH_DATE.split("T")[0]
                      .split("-")
                      .reverse()
                      .join("-")}
                  </td>
                  <td>{item.POSITION}</td>
                  <td>{item.NIP}</td>
                  <td>{item.GENDER === 1 ? "Pria" : "Wanita"}</td>
                  <td className={styles.btnAksi}>
                    <Button
                      className={styles.buttonAksi}
                      variant="secondary"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </Button>
                    <Button
                      className={styles.buttonAksi}
                      variant="danger"
                      onClick={() => handleDelete(item.ID)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
