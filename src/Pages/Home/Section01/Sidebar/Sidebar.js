import React from 'react';
import { SidebarContainer } from './Styled-Sidebar';

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

import logo from '../../../../Images/logo.png'


export default function Sidebar() {
    return (
        <SidebarContainer>
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
        </SidebarContainer>
    )
}
