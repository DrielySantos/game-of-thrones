import Membro from '../Membro'
import './Casa.css'
import hexToRgba from 'hex-to-rgba';

const Casa = ({ casa, membros, aoDeletar, mudarCor, aoFavoritar }) => {
    return (

        membros.length > 0 && <section className='casa' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(casa.cor, '0.6')}}>
            <input onChange={evento => mudarCor(evento.target.value, casa.id)} value={casa.cor} type='color' className='input-cor' />
            
            <h3 style={{ borderColor: casa.cor }}>{casa.nome}</h3>

            <div className='membros'>
                {membros.map((membro, indice) => {
                    return <Membro key={indice} membro={membro} corDeFundo={casa.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar}/>

                    })
                }
            </div>
        </section>
    )
}
export default Casa
