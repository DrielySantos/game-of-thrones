import './Membro.css'

const Membro = ({nome, imagem, cargo, corDeFundo})=>{
    const bannerCard = {backgroundColor: corDeFundo}
    return(
        <div className='membro'>
            <div className='cabecalho' style={bannerCard}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Membro