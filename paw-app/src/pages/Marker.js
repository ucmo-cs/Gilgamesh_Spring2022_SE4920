import InfoWindow from './InfoWindow';
import './CssPages/Marker.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Marker = (props) => {
    const { color, lat, lng, population, quality, rating, title,id, address} = props;
    const [show, setShow] = useState(false);
    //console.log(name)
    return (
     <>
      <div className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={title}
        onClick={() => setShow(!show)}
      />
      <div className='pulse' />
      {show ? <InfoWindow id={id} title={title} population={population} rating={rating} quality={quality} address={address} setTrigger={() => setShow(false)} /> : ""}
      </>
    );
  };

  export default Marker;