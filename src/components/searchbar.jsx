import Searchform from "./searchform"
import './searchbar.css';

export  default function Searchbar() {
  return <div className="searchbar">
    <Searchform>
      <input type='input' className='input' />
      <button className='button'>Найти</button>
    </Searchform>
  </div>
}
