import './newsitem.css'

export  default function Newsitem({item}) {
  return <div className="newsitem">
    {`${item.topic} ${item.number}`}
  </div>
}
