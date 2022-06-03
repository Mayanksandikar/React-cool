import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ArticleContext } from './ArticleContext';

const Tourism = () => {

    const [article, setArticle] = useContext(ArticleContext);
    const art = article;
    console.log(article);
    return (
        <>
            <div className='main' style={{textDecoration: 'none'}}>
                {/* <div className='headcontainer'> */}


                {/* <div className='heading' style={{ width: '20%' }}>Top Posts<div className='line'></div></div> */}

                {/* </div> */}
                <div className='tcontainer'>
                    <div className='heading' style={{ width: '40%' }}>
                        Tourism
                        <div className='line'></div>
                    </div>
                    {article.filter((art)=>{
                        if(art.category==='Tourism'){
                            return art;
                        }
                    }).map((art) => (
                        // key={art.index}
                        <Link to={'/article/'+art.id} style={{ textDecoration: 'none', color:'black' }}  >
                       
                            {/* {const back=`${art.image}`} */}
                            <div className='tdiv1'>
                            
                                <div className='image' style={{ backgroundImage: "url(" + `${art.image}` + ")" }} >
                            
                                </div>
                                
                                <div className='articleshort'>
                                    {/* {article.title} */}
                                    <div style={{ fontSize: '35px', fontWeight: '900', textDecoration:'none' }}>{art.title}</div>
                                    <div style={{ fontSize: '15px' }}>{art.text}</div>
                                    <div className='date'>
                                        Tourism / {art.date}
                                    </div>
                                </div>
                            </div>
                        
                        </Link>
                    ))}
                </div>

                <div className='tcontainerA'>
                    <div className='heading' style={{ width: '250px' }}>Top Posts<div className='line'></div></div>
                    {article.filter((art)=>{
                        if(art.category==='Tourism'){
                            return art;
                        }
                    }).map((art) => (
                        // key={art.index}
                        <Link to={'/article/'+art.id} style={{ textDecoration: 'none', color:'black' }}  >
                            {/* {const back=`${art.image}`} */}
                            <div className='tdiv2'>

                                <div className='imageA' style={{ backgroundImage: "url(" + `${art.image}` + ")" }} >

                                </div>
                                <div className='articleshortA'>
                                    {/* {article.title} */}
                                    <div style={{ fontSize: '20px', fontWeight: '900' }}>{art.title}</div>
                                    {/* <div style={{ fontSize: '10px' }}>{art.text}</div> */}
                                    <div className='dateA'>
                                        Tourism / {art.date}
                                    </div>
                                </div>
                            </div>

                        </Link>
                    ))}
                    <div style={{border:'4px black solid', height:'400px', marginTop:'25px'}}> Advertisement</div>

                </div>
            </div>
        </>
    )
}

export default Tourism