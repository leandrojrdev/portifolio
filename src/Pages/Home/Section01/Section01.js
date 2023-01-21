import React from 'react'
import { Section01Container } from './styled-secao01'

import Sidebar from './Sidebar/Sidebar';
import MainContainer from './MainContainer/MainContainer';


export default function Section01() {
    return (
        <Section01Container>
            <Sidebar />
            <MainContainer/>
        </Section01Container>
    )
}
