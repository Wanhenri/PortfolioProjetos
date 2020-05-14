import React from 'react';
import styled from "styled-components";

import Title from '../../objects/Title'
import Subtitle from '../../objects/Subtitle'

import './styles.css';

export const Cards = styled.section`
  display: table;
  table-layout: fixed;
  max-width: 90%;
  flex-grow: 1;
  color: black;
  margin-bottom: 12px;

  padding: 25px;
  background-color:#ffffff;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1) ;
  border-radius: 20px;
  margin-left:14px
`;

export const Strong = styled.strong`
color: #444444;
font-size: 1.5em;
`;

const Text = styled.p`
  color: #6B6B6B;
  font-size: var(--size-very-big);
  line-height: 1.1em;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #2e2e33;
  margin-bottom:20px;
  text-align: justify
  
  
`;


export default function Blog () {
    return (
        <div className="blog-container" >            
            <Cards>
                <Strong>Aplicação da ferramenta Wgrib2 na manipulação de dados</Strong>
                <p>teste</p>
                <p>teste2</p>
                <Title content={"Wanderson Henrique dos Santos"}/>
                <Subtitle content={"teste"} />
                <Text>
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised 
                    in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum."
                </Text>
            </Cards>
            <Cards>
                <Strong>CDO e Wgrib2 para dados de GFS</Strong>
                <Title content={"Titulo de alguma coisa"}/>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one of the more 
                    obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                    going through the cites of the word in classical literature, 
                    discovered the undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC. This book is a 
                    treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s 
                    is reproduced below for those interested. Sections 1.10.32
                    and 1.10.33 from "de Finibus Bonorum et Malorum" 
                    by Cicero are also reproduced in their exact original 
                    form, accompanied by English versions from the 1914
                    translation by H. Rackham.
                </p>
                <Title content={"Titulo de alguma coisa"}/>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one of the more 
                    obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                    going through the cites of the word in classical literature, 
                    discovered the undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC. This book is a 
                    treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s 
                    is reproduced below for those interested. Sections 1.10.32
                    and 1.10.33 from "de Finibus Bonorum et Malorum" 
                    by Cicero are also reproduced in their exact original 
                    form, accompanied by English versions from the 1914
                    translation by H. Rackham.
                </p>
            </Cards>
            <Cards>
                <Strong>Skills conhecidas recentemente!</Strong>
                <Title content={"Titulo de alguma coisa"}/>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one of the more 
                    obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                    going through the cites of the word in classical literature, 
                    discovered the undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC. This book is a 
                    treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s 
                    is reproduced below for those interested. Sections 1.10.32
                    and 1.10.33 from "de Finibus Bonorum et Malorum" 
                    by Cicero are also reproduced in their exact original 
                    form, accompanied by English versions from the 1914
                    translation by H. Rackham.
                </p>
                <Title content={"Titulo de alguma coisa"}/>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one of the more 
                    obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                    going through the cites of the word in classical literature, 
                    discovered the undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC. This book is a 
                    treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s 
                    is reproduced below for those interested. Sections 1.10.32
                    and 1.10.33 from "de Finibus Bonorum et Malorum" 
                    by Cicero are also reproduced in their exact original 
                    form, accompanied by English versions from the 1914
                    translation by H. Rackham.
                </p>
            </Cards>
            <Cards>
               <Strong>Repertório de musica</Strong>
                <Title content={"Titulo de alguma coisa"}/>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one of the more 
                    obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                    going through the cites of the word in classical literature, 
                    discovered the undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC. This book is a 
                    treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s 
                    is reproduced below for those interested. Sections 1.10.32
                    and 1.10.33 from "de Finibus Bonorum et Malorum" 
                    by Cicero are also reproduced in their exact original 
                    form, accompanied by English versions from the 1914
                    translation by H. Rackham.
                </p>
                <Title content={"Titulo de alguma coisa"}/>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, 
                    making it over 2000 years old. Richard McClintock, a Latin professor
                    at Hampden-Sydney College in Virginia, looked up one of the more 
                    obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                    going through the cites of the word in classical literature, 
                    discovered the undoubtable source. Lorem Ipsum comes from sections 
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                    of Good and Evil) by Cicero, written in 45 BC. This book is a 
                    treatise on the theory of ethics, very popular during the Renaissance.
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s 
                    is reproduced below for those interested. Sections 1.10.32
                    and 1.10.33 from "de Finibus Bonorum et Malorum" 
                    by Cicero are also reproduced in their exact original 
                    form, accompanied by English versions from the 1914
                    translation by H. Rackham.
                </p>
            </Cards>
        </div>
        
    );
}