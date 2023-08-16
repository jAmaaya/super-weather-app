import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'

// const Clime = () => {

// }

function CardClime() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=8.59524&lon=-71.1434&lang=es&appid=030d8e48ecc9d84622d872a156cc1e7d&units=metric`

  return (
    <div className='contain'>
        <div  className="top">
          <div className="location">
            <p>Merida</p>
          </div>
          <div className="temp">
            <p>19.5 C</p>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>19.8 C</p>
          </div>
          <div className="humidity">
            <p>30%</p>
          </div>
          <div className="wind">
            <p>12pmh</p>
          </div>
        </div>
      </div>
  );
}

export default CardClime;
