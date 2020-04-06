import React from 'react';
import './styles.css';

const HabilidadeLinguagens = [
    {
        Habilidade:[
            "JavaScript", 
            "Python",
            "C++",
            "VBA",
            "Fortran" 
        ]
    },
];

const Frameworks = [
    { 
        Frameworks:
            "react.js"            
    },
];

const GerenciamentoProjeto = [
    { 
        GerenciamentoDeProjetos: [
            "Readmine" ,
            "Ms Project"
        ]
    },
];

const ControleVersao = [
    { 
        ControleDeVersao: [
            "SVN",
            "Git" 
        ]
    },
];

const DesenvolvimentoFluxograma = [
    {
        DesenvolvimentoFluxograma: [ 
            "Draw.io",
            "Bizagi"
        ]  
    },
];

const Prototipagem = [
    {
        Prototipagem: [ 
            "Figma"
        ]  
    },
];

const AnaliseProcesso = [
    { 
        AnaliseProcess: [
            "PCDA",
            "Seis Sigma", 
            "Fluxograma de Processa", 
            "Histograma",
            "Diagrama de Pareto",
            "Diagrama de Ishikawa",
            "Cartas de Controle",
            "Folha de Verificação",
            "Grafico de dispersão",
            "Controle Estatistico de Processos",
            "5W2H",
            "PDSA",
            "5S",
            "Seis Sigma"
        ]
    },
];

const SeisSigma = [
    {
        SigmaDetalhe:[
            "Preciso Detalhar"
        ]
    },
];

const FerramentaEstatistica = [
    {
        Estatistica: [ 
            "Minitab"
        ]  
    },
];

const SoftwareModelagem = [
    {
        Software: [ 
            "AutoCAD 2D",
            "AutoCAD 3D",
            "AutoDesk Inventor"
        ]  
    },
];


export default function Projects() {
    return (
        <div className="projects-container">
            <div className="content">
                <table>
                    <caption>Habilidades</caption>
                    <thead>
                        <tr>
                            <th>
                                <button type="button">Habilidades/Linguagens</button>
                            </th>
                            <th>
                                <button type="button">Frameworks</button>
                            </th>
                            <th>
                                <button type="button">Gerenciamento de Projetos</button>
                            </th>
                            <th>
                                <button type="button">Controle de Versão</button>
                            </th>
                        </tr>
                    </thead>
                </table>
                <table>
                    <caption>Habilidades</caption>
                    <thead>
                        <tr>
                            <th>
                                <button type="button">Desenvolvimento de Fluxograma</button>
                            </th>
                            <th>
                                <button type="button">Ferramentas da Qualidade</button>
                            </th>                 
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}

//export default function Projects() {
//    return (
//        <>
//            <ProductTable
//                products={[
//                    {id: 1, habilidade: 'JavaScript', Frameworks: 'react.js', GerenciamentoDeProjetos: 'Readmine', ControleDeVersao: 'SVN' }
//                ]}
//            />
//        </>
//    );
//}