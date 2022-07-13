import './App.scss';
import { Navbar, Header, Brands, PromotionBox } from './components/imports'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brands />
      <PromotionBox />
    </div>
  );
}

export default App;
