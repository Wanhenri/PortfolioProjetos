import React from 'react';
import styled from "styled-components";

import Title from '../../objects/Title'
import Subtitle from '../../objects/Subtitle'
import { Text } from '../../objects/Text'
import { Strong } from '../../objects/Strong'
import { Cards } from '../../objects/Cards'

import './styles.css';

const logo = require("../../img/Bragdocument/barco.jpeg");

const Container = styled.section`
  width: 80%;
  height: 28vw;
  background-size: cover;
  background-image: url(${logo});
  opacity: 0.8;
  transition: filter 0.2s;

  &:hover  {
    filter: brightness(90%);
    transition: 0.1s ease-out;
  }  
`;

const Wrapper = styled.div`
  position: relative;
  top: 40%;
  text-align: center;
`;

const StrongBragDocument = styled.strong`
    color: #FFFF;
    font-size: 2.625em;
    line-height: 3.125rem;
`;

export const TextBragDocument = styled.p`
    color: #FFFF;
    font-size: 16px;
    margin-top: 23px;
`;

export default function BragDocument () {
    return (
        <div>
        <Container>
            <Wrapper>
                <StrongBragDocument>BRAG DOCUMENT</StrongBragDocument>
                <TextBragDocument>TESTE</TextBragDocument>
            </Wrapper>
        </Container>
        <Cards>
        <Strong>2019</Strong>
        <div className="bragdocument-container" > 
        <Cards style={{maxWidth:'400px'}}>
                <Strong>Goals for this year</Strong>
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
            <Cards style={{maxWidth:'400px'}}>
                <Strong>Goals for next year</Strong>
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
                <Strong>Projects</Strong>
                <p>Mes, dia e ano</p>
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
                <Strong>Collaboration & mentorship</Strong>
                <Title content={"Titulo de alguma coisa"}/>
                <Text>  
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
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
                </Text>
                <Title content={"Titulo de alguma coisa"}/>
                <Text>  
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
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
                </Text>
            </Cards>
            <Cards>
                <Strong>Design & documentation</Strong>
                <Title content={"Titulo de alguma coisa"}/>
                <Text>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
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
                </Text>
                <Title content={"Titulo de alguma coisa"}/>
                <Text>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
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
                </Text>
            </Cards>
            <Cards>
               <Strong>Company building</Strong>
                <Title content={"Titulo de alguma coisa"}/>
                <Text>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
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
                </Text>
                <Title content={"Titulo de alguma coisa"}/>
                <Text>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
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
                </Text>
            </Cards>
            <Cards>
               <Strong>What you learned</Strong>
                <Title content={"Titulo de alguma coisa"}/>
                <Text>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
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
                </Text>
            </Cards>
            <Cards>
               <Strong>Outside of work</Strong>
                <Title content={"Titulo de alguma coisa"}/>
                <Text>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
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
                </Text>
            </Cards>
            <Cards>
               <Strong>General prompts</Strong>
                <Title content={"Titulo de alguma coisa"}/>
                <Text>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. 
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
                </Text>
            </Cards>
        </div>  
        </Cards>
        </div>
    );
}