import './App.css';
import Card from './components/card';

const cards = [
  {
    img: 'https://res.cloudinary.com/d3/image/upload/c_scale,h_450,q_auto:best/color-cards_lorvwg.jpg',
    title: 'Заголовок 1',
    text: 'Текст для карточки 1. Текст для карточки 1. Текст для карточки 1. Текст для карточки 1.'
  },
  {
    img: null,
    title: 'Заголовок 2',
    text: 'Текст для карточки 2. Текст для карточки 2. Текст для карточки 2. Текст для карточки 2.'
  }
]

function App() {
  return (
    <div className="App">
      {cards.map ((item) => {
        return (
        <Card img={item.img}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <button>Кнопочка</button>
      </Card> )
      })}
    </div>
  );
}

export default App;
