import { useLocation } from "react-router-dom";

export default function UserOutput() {
    const location = useLocation();
    const { userData } = location.state || {};

    return (
        <div 
        style={{width:"100vw",height:"100vh",backgroundColor:"#B7DFEE",textAlign:"center"}}
        className="d-flex align-items-center justify-content-center">
            <i className="me-3 fa-solid fa-user"style={{color:"white",fontSize:"14rem"}}></i>
            <div className="card text-bg-white mb-3" style={{ width: "25rem",height:"15rem"}}>
                <div className="card-header">User Info</div>
                <div className="card-body">
                    <h5 className="card-title">Name - {userData?.name}</h5>
                    <p className="card-text">Email :- {userData?.email}</p>
                    <p className="card-text">Date of Birth :- {userData?.dob}</p>
                    <p className="card-text">Phone no. :- {userData?.phoneNumber}</p>
                </div>
            </div>
        </div>
    );
}