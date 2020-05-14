import React from 'react';
import styled from "styled-components";

import Title from '../../components/Title'
import Subtitle from '../../components/Subtitle'

import './styles.css';

export const Cards = styled.section`
  display: table;
  table-layout: fixed;
  max-width: 50%;
  flex-grow: 1;
  color: black;

  padding: 25px;
  background-color: gray;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1) ;
  border-radius: 20px;
  margin-left:14px

`;

export const Strong = styled.strong`
color: var(--color-zero);
font-size: 1.5em;

`;


export default function Resume () {
    return (
        <div className="resume-container" >            
            <Cards>
                <Strong>ABOUT</Strong>
                <Title content={"Wanderson Henrique dos Santos"}/>
                <Subtitle content={"teste"} />
                <p>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised 
                    in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
            </Cards>
            <Cards>
                <Strong>WORK EXPERIENCE</Strong>
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
                <Strong>SKILLS</Strong>
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
               <Strong>EDUCATION</Strong>
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