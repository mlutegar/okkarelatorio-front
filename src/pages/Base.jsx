import Header from "../components/Header/Header";

const Base = (props) => (
    <>
        <div className="container">
            <Header/>
            {props.children}
        </div>
    </>
)

export default Base;