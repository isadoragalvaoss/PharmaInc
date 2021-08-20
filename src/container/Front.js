import { Nav } from "../components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Table } from "../components/Table";

function Front() {
  const [item, setItem] = useState([]);
  const [searchTermNc, setSearchTermNc] = useState("");
  const [searchTermName, setSearchTermName] = useState("");
  const [searchTermGender, setSearchTermGender] = useState("");
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(10);

  const loadmore = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then((response) => {
      setItem(response.data.results);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Nav />

      <div className="container containerCard">
        <h2 className="text-center text-uppercase pt-4  font-weight-normal">
          {" "}
        </h2>

        <div className="row"></div>

        <>
          <div className="row">
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event) => {
                  setSearchTermName(event.target.value);
                }}
              ></input>
            </div>
            <div className="col-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search by nationality..."
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event) => {
                  setSearchTermNc(event.target.value);
                }}
              ></input>
            </div>
            <div className="col-4">
              <select
                class="form-select"
                id="inputGroupSelect01"
                onChange={(event) => {
                  setSearchTermGender(event.target.value);
                }}
              >
                <option value="neutro">Chosse..</option>

                <option value="female">female</option>
                <option value="male">male</option>
              </select>
            </div>
          </div>

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
              {item
                .filter((user) => {
                  if (searchTermName === "") {
                    return user;
                  } else if (
                    user.name.first
                      .toLowerCase()
                      .includes(searchTermName.toLowerCase())
                  ) {
                    return user;
                  }
                })
                .filter((user) => {
                  if (searchTermNc === "") {
                    return user;
                  } else if (
                    user.nat.toLowerCase().includes(searchTermNc.toLowerCase())
                  ) {
                    return user;
                  }
                })
                .filter((user) => {
                  if (searchTermGender == "neutro") {
                    console.log("op1");
                    return user;
                  } else if (user.gender.includes(searchTermGender)) {
                    let s = user.gender;
                    s = s.normalize("NFKD");
                    console.log(s);
                    return user;
                  }
                })
                .slice(0, visible)
                .map((user) => (
                  <Table user={user} />
                ))}
            </tbody>
          </table>
          <button className="btn btn-dark mt-2" onClick={loadmore}>
            Loading More
          </button>
        </>
      </div>
    </div>
  );
}

export default Front;
