import React from 'react';
import { HomeContainer } from './Styled-Home';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from '../../Images/logo.png'

import { Link } from 'react-router-dom';

import useScript from './useScript'

export default function Home({ url }) {

    useScript(url)
    return (
        <HomeContainer>
            <div>
                <div className="secao01">
                    <div className="sidebar">
                        <div className='logo flex-class'>
                            <img src={logo} alt='' />
                        </div>
                        <div className='menu'>
                            <nav className='flex-column'>
                                <Link to='/'><h3>Sobre mim</h3></Link>
                                <Link to='/'><h3>Habilidades</h3></Link>
                                <Link to='/'><h3>Projetos pessoais</h3></Link>
                                <Link to='/'><h3>Contato</h3></Link>
                                <Link to='/'><h3></h3></Link>
                            </nav>
                        </div>
                        <div className='redes flex-class'>
                            <Link><FaGithub /></Link>
                            <Link><FaLinkedin /></Link>
                            <Link><FaInstagram /></Link>

                        </div>
                    </div>
                    <div className="mainContainer">

                        <canvas id="canvas"></canvas>

                    </div>
                </div>



                <div className="secao02"></div>
            </div>

        </HomeContainer>
    )
}
