import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TopArea from './Components/TopArea';
import Hero from './Components/Hero';
import ListTopics from './Components/ListTopics';
import Works from './Components/Works';
import ExploreSection from './Components/ExploreSection';
import Reviews from './Components/Reviews';
import Statistics from './Components/Statistics';

function App() {
  return (
    <div className="App">
      <Header />
      <TopArea />
      <Hero />
      <ListTopics />
      <Works />
      <ExploreSection />
      <Reviews />
      <Statistics />
    </div>
  );
}

export default App;
