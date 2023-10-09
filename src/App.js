import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import TopNavbar from './Compoents/Navbar';
import TopBodySection from './Compoents/TopBodySection';
import MiddleBodySection from './Compoents/MiddleBodySection';
import BottomBodySection from './Compoents/BottomBodySection';
import Footer from './Compoents/Footer';
import RegistrationPage from './Compoents/RegistrationPage';

function App() {

return (
    <BrowserRouter >
      <Routes>
          <Route exact path='/' element={
            <>
              <div><TopNavbar /></div>
              <div>
              <TopBodySection />
              </div>
              <div>
                <MiddleBodySection />
              </div>
              <div>
                <BottomBodySection />
              </div>
              <div>
                <Footer />
              </div>
            </>
          }></Route>
          
          <Route exact path='/registration' element={<RegistrationPage />}></Route>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
