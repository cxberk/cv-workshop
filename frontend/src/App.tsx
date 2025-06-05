import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Experiences from './pages/Experiences';
import MainHeader from './components/main-header/main-header';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <MainHeader />
        <main>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/experiences" element={<Experiences />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
