import './main.css';
import Advbanner from './advbanner';
import Chapters from './chapters';
import Header from './header';
import Searchbar from './searchbar';
import Squeares from './squeares';

export  default function Main() {
  return <main className="main">
    <Header />
    <Chapters />
    <Searchbar />
    <Advbanner />
    <Squeares />
  </main>
}
