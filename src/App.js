import './App.css';
import { useState } from 'react';
import Header from './componentes/Topo';
import LandingPage from './componentes/Paginas/secaoMain';

function App() {
  const [ tema, setTema ] = useState(true);
    
    const alteraTema = () => {
        setTema(!tema)
    }

  return (
    <div className="App">
      <Header tema={tema} alteraTema={alteraTema}/>
      <LandingPage tema={tema}/>
    </div>
  );
}

export default App;
