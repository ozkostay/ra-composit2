import './squearcontent.css';

export default function Squearcontent({item}) {
  
  return <div className="squearcontent">
    <h4>{item.chapter}</h4>
    <p>{item.content}</p>
  </div>
}
