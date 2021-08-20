import { useState, useEffect } from "react";
import { Nav } from "../components/Nav";
import axios from "axios";
import { Table } from "../components/Table";

function Front() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then((response) => {
      setItem(response.data.results);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Nav />

      <div className="container containerCard">
        <h2 className="text-center text-uppercase pt-4  font-weight-normal">
          {" "}
        </h2>

        <div className="row"></div>

        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Birth</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {item.map((user) => (
                <Table user={user} />
              ))}
            </tbody>
          </table>
          <button className="btn btn-dark mt-2">Loading More</button>
        </>
      </div>
    </>
  );
}

export default Front;
