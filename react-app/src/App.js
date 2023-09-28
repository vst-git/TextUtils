import Navbar from './components/Navbar.js';
import TextForm from './components/TextFrom.js';
import About from './components/About.js';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze :" />
      </div>
      <About />
    </>
  );
}

export default App;
