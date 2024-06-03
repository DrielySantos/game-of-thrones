import { IoIosCloseCircle, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import './Membro.css'

const Membro = ({ membro, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar(){
        aoFavoritar(membro.id);
    }

    const propsfavorito ={
        size: 25,
        onClick: favoritar
    }

    return (
    <div className="membro">
        <IoIosCloseCircle 
            size={25} 
            className="deletar" 
            onClick={ () => aoDeletar(membro.id)} 
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={membro.imagem} alt={membro.nome} />
        </div>
        <div className="rodape">
            <h4>{membro.nome}</h4>
            <h5>{membro.cargo}</h5>
            <div className="favoritar">
                {membro.favorito 
                    ? <IoIosHeart {...propsfavorito} color='#ff0000'/>
                    : <IoIosHeartEmpty{...propsfavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Membro