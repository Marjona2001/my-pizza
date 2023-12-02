
import './App.css';
import Main_one from './Components/Main_One/Main_one';
import Main_two from './Components/Main_Two/Main_two';
import Footer from './Layouts/Footer/Footer';
import Navbar from './Layouts/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main_one />
      <Main_two />
      <Footer />
    </div>
  );
}

export default App;
