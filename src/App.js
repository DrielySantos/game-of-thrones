import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Casa from './componentes/Casa';
import Footer from './componentes/Footer';


function App() {

  const casas = [
    {
      nome: 'Stark - Os lobos do inverno',
      corPrimaria: '#edea08',
      corSecundaria: '#595252'
    },
    {
      nome: 'Lannister - O leão dourado do oeste',
      corPrimaria: ' #711414',
      corSecundaria: '#FFBA65'
    },
    {
      nome: 'Targaryen - O dragão com sede de sangue',
      corPrimaria: '#282121',
      corSecundaria: '#541414'
    },
    {
      nome: 'Tyrell - A rosa de raízes fortes',
      corPrimaria: '#C5BF3D',
      corSecundaria: '#3A5F39'
    }    

  ]

  const [membros, setMembros] = useState([])
  const aoNovoMembroAdicionado = (membro)=>{
    setMembros([...membros, membro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomeCasas={casas.map(casa => casa.nome)} 
                  aoMembroCadastrado={membro => aoNovoMembroAdicionado(membro)} 
      />

      {casas.map(casa => <Casa 
                            key           ={casa.nome} 
                            nome          ={casa.nome} 
                            corPrimaria   ={casa.corPrimaria} 
                            corSecundaria ={casa.corSecundaria} 
                            membros       ={membros.filter(membro => membro.casa === casa.nome)}
                            />
    
      )}

    <Footer />
    </div>
  )
}

export default App;
