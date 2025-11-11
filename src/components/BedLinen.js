import './css/BedLinen.css';
import { Sets } from '../bedSets.js';
import { Link } from 'react-router-dom';

function Bedlinen() {
  return (
   <>
    {Sets.map((set, index) => (
      <Link to={`/product/${index}`} key={index} className="bed-linen-wrap">
<div key={index} className="bed-linen-item">
          <div className="cover-image">
            <img src={set.img} alt={set.name} />
          </div>
          <div className="information">
            <h3>{set.name}</h3>
            <p>£{set.price}</p>
            <p>{set.features}</p>
          </div>
        </div>
      </Link>

        

      ))}
   </>
  );
}

export default Bedlinen;