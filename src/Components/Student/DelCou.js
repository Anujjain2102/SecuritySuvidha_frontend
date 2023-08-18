import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "../Css/delcou.css"
const Delcou =()=>{
    const history = useHistory();
    const [page, setPage] = useState(true);
    const [data, setData] = useState({});
    const [status,setStatus]=useState({});

    useEffect(()=>{
        handleupdate();
    },[]);

    const handleupdate=()=>{
        axios.get("http://localhost:9002/getallcourior").then((res)=>{
            setData(res.data);
            console.log(res.data);

        });
    };
    const handleDelete = (email) => {
        axios
          .delete(`http://localhost:9002/courior/delete/${email}`)
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      const handleStatusChange = async (email, newStatus) => {
        try {
          setStatus(newStatus);
          console.log(newStatus);
          await axios.patch(`/companydata/${email}`, { status: newStatus });
          console.log(`Status for ${email} updated to ${newStatus}`);
        } catch (error) {
          console.error(error);
        }
      };
      


    return(
        <>
         <div className="list">
                <h1>Couriers:</h1>
                <div className="gridd">
                  {Array.from(data).map((post) => {
                    const { email,cname } = post;
                    return (
                      < div className="cardd">
                        <p>Courier ID: {email}</p>
                        <p>CompanyName: {cname}</p>
                        
                        <select value={status} onChange={(e) => handleStatusChange(email, e.target.value)}>
                          <option>change</option>
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                        
                      </div>
                    );
                  })}
                </div>
                </div>
                <div className="form-button1" onClick={() => history.push("/login")}>
              Logout
            </div>
        </>
    );
};
export default Delcou