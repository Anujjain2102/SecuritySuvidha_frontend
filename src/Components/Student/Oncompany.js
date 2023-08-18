import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Css/Oncompany.css";

const Oncompany = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { cname, email, address, status } = user;
    console.log(user)
    if (cname && email && address && status) {
      axios.post("http://localhost:9002/company", user).then((res) => {
        alert(res.data.message);
        console.log(res);
      });
    } else {
      console.log(cname);
      alert("Invalid Input ");
    }
  };

  return (
    <div className="form-container">
      <h1>Add Courier Details:</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cname" className="form-label">
            Courier Name:
          </label>
          <input
            type="text"
            name="cname"
            value={user.cname}
            placeholder="Courier Name"
            onChange={handleChange}
            id="cname"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyemail" className="form-label">
            Courier-ID:
          </label>
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Courier ID"
            onChange={handleChange}
            id="email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyAddress" className="form-label">
            Address:
          </label>
          <input
            type="text"
            name="address"
            value={user.address}
            placeholder="Courier Address"
            onChange={handleChange}
            id="companyAddress"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status" className="form-label">
            Status:
          </label>
          <select
            name="status"
            value={user.status}
            onChange={handleChange}
            id="status"
            className="form-input"
            required
          >
            <option value="">Select Status</option>
            <option value="yes">YES</option>
            <option value="no">NO</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="proof" className="form-label">
            Proof:
          </label>
          <input
            type="file"
            id="proof"
            className="form-input"
            required
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="form-button">
            Submit
          </button>
          <button
            type="button"
            className="form-button"
            onClick={() => history.push("/deletecourior")}
          >
            Courier entries
          </button>
          <button
            type="button"
            className="form-button"
            onClick={() => history.push("/login")}
          >
            Log Out
          </button>
        </div>
      </form>
    </div>
  );
};

export default Oncompany;
