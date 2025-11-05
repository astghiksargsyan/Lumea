import './css/BedLinen.css';
import { Sets } from '../bedSets.js';

function Bedlinen() {
  return (
   <>
    {Sets.map((set, index) => (
        <a href="#" className="bed-linen-wrap">
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
        </a>
      ))}
   </>
  );
}

export default Bedlinen;