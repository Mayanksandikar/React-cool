
import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { ArticleContext } from './ArticleContext'

const Article = () => {
    const[article,setArticle]=useContext(ArticleContext);
    const art=article;
    const {ids}=useParams();
  return (
    <div>
        <h1 className='heading' style={{marginLeft:'25%'}}>{art[ids-1].title}</h1>
        <div className='divContainerArticle' style={{ backgroundImage: "url(" + `${art[ids-1].image}` + ")",height:'600px'}}>
        </div>
        <p style={{marginLeft:'25%',fontSize: '25px',marginRight:'37%', textAlign:'left'}}>{art[ids-1].text}</p>
    </div>
  )
}

export default Article