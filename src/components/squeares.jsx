import './squeares.css';
import Squearitem from './squearitem';

export  default function Squeares() {
const squearscount= [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  }
];

  return <div className="squeares">
    { squearscount.map((item) => <Squearitem key={item.id}/>) }
  </div>
}
