import './squeares.css';
import Squearitem from './squearitem';

export  default function Squeares() {
const squearscount= [
  {
    id: '1',
    chapter: 'Погода',
    content: 'Здесь какойто контент'
  },
  {
    id: '2',
    chapter: 'Посещаемое',
    content: 'Здесь какойто контент'
  },
  {
    id: '3',
    chapter: 'Карта Германии',
    content: 'Здесь какойто контент'
  },
  {
    id: '4',
    chapter: 'Телепрограмма',
    content: 'Здесь какойто контент'
  },
  {
    id: '5',
    chapter: 'Эфир',
    content: 'Здесь какойто контент'
  }
];

  return <div className="squeares">
    { squearscount.map((item) => <Squearitem key={item.id} item={item}/>) }
  </div>
}
