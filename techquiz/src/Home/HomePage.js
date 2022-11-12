import img1 from './Img/teste2.jpg'
import rc from './Img/RedesComputadores.png'
import logo2 from './Img/TechquizBlack.png'
import cb from './Img/ConceitosBasicos.png'
import asi from './Img/AdministracaoSistemasInformaticos.png'
import p from './Img/Programacao.png'
import './Home.css'

const HomePage = () => {
    return ( 
        <div className='container'>
            <div class="flex-container">

                <div class="flex-child">
                    <img className='Logo' src={logo2}/>
                    <p className='intro'>Com o Techquiz pode avaliar o  seu conhecimento e saber <br/>o seu nível em todas as diversas áreas de informática.</p>
                </div>
  
                <div class="flex-child">
                    <img className='banner' src={img1}/>
                </div>
            </div>

            <div class="grid-container">

            <div class="grid-child">
                <img className='cb' src={cb}/>
                <p className='titulo'>Conceitos Básicos</p>
            </div>

            <div class="grid-child">
                <img className='rc' src={rc}/>
                <p className='titulo'>Redes de Computadoress</p>
            </div>

            <div class="grid-child">
                <img className='asi' src={asi}/>
                <p className='titulo'>Administracao Sistemas<br/>Informaticos</p>
            </div>

            <div class="grid-child">
                <img className='p' src={p}/>
                <p className='titulo'>Programacao</p>
            </div>
  
            </div>
        </div>
        
     );
}
 
export default HomePage;