import styled, { keyframes } from "styled-components";

const arrow01 = keyframes`
  50%{
    margin-top: 20vh;
  }
`

export const Section01Container = styled.div`

    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 16%;

    h1{
        margin-top: 30vh;
        padding-bottom: 50px;
        font-size: 55px;
        font-family: 'PT Sans Narrow', sans-serif !important;
        cursor: default;
        justify-content: flex-start;
        
        .nome{
            color: rgb(255, 0, 64)
        }

        span{
            position: relative;
            z-index: 2;
            transition: 0.5s;
            font-family: 'PT Sans Narrow', sans-serif !important;

            :hover{
                color: blue;
            }
        }

        span:hover{
            color: #08fdd8;
            font-size: 75px;
        }
    }

    .buttons{
        display: flex;
        justify-content: flex-start;

        button{
            width: 250px;
            height: 50px;
            margin-right: 30px;
            background-color: transparent;
            color: rgb(255, 0, 64);
            font-family: 'PT Sans Narrow', sans-serif !important;
            font-size: 1.2em;
            border-color: rgb(255, 0, 64);
            transition: 0.3s;
            position: relative;
            z-index: 22;
            overflow-y: hidden !important;
            cursor: pointer;

            ::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 0;
                height: 49px;
                background-color: rgb(255, 0, 64);
                transition: 0.3s;
                overflow-y: hidden !important;
                color: #1b1b1b !important;
                z-index: -1;
            
            }
            
            :hover:before{
                width: 100%;
            }

            :hover{
                position: relative;
                color: #1b1b1b !important;
            }
        }
    }

    .seta{
        margin-top: 25vh;
        width: 1px;
        background-color: white;
        height: 50px;
        border: 1px solid white;
        animation: ${arrow01};
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
     
        ::after{
            content: '';
            border-bottom: 2px solid white;
            border-right: 2px solid white;
            width: 10px;
            height: 10px;
            position: absolute;
            margin-top: 50px;
            rotate: 45deg;
            margin-left: -5px;
        }
    }

    .scroll{
        position: absolute;
        margin-top: 89vh;
        rotate: 90deg;
        margin-left: -71px;
        font-family: 'Roboto Condensed';
    }
`;