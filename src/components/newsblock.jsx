import Newstopic from "./newstopic";
import './newsblock.css';
import Newsitem from "./newsitem";

const newsItems = [
  {
    topic: 'Тема новости номер',
    number: 1
  },
  {
    topic: 'Тема новости номер',
    number: 2
  },
  {
    topic: 'Тема новости номер',
    number: 3
  },
  {
    topic: 'Тема новости номер',
    number: 4
  },
  {
    topic: 'Тема новости номер',
    number: 5
  },
];

export  default function Newsblock() {
  return <div className="newsblock">
    <Newstopic />
    { newsItems.map((item) => <Newsitem item={item} key={item.number}/> )}
  </div>
}
