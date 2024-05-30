import Membro from '../Membro'
import './Casa.css'

const Casa = (props)=>{
    const css = {backgroundColor: props.corSecundaria}
    const cssBorder = {borderColor: props.corPrimaria}

    return(
        (props.membros.length > 0) ? <section className='casa' style={css}>
            <h3 style={cssBorder}>{props.nome} </h3>
            <div className='membros'>
                {props.membros.map( membro => <Membro 
                                                    corDeFundo={props.corPrimaria}
                                                    key={membro.nome}
                                                    nome={membro.nome} 
                                                    cargo={membro.cargo} 
                                                    imagem={membro.imagem} />)}
            </div>
        </section>
        : ''
    )
}

export default Casa