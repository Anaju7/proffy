import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://static1.conquistesuavida.com.br/articles//4/56/84/@/18404-gente-que-da-prioridade-aos-sentimentos-article_gallery-2.jpg" alt="professor"/>
            <div>
                <strong>João manoel</strong>
                <span>Portugues</span>
                </div>
                </header>

                <p>amante da lingua portuguesa ensina a 7 anos 
                    <br/>
                    e muito querido por aulos e outros profissionais
                </p>

                <footer>
                    <p>Preço/Hora 
                        <strong>R$ 30,00</strong>
                    </p>
                    <button type="button">
                    <img src={whatsappIcon} alt=""/>
                    Entrar em contato
                    </button>
                </footer>  
    </article>
    )
}

export default TeacherItem;