import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import './app.css'
import { ArticleContext } from './ArticleContext';
const Home = () => {
  const [article, setArticle] = useContext(ArticleContext);
  const art = article;
  const { ids } = useParams();
  return (
    <>
      <div className='divContainer'>
        <Link to={'/article/' + art[0].id} className='div1' style={{ height: '600px' }}>
          <div className='div1' style={{ backgroundImage: "url(" + `${art[0].image}` + ")", height: '600px' }}>
            <h1 style={{ fontSize: '45px', fontWeight: '900', marginTop: '05px', color: 'white', textDecoration: 'none' }}>{art[0].title}</h1>

            <div className='date' style={{ fontSize: '25px', fontWeight: '900', marginTop: '5px', color: 'white' }}>
              Tourism / {art[0].date}
            </div>
          </div>
        </Link>
        <Link to={'/article/' + art[4].id} className='div2' style={{ backgroundImage: "url(" + `${art[4].image}` + ")" }}>
          <div className='div2' style={{ backgroundImage: "url(" + `${art[4].image}` + ")" }}>

          </div>
        </Link>
        <Link to={'/article/' + art[11].id} className='div3' style={{ backgroundImage: "url(" + `${art[11].image}` + ")" }}>
          <div className='div3' style={{ backgroundImage: "url(" + `${art[11].image}` + ")" }} >

          </div>
        </Link>


      </div>
      <div className='heading' style={{ marginLeft: '10%' }}>The Latest</div>
      <br></br>

      <div className='line' style={{ marginLeft: '10%' }}></div>


      <div className='divContainerLatest'>
      {article.filter((art)=>{
                        if(((art.id)%5)=='0'){
                            return art;
                        }
                    }).map((art) => (
        <Link to={'/article/' + art.id} style={{ textDecoration: 'none', color: 'black' }}  >
          <div className='image' style={{ backgroundImage: "url(" + `${art.image}` + ")", width: '350px',height:'200px',display:'block' }} >

          </div>

          <div className='articleshortHome' style={{marginLeft:'0px', textAlign:'left',width:'350px'}}>
            {/* {article.title} */}
            <div style={{ fontSize: '25px', fontWeight: '900', textDecoration: 'none',display:'block'}}>{art.title}</div>
            <div style={{ fontSize: '12px', display:'block' }}>{art.text}</div>
            
          </div>


        </Link>
        ))}
      </div>
    </>
  )
}

export default Home