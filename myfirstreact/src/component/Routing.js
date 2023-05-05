import React from "react";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import HomePage from "./HomePage";
import UserOne from "./UserOne";
import Users from "./Users";

class Routing extends React.Component {

  render() {

    // const user = ({match}) => <p>User {match.prams.id}</p>
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/users/1">User 1</Link>
          </li>
          <li>
            <Link to="/users/2">User 2</Link>
          </li>
          <li>
            <Link to="/users/3">User 3</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/users/:id" element={<UserOne/>} />
          
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    );
  }
}

export default Routing;
