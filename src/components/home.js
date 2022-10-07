import "../css/home.css"
import cloudIcon from "../assets/icons8-cloud-50.png"
import { BsSearch } from "react-icons/bs"
import { useState } from "react"
import axios from "axios"

const Home = () => {

    const [citydata, setcitydata] = useState([])
    const [weatherdata, setweatherdata] = useState([])
    const [inputCity, setinputCity] = useState("")


    const Submit = async(e) => {
        e.preventDefault();

        const tableSection1 = document.getElementsByClassName("table-div-1")[0]
        const tableSection2 = document.getElementsByClassName("table-div-2")[0]
        const weatherDesc1 = document.getElementsByClassName("weather-desc-1")[0]
        const weatherDesc2 = document.getElementsByClassName("weather-desc-2")[0]
        const temperatureSection = document.getElementsByClassName("temperature")[0]
        const degreeSection = document.getElementsByClassName("degree")[0]
        const citySection = document.getElementsByClassName("city")[0]
        const dateSection = document.getElementsByClassName("date")[0]
        const imageSection = document.getElementsByClassName("image")[0]
        const cloudSection = document.getElementsByClassName("cloud-status")[0]

        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=1&appid=a8270275dab711c19c0024dd5d045dc9`)    
        const citydata = response.data

        let lat = citydata[0].lat;
        let lon = citydata[0].lon;

        const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a8270275dab711c19c0024dd5d045dc9`)
        const weatherdata = response2.data;

        console.log(citydata)
        console.log(citydata[0].name)
        console.log(weatherdata)

        let temperature = weatherdata.main.temp;
        let min_temp = weatherdata.main.temp_min;
        let max_temp = weatherdata.main.temp_min;
        let sunrise = weatherdata.sys.sunrise;
        let sunset = weatherdata.sys.sunset;
        let date = weatherdata.dt;
        let description = weatherdata.weather[0].description;
        let cloudy = weatherdata.clouds.all;
        let wind = weatherdata.wind.speed
        let humidity = weatherdata.main.humidity;
        let sea_level = weatherdata.main.sea_level


        const kelToDegree = (x) => {
            let tem = x - 273.15;
            return tem;
        }

        temperature = kelToDegree(temperature);
        min_temp = kelToDegree(min_temp);
        max_temp = kelToDegree(max_temp);


        const unixToTime = (x) => {
            let date = new Date(x * 1000);
            let hours = date.getHours()
            let minutes = "0" + date.getMinutes()
            let seconds = "0" + date.getSeconds();
            let time = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)
            return time
        }
        sunrise = unixToTime(sunrise);
        sunset = unixToTime(sunset)
        date = unixToTime(date)



        temperatureSection.innerHTML = `
            ${temperature.toFixed(1)}
        `
        degreeSection.innerHTML = `O`

        citySection.innerHTML = `
            ${citydata[0].name}
        `
        dateSection.innerHTML = `
            ${date}
        `
        imageSection.innerHTML = `
            <img src=${cloudIcon} alt="cloud" width="40px" height="40px" />
        `
        cloudSection.innerHTML = `
            ${description}
        `

        weatherDesc1.innerHTML = `Weather Details`
        tableSection1.innerHTML = `
    <table>
        <tbody>
            <tr>
                <th>Cloudy</th>
                <td>${cloudy} % </td>
            </tr>
            <tr>
                <th>Wind</th>
                <td>${wind} m/sec </td>
            </tr>
            <tr>
                <th>Humidity</th>
                <td>${humidity} % </td>
            </tr>
            <tr>
                <th>Minimum Temperature</th>
                <td>${min_temp.toFixed(2)} </td>
            </tr>
            <tr>
                <th>Maximum Temperature</th>
                <td>${max_temp.toFixed(2)} </td>
            </tr>
            <tr>
                <th>Description</th>
                <td>${description} </td>
            </tr>
        </tbody>
    </table>`

        weatherDesc2.innerHTML = `Location Details`
        tableSection2.innerHTML =
            `<div className="table-div-2" >
        
        <table>
            <tr>
                <th>Sea Level</th>
                <td>${sea_level}</td>
            </tr>
            <tr>
                <th>Sunrise</th>
                <td>${sunrise}</td>
            </tr>
            <tr>
                <th>Sunset</th>
                <td>${sunset}</td>
            </tr>
        </table>
    </div>`
    }




    return (

        <>
            <main className="main">

                <section className="location-div" style={{ alignItems: "center" }}>
                    <div className="temp-div" style={{ textAlign: "center", alignItems: "center" }}>
                        <div className="temperature" style={{fontSize:"90px"}}></div>
                        <div className="degree" style={{fontSize:"30px"}}>

                        </div>

                        <div className="city-date-div" style={{ alignItems: "center" }}>
                            <div className="city" style={{letterSpacing:"1.2px", fontWeight:"550"}}>

                            </div>
                            <div className="date"></div>
                        </div>

                        <div className="cloud-div" style={{ alignItems: "center" }}>
                            <div className="image" style={{width:"115px", height:"115px"}}>

                            </div>

                            <div className="cloud-status" style={{ fontSize: "20px", marginBottom: "45px" }}>

                            </div>
                        </div>

                    </div>

                </section>

                <section className="data-div" >

                    <form className="input-form" onSubmit={(e) => Submit(e)}>
                        <input id="city" className="location-input" onChange={(e) => { setinputCity(e.target.value) }} value={inputCity} type="text" placeholder="Location"></input>
                        <button className="submit-btn" type="submit">
                            {<BsSearch size={20} style={{ marginTop: "5px" }} />}
                        </button>
                    </form>
                    <div className="weather-desc-1" style={{ marginBottom: "15px", fontSize: "24px" }}>

                    </div>
                    <div className="table-div-1" style={{ marginBottom: "25px" }}>

                    </div>

                    <div className="weather-desc-2" style={{ marginBottom: "15px", fontSize: "24px" }}>

                    </div>

                    <div className="table-div-2" style={{ marginBottom: "110px" }}>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;