import Header from "../components/Header/Header";
import {useNavigate} from "react-router-dom";

const Base = (props) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem("first_name");
        localStorage.removeItem("setor");
        localStorage.removeItem("cargo");
        localStorage.removeItem("email");
        navigate('/');
    }

    return (
        <>
            <div className="container">
                <Header/>
                {props.children}
                <button className={"teste"} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </>
    )
}

export default Base;