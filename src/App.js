import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './Compoents/Navbar';
import TopBodySection from './Compoents/TopBodySection';
import { useEffect } from 'react';
import MiddleBodySection from './Compoents/MiddleBodySection';
import BottomBodySection from './Compoents/BottomBodySection';
import Footer from './Compoents/Footer';


function App() {

  const showData = (data)=>{
    console.log(data.services)
  }
  useEffect(()=>{
    fetch("Data.json",{
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    .then((response) =>{ 
      return response.json()
    })
    .then(data => showData(data))
  })

  return (
    <div className="App">
      <div>
        <TopNavbar />
      </div>
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
      
    </div>
  );
}

export default App;
