import './header.css';
import Newsblock from './newsblock'
import Teach from './teach'

export  default function Header() {
  return <div className="header">
    <Newsblock />
    <Teach />
  </div>
}
