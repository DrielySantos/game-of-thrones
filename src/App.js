import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Casa from './componentes/Casa';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';

function App(){

  const [casas, setCasas] = useState([
    {
      id: uuidv4(),
      nome: 'Stark - Os lobos do inverno',
      cor: '#595252'
    },
    {
      id: uuidv4(),
      nome: 'Lannister - O leão dourado do oeste',
      cor: '#FFBA65'
    },
    {
      id: uuidv4(),
      nome: 'Targaryen - O dragão com sede de sangue',
      cor: '#541414'
    },
    {
      id: uuidv4(),
      nome: 'Tyrell - A rosa de raízes fortes',
      cor: '#3A5F39'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Driely Santos',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://i.pinimg.com/236x/a8/bd/f9/a8bdf9d1a4b642537e638b60e9d85dad.jpg',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Driely Santos',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://i.pinimg.com/236x/1c/6c/a2/1c6ca2eb3f902644ba5126ced4256c99.jpg',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Driely Santos',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://i.pinimg.com/236x/86/6a/c1/866ac11ed2462eab8c1c6e0c5f4f44bd.jpg',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Driely Santos',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://i.pinimg.com/236x/09/79/86/09798600e12c7ac22ab19ed4b43aa944.jpg',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Santos',
      cargo: 'Desenvolvedora de software',
      imagem: '',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Santos',
      cargo: 'Desenvolvedora de software',
      imagem: '',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Santos',
      cargo: 'Desenvolvedora de software',
      imagem: '',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Santos',
      cargo: 'Desenvolvedora de software',
      imagem: '',
      casa: casas[1].nome
    },
  ]

  const [membros, setMembros] = useState(inicial)

  function deletarMembro(id){
    setMembros(membros.filter(membro => membro.id !== id));
  }

  function mudarCorDaCasa(cor, id){
    setCasas(casas.map(casa => {
      if(casa.id === id){
        casa.cor = cor;
      }
      return casa;
    }));
  }

  function cadastrarCasa(novaCasa){
    setCasas([...casas, {...novaCasa, id: uuidv4()}])
  }

  function resolverFavorito(id){
    setMembros(membros.map(membro =>{
      if(membro.id === id) membro.favorito = !membro.favorito;
      return membro;
    }))
  }
    
  return(
    <div>
      <Banner />
      <Formulario
        cadastrarCasa={cadastrarCasa}
        nomeCasas={casas.map(casa => casa.nome)}
        aoMembroCadastrado={membro => setMembros([...membros, membro])}/>
      
      <section className='casas'>
        <h1>HOUSES</h1>
        {casas.map((casa, indice) =>
          <Casa
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDaCasa}
            key={indice} 
            casa={casa} 
            membros={membros.filter(membro => membro.casa === casa.nome)} 
            aoDeletar={deletarMembro}
          />
        )}

      </section>
      <Footer />
    </div>
  )
}

export default App;