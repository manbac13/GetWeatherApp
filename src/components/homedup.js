/* import "../css/home.css"
import cloudIcon from "../assets/icons8-cloud-50.png"

const Home = (props) => {

    let citydata = props.city
    let weatherdata = props.weatherdata;

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
    console.log(temperature, min_temp, max_temp, description)
    return (

        <>

            <main className="main">

                <section className="location-div">
                    <div className="temp-div">
                        <div className="temperature">
                            {temperature.toFixed(1)}
                            <span className="degree">
                                o
                            </span>
                        </div>

                    </div>
                    <div className="city-date-div">
                        <div className="city">
                            {citydata[0].name}
                        </div>
                        <div className="date">
                            {date}
                        </div>
                    </div>
                    <div className="cloud-div">
                        <img src={cloudIcon} alt="cloud" width="40px" height="40px" />
                        <div className="cloud-status">
                            {description}
                        </div>
                    </div>

                </section>

                <section className="data-div" >
                    <div className="table-div-1">
                        <div className="weather-desc">
                            Weather Details
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Cloudy</th>
                                    <td>{`${cloudy} %`} </td>
                                </tr>
                                <tr>
                                    <th>Wind</th>
                                    <td>{`${wind} m/sec`} </td>
                                </tr>
                                <tr>
                                    <th>Humidity</th>
                                    <td>{`${humidity} %`} </td>
                                </tr>
                                <tr>
                                    <th>Minimum Temperature</th>
                                    <td>{min_temp.toFixed(2)} </td>
                                </tr>
                                <tr>
                                    <th>Maximum Temperature</th>
                                    <td>{max_temp.toFixed(2)} </td>
                                </tr>
                                <tr>
                                    <th>Description</th>
                                    <td>{description} </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="table-div-2">
                            <div className="weather-desc">
                                Location Details
                            </div>
                            <table>
                                <tr>
                                    <th>Sea Level</th>
                                    <td>{sea_level}</td>
                                </tr>
                                <tr>
                                    <th>Sunrise</th>
                                    <td>{sunrise}</td>
                                </tr>
                                <tr>
                                    <th>Sunset</th>
                                    <td>{sunset}</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Home; */