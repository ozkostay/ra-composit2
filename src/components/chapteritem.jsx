import './chapteritem.css';

export  default function Chapteritem({item}) {
  return <div className="chapteritem">
    { item.title }
  </div>
}