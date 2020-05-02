import React from 'react';
import './styles.css';

import Etec from "../../img/About/etec_santana_de_castro.gif"
import Unitau from "../../img/About/unitau-logo-1.png"
import { FaUserGraduate } from 'react-icons/fa'
import { TiGroup, TiPin, TiCalendar } from 'react-icons/ti'
import { DiTerminal } from 'react-icons/di'
import { FaUserTie } from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

export default function About() {
    return (
        <div className="about-container">
        <div className="content">
            <section>
                <h1>Resumo de qualificações e trajetória de carreira</h1>
                <p>
                    Formado em Engenharia Mecânica e Técnico Mecânico, com Pós-Graduação em Engenharia da Qualidade 
                    Lean Seis Sigma e Certificação Green Belt. Já trabalhei durante 6 meses como Engenheiro Mecânico e 
                    Engenheiro de Qualidade Autônomo no desenvolvimento um Projeto de instalação do ar condicionado, depois 
                    em projetos e em projetos de Melhoria Continua. Trabalho há 4 anos no Instituto Nacional de Pesquisas Espaciais (INPE),
                     na Divisão de Modelagem e Desenvolvimento, na avaliação e validação do modelo numérico de previsão. </p>
                     <p>Principais atividades:</p> 
                     <ul>
                         <li>Dar suporte para os pesquisadores e tecnologistas</li>
                         <li>Simulações de Tempo e Clima utilizando algumas resoluções do modelo global de previsão numérica;</li>
                         <li>Resoluções:</li>
                         <ul>
                             <li>TQ299L64</li>
                             <li>TQ666L64</li>
                             <li>TQ0062L28</li>
                         </ul>
                         <li>Manipulação e tratamento dos dados</li>
                         <li>Geração de campos espaciais</li>
                         <li>Realização de análises estatísticas</li>
                     </ul>                      
            </section>
            <section>
                <h1>Formação</h1>
                <img 
                    src={Unitau} 
                    alt="Logo unitau"                                     
                    width="55" 
                    height="55" 
                />
                <h2>Universidade de Taubate</h2>
                                    
                <FaUserGraduate size={18}/><span> Pós-Graduação em Engenharia de Qualidade Lean Seis Sigma Green Belt</span>
                <p>alguma descrição do curso</p>
                <FaUserGraduate size={18}/><span> Engenharia Mecânica</span>
                <p>alguma descrição do curso</p>
                
                <img 
                    src={Etec} 
                    alt="Logo unitau"                                     
                    width="205" 
                    height="85" 
                />
                
                <h2>Etec Prof. José Sant'Ana de Castro</h2>
                <FaUserGraduate size={18}/><span> Técnico Mecânico</span>
                <p>alguma descrição do curso</p>
                
            </section>
            <section>
                <h1>Qualificações</h1>
                <FaUserTie size={38}/><span>Um pouco mais que seis meses de experiência na área de Engenharia</span><br />
                <DiTerminal size={38}/><span> Quatro anos de experiência com linguagens de programação</span><br />
                <TiGroup size={38}/><span>  Facilidade de trabalhar em equipe</span><br />           
                <GoMarkGithub size={38}/>
                    <span>
                        Desenvolvimento de duas ferramentas de plotagem e analise estatística, SCANPLOT e PrecAnalise, para dados de Precipitação (chuva)
                    </span><br />
                <TiPin size={38}/><span>Conhecimentos em Front-end, Análise de dados, Ferramentas de gestão e softwares de modelagem mecânica</span><br />
                <TiCalendar size={38}/><span>Elevada capacidade de organização e pro atividade.</span><br />
             
            </section>
        </div>
    </div>
    );
}