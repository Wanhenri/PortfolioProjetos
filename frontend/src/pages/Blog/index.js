import React from 'react';
import styled from "styled-components";
import { FaCalendarAlt, FaHeart, FaComments, FaShareAlt } from 'react-icons/fa';

import Title from '../../objects/Title'
import Subtitle from '../../objects/Subtitle'
import { Text } from '../../objects/Text'
import { Strong } from '../../objects/Strong'
import { Cards } from '../../objects/Cards'

import './styles.css';


export const DateBlogWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;
export const DateBlog = styled.p`
  color: #6B6B6B;
  font-size: var(--size-very-big);
  line-height: 1.1em;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px
`;

export const InfoBlogWrapper = styled.section`
    display: flex;
    padding-left: 30px;
    flex-direction: row;
`;

export const ReactionBlogWrapper = styled.section`
    display: flex;
    padding-left: 30px;
    justify-content: 'space-between'
    flex-direction: row;
    
`;

export default function Blog () {
    return (
        <div className="blog-container" >            
            <Cards>
                <Strong>Aplicação da ferramenta Wgrib2 na manipulação de dados</Strong>
                <InfoBlogWrapper>
                    <DateBlog><FaCalendarAlt size={26}  style={{paddingRight:'10px' }}/>Julho 21, 2020</DateBlog>
                    <DateBlog><FaComments size={26} style={{paddingRight:'10px' }}/>Comentários</DateBlog>
                </InfoBlogWrapper>
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
                <ReactionBlogWrapper>
                    <FaHeart size={26} color='red' />
                    <FaShareAlt size={26} color='blue'/>
                </ReactionBlogWrapper>
            </Cards>
             
                           
        </div>
        
    );
}