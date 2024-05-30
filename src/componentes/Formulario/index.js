import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [casa, setCasa] = useState('')



    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoMembroCadastrado({
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
        <section className="formulario">
            
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card dos membros das casas</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Nome do membro da casa" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Casa" 
                    itens={props.nomeCasas} 
                    valor={casa}
                    aoAlterado={valor => setCasa(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario