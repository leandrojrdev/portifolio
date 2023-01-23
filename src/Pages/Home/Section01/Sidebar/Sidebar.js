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
                <a href='https://github.com/leandrojrdev' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
                <a href='https://www.linkedin.com/in/leandrobernardo-/' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
                <a href='https://www.instagram.com/_leozinnx_/' target='_blank' rel="noopener noreferrer"><FaInstagram /></a>


            </div>
        </SidebarContainer>
    )
}
