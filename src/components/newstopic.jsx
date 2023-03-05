import Newstopicitem from './newstopicitem';
import './newstopic.css';
import Today from './today';

export  default function Newstopic() {

  const newstopics = [
    {
      id: '1',
      title: 'Сейчас в СМИ'
    },
    {
      id: '2',
      title: 'в Германии'
    },
    {
      id: '3',
      title: 'Рекомендуем'
    },
  ];

  return <div className="newstopic">
    { newstopics.map((item) => <Newstopicitem item={item} key={item.id}/>)}
    <Today />
  </div>
}
