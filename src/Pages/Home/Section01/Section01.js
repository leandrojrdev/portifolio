import React from 'react'
import { Section01Container } from './styled-secao01'


import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Section01({ logo }) {
    return (
        <Section01Container>
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
                        <Link to='/'><h3> </h3></Link>
                    </nav>
                </div>
                <div className='redes flex-class'>
                    <Link><FaGithub /></Link>
                    <Link><FaLinkedin /></Link>
                    <Link><FaInstagram /></Link>

                </div>
            </div>


            <div className="mainContainer">

                <h1 className=''>
                    <span>I</span>
                    <span>a</span>
                    <span>e</span>
                    <span>,</span><br></br>
                    <span>m</span>
                    <span>e </span>
                    <span>c</span>
                    <span>h</span>
                    <span>a</span>
                    <span>m</span>
                    <span>o </span>
                    <span className='nome'>Leandro</span>
                    <span>,</span><br></br>
                    <span>s</span>
                    <span>o</span>
                    <span>u </span>
                    <span>u</span>
                    <span>m </span>
                    <span>D</span>
                    <span>e</span>
                    <span>s</span>
                    <span>e</span>
                    <span>n</span>
                    <span>v</span>
                    <span>o</span>
                    <span>l</span>
                    <span>v</span>
                    <span>e</span>
                    <span>d</span>
                    <span>o</span>
                    <span>r </span>
                    <span>F</span>
                    <span>r</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>-</span>
                    <span>e</span>
                    <span>n</span>
                    <span>d</span>
                    <span>!</span>
                </h1>


                <div className='buttons flex-class'>
                    <button>A</button>
                    <button>B</button>
                </div>

            </div>

        </Section01Container>
    )
}
