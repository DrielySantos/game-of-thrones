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
      nome: 'Targaryen - O dragão com sede de sangue',
      cor: '#541414'
    },
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
      nome: 'Tyrell - A rosa de raízes fortes',
      cor: '#3A5F39'
    },
  ]);
  
  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rhaenyra Targaryen',
      cargo: 'Filha do rei Viserys I Targaryen e herdeira aparente',
      imagem: 'https://i.pinimg.com/236x/8d/9c/d2/8d9cd2d93207304ac7fff99baf1ba38e.jpg',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Daemon Targaryen',
      cargo: '"Príncipe Canalha" e marido da princesa Rhaenyra Targaryen',
      imagem: 'https://i.pinimg.com/474x/73/e1/ee/73e1eeb2362143c33ed47dc4f09f7839.jpg',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rhaegar Targaryen',
      cargo: 'Filho mais velho de Aerys II, Príncipe de Pedra do Dragão',
      imagem: 'https://i.pinimg.com/564x/da/8d/85/da8d85fddd2cc39dabdfdd420132b50a.jpg',
      casa: casas[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Arya Stark',
      cargo: 'Terceira filha mais nova de Eddard e Catelyn Stark',
      imagem: 'https://i.pinimg.com/236x/e6/a3/e4/e6a3e4fea1129987212abd46785aff46.jpg',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Sansa Stark',
      cargo: 'Segunda filha e filha mais velha de Eddard e Catelyn Stark',
      imagem: 'https://i.pinimg.com/236x/96/76/9a/96769afb0cf1421189c04c7254d676cc.jpg',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ned Stark',
      cargo: 'Senhor de Winterfell e Protetor do Norte',
      imagem: 'https://i.pinimg.com/236x/dd/d8/53/ddd853788deaa7a077a1febc500fcc08.jpg',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Robb Stark',
      cargo: 'Filho mais velho de Ned e Catelyn, herdeiro de Winterfell',
      imagem: 'https://i.pinimg.com/236x/14/49/a5/1449a5236fc0cd686052006acd82b843.jpg',
      casa: casas[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jaime Lannister',
      cargo: 'Membro da Guarda Real',
      imagem: 'https://i.pinimg.com/236x/de/e4/ee/dee4ee8244518487c5b64227e0451dce.jpg',
      casa: casas[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cersei Lannister',
      cargo: 'Rainha dos Sete Reinos, irmã gêmea de Jaime',
      imagem: 'https://i.pinimg.com/564x/42/cc/09/42cc091cf7e0ae98d1634695cbff3e9d.jpg',
      casa: casas[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Tyrion Lannister',
      cargo: 'Mão do Rei e Mestre interino da Moeda',
      imagem: 'https://i.pinimg.com/236x/af/2f/6c/af2f6cdb21aae02f1b0b6293e11db8a2.jpg',
      casa: casas[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Tywin Lannister',
      cargo: 'Patriarca, Senhor de Rochedo Casterly, Guardião do Oeste',
      imagem: 'https://i.pinimg.com/236x/4f/75/bc/4f75bc5adb072e9258f4ed8ef32a0032.jpg',
      casa: casas[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mace Tyrell',
      cargo: 'Patriarca, Senhor de Jardim de Cima, Protetor do Sul',
      imagem: 'https://i.pinimg.com/236x/cd/5c/d7/cd5cd7feae88a9f073efa7b01ab57335.jpg',
      casa: casas[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Olenna Tyrell',
      cargo: 'Mãe de Mace, conhecida como Rainha dos Espinhos',
      imagem: 'https://i.pinimg.com/236x/e4/a4/be/e4a4be977a58d137f6addc9574789547.jpg',
      casa: casas[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Loras Tyrell',
      cargo: 'Filho de Mace, herdeiro da Casa Tyrell',
      imagem: 'https://i.pinimg.com/236x/fc/46/94/fc4694aeb9fed16f8b9a4b685127d9e2.jpg',
      casa: casas[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Margaery Tyrell',
      cargo: 'Filha de Mace e esposa de Renly Baratheon',
      imagem: 'https://i.pinimg.com/236x/be/c7/6e/bec76eea26cad7e1d00240bed5ca66cd.jpg',
      casa: casas[3].nome
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