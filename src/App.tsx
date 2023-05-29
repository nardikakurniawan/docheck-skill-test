import { Routes, Route } from 'react-router-dom';
import FirstQuestion from './pages/FirstQuestion';
import SecondQuestion from './pages/secondQuestion/Item';
import ThirdQuestion from './pages/thirdQuestion';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <section className="container mx-auto">
        <Routes>
          <Route path="/" element={<FirstQuestion />} />
          <Route path="/second-question" element={<SecondQuestion />} />
          <Route path="/third-question" element={<ThirdQuestion />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
