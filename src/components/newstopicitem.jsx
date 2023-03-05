import './newstopicitem.css';

export  default function Newstopicitem({item}) {
  console.log('=============', item.title);
  return <div className="newstopicitem">
    {item.title}
  </div>
}
