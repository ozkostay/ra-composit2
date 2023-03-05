import './teach.css';
import Teachimg from './teachimg';
import Teachtext from './teachtext';
import Teachtitle from './teachtitle';

export  default function Teach() {
  return <div className="teach">
    <Teachimg />
    <Teachtitle />
    <Teachtext />
  </div>
}
