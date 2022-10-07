/* import "../css/home.css"
import { BsSearch } from "react-icons/bs"
import { useState } from "react";
import Home from "./homedup"

const Provide = () => {

    const [citydata, setcitydata] = useState([])
    const [weatherdata, setweatherdata] = useState([])

    const Submit = (e) => {
        e.preventDefault();
        let city = document.getElementById("city").value;
        if (city === "") {
            alert("Please Enter Data")
        }
        else {
            console.log(city)
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a8270275dab711c19c0024dd5d045dc9`, {
                method: "GET"
            }).then((res) => res.json())
                .then((data) => setcitydata(data))
            console.log(citydata)
            console.log(citydata[0].name)
            let lat = citydata[0].lat;
            let lon = citydata[0].lon;

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8270275dab711c19c0024dd5d045dc9`, {
                method: "GET"
            }).then((res) => res.json())
                .then((data) => setweatherdata(data))
        }

    }
    return (
        <>
            <form className="input-form" onSubmit={(e) => Submit(e)}>
                <input id="city" className="location-input" type="text" placeholder="Location"></input>
                <button className="submit-btn">
                    {<BsSearch size={20} style={{ marginTop: "5px" }} />}
                </button>
            </form>

            <Home citydata = {citydata} weatherdata = {weatherdata}/>
        </>
    )
}

export default Provide; */