import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <div className="h-full w-full text-center bg-[url('https://wallpaperaccess.com/full/2587476.jpg')] bg-center bg-no-repeat bg-cover">

      <Header />
      <Home />
      <Footer />

    </div>
  );
}

export default App;
