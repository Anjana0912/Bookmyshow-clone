import { Route } from "react-router-dom";

//axios
import axios from "axios";

//HOC
import DefaultHOC from "./hoc/Default_HOC";
import MovieHOC from "./hoc/Movie.HOC";

//Pages
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
//import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
     <DefaultHOC path="/" exact component={HomePage} />
     <MovieHOC path="/movie/:id" exact component={Movie} />
     <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}
// / , /movie
export default App;


//spread operator
/*
//prev version
const anj = {
name:"anj",
dob:0912
};

const student = {
name:"anj",
dob: 0912,
goodStudent: true
};

const student = anj; //takes val from const anj and merges with const student
student.goodStudent  = true;
//same using spread operator
const anj = {
name:"anj",
dob:0912
};

const student = {...anj, goodStudent:true};
*/
