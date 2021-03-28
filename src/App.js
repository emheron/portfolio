import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/NavBar';
import Header from "./components/Header";
import Particles from 'react-particles-js';


function App() {
  return (
      <>
        <Particles
            className="particles-canvas"
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 900
                  }
                },
                shape: {
                  type: "",
                  stroke: {
                    width: 6,
                    color: "#f9ab00"
                  }
                }
              }

            }}
        />
        <Navbar/>
        <Header/>
      </>
  );
};

export default App;
