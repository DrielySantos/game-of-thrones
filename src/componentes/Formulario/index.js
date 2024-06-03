import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({aoMembroCadastrado, nomeCasas, cadastrarCasa}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [casa, setCasa] = useState('')
    const [nomeCasa, setNomeCasa] = useState('')
    const [corCasa, setCorCasa] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        aoMembroCadastrado({
            nome,
            cargo,
            imagem,
            casa
        })
        setNome('')
        setCargo('')
        setImagem('')
        setCasa('')
    } 

    return(
        <section className="formulario-container">
            <form  className="formulario" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card dos membros das casas</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Nome do membro da casa" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <Campo 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Casa" 
                    itens={nomeCasas} 
                    valor={casa}
                    aoAlterado={valor => setCasa(valor)}
                />
                <Botao texto='Criar card' />
            </form>
            <form  className="formulario" onSubmit={(evento) =>{
                evento.preventDefault()
                cadastrarCasa({ nome: nomeCasa, cor: corCasa})
            }}>
                <h2>Preencha os dados para criar uma nova casa</h2>
                <Campo 
                    obrigatorio
                    label="Nome" 
                    placeholder="Digite o nome da casa" 
                    valor={nomeCasa}
                    aoAlterado={valor => setNomeCasa(valor)}
                />
                <Campo 
                    obrigatorio
                    type='color'
                    label="Cor" 
                    placeholder="Estilize a cor da casa" 
                    valor={corCasa}
                    aoAlterado={valor => setCorCasa(valor)}
                />
                <Botao texto='Criar uma nova casa' />
            </form>
        </section>
    )
}
export default Formulario