import React from 'react'
// import './app.css';
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            {/* <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="collapse navbar-collapse main" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active mainName">
                        <Link to='/Home' className="nav-link" href="#"><p className='text'>Home</p> <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item mainName">
                        <Link to='Category/Tourism'  className="nav-link" href="#"><p className='text'>Tourism</p></Link>
                    </li>
                    <li className="nav-item mainName">
                        <Link to='Category/Fitness'  className="nav-link" href="#"><p className='text'>Fitness</p></Link>
                    </li>
                    <li className="nav-item mainName">
                        <Link to='Category/Technology'  className="nav-link" href="#"><p className='text'>Technology</p></Link>
                    </li>
                    <li className="nav-item mainName">
                        <Link to='Category/Bollywood'  className="nav-link" href="#"><p className='text'>Bollywood</p></Link>
                    </li>
                    <li className="nav-item mainName">
                        <Link to='Category/Food'  className="nav-link" href="#"><p className='text'>Food</p></Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Main