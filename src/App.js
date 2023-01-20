import { useState } from 'react';
import Header from './Components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entrada from './Components/MiApi'
import Navbar_aves from './Components/Navbar_aves'
import Footer_ave from './Components/Footer_ave';

function App() {

  const [valorBusqueda,setValorBusqueda] = useState(''); 
  return (
    <div className="App">
      <Navbar_aves></Navbar_aves>
      <Header setValorBusqueda={setValorBusqueda}></Header> {/*Mediante props se pasa para buscar en header*/}
      <Entrada valorBusqueda={valorBusqueda}></Entrada>
      <Footer_ave></Footer_ave>
    </div>
  );
}

export default App;
