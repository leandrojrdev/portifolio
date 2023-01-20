import React from 'react';
import { HomeContainer } from './Styled-Home';
import logo from '../../Images/logo.png'


import useScript from './useScript'

import Section01 from './Section01/Section01';


export default function Home({ url }) {

    useScript(url)
    return (
        <HomeContainer>
            <Section01 logo={logo} />
            <canvas id="canvas"> </canvas>



            <div className="secao02">

            </div>
        </HomeContainer>
    )
}
