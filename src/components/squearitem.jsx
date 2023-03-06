import Squearcontent from './squearcontent';
import './squearitem.css';

export default function Squearitem({item}) {
  
  return <div className="squearitem">
    <Squearcontent item={item}/>
  </div>
}
