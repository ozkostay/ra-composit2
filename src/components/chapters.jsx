import Chapteritem from "./chapteritem";
import './chapters.css';

export  default function Chapters() {
  const chapteritems = [
    {
      id: '1',
      title: 'Видео'
    },
    {
      id: '2',
      title: 'Картинки'
    },
    {
      id: '3',
      title: 'Новости'
    },
    {
      id: '4',
      title: 'Карты'
    },
    {
      id: '5',
      title: 'Маркет'
    },
    {
      id: '6',
      title: 'Переводчик'
    },
    {
      id: '7',
      title: 'Эфир'
    },
    {
      id: '8',
      title: 'ещё'
    },
  ];

  return <div className="chapters">
    { chapteritems.map((item) => <Chapteritem item={item} key={item.id}/>) }
  </div>
}
