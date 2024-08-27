import { Link } from "react-router-dom"
import "./home.css"
function Home(){
    return(
        <>
        <div className="homecontainer">
        <div>
          <h2 className="homeh2">THE SCHOOL OF EDUCATION,INDORE (MP)</h2>
          <p className="homep">we are a learning communty and nurturing well -being and nurturing well -being <br/>
          dedicated to inspiring success e are a learning communty and nurturing well<br/> 
          and nurturing well -being.and nurturing well -being. </p>
        </div>
        <div>
          <Link to={'/studentlogin'}>
          <button className="btn btn-warning homebtn"><b>STUDENT</b> LOGIN</button>
          </Link>
          <Link to={"/teacherlogin"}>
          <button className="btn btn-warning homebtn"><b>TEACHER</b> LOGIN</button>
          </Link>
        </div>
        </div>
        </>
    )
}

export default Home