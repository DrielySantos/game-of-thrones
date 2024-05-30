import './Footer.css'

function Footer(){
    return(
        <footer className='footer'>
           <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/drielysantos/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin fa-2xl"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/DrielySantos" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                </li>
            </ul>
        </section>
        <section className='footer-logo'>
            <img src="../imagens/logo.png" alt="Logo Game of Thrones" />
        </section>
        <section>
            <p>
                Desenvolvido por Driely Santos.
            </p>
        </section>
        </footer>
    )
}

export default Footer