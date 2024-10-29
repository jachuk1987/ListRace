import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TopArea from './Components/TopArea';
import Hero from './Components/Hero';
import ListTopics from './Components/ListTopics';
import Works from './Components/Works';

function App() {
  return (
    <div className="App">
      <Header />
      <TopArea />
      <Hero />
      <ListTopics />
      <Works />
    </div>
  );
}

export default App;
