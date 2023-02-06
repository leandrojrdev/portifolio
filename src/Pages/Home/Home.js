import React from 'react';
import { HomeContainer } from './Styled-Home';


import useScript from './useScript'

import Section01 from './Section01/Section01';
import Section02 from './Section02/Section02';
import Sidebar from './sidebar/Sidebar';


export default function Home({ url }) {

    useScript(url)
    return (
        <HomeContainer>
            <Sidebar />
            <Section01 />
            <canvas id="canvas"> </canvas>


            <Section02 />
            <div className="secao02">

            </div>
        </HomeContainer>
    )
}
