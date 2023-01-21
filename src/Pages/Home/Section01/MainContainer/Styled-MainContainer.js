import styled from "styled-components";

export const StyledMainContainer = styled.div`
    width: 88%;
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10% 4%;

    h1{
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
`;