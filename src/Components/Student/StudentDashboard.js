import React, { useEffect, useState } from "react";
import "../Css/StudentDashboard.css";
import { Router, Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const StudentDashboard = () => {
  const history = useHistory();
  const [userdata, setData] = useState(null);
  const email = localStorage.getItem("email");

  axios
    .get(`http://localhost:9002/login/get-details/${email}`)
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  const checkplacecomm = () => {
    axios
      .get(`http://localhost:9002/memornot/get-details/${email}`)
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message === "True") {
          history.push("/placecomm");
        } else {
          alert("You Are not in a placement committee !!");
        }
      });
  };

  return (
    <>
      <div className="sidebar-content open">
        <ul className="sidebar-menu">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg>
            <div onClick={() => history.push("/StudentDashboard")}>Home</div>
          </li>
          <li>
            <div onClick={() => history.push("/Edit")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
              Edit / Update
            </div>
          </li>
          <li>
            <div onClick={() => history.push("/Jobpost")}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-mailbox"
                viewBox="0 0 16 16"
              >
              <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z"/>
              </svg>
              Couriers
            </div>
          </li>
          <li>
            <div onClick={() => history.push("/login")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-door-closed"
                viewBox="0 0 16 16"
              >
                <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
                <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
              </svg>
              Logout
            </div>
          </li>
        </ul>
      </div>
      <div className="box">
        {userdata ? (
          <>
            <h2>Student Information :</h2>
            <p>Name : {userdata.name}</p>
            <p>Email : {userdata.email}</p>
            <p>User Type :{userdata.usertype}</p>
            <p>First Name : {userdata.firstname}</p>
            <p>Last Name : {userdata.lastname}</p>
            <p>Email ID : {userdata.email}</p>
            <p>Address : {userdata.address}</p>
            <p>City Name :{userdata.city}</p>
            <p>Phone No :{userdata.phoneno}</p>
            <p>College Name : {userdata.college}</p>
            <p>Stream : {userdata.stream}</p>
            <p>Skils : {userdata.skill}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default StudentDashboard;
