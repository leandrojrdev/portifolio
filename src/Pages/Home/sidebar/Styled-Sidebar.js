import styled from "styled-components";

export const SidebarContainer = styled.div`

    height: 100%;
    width: 12%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    box-shadow: 1px 5px 5px black;
    position: fixed;

    .logo{
        width: 100%;
        height: 20%;
        overflow-y: hidden;

        img{
            max-width: 200px;
            max-height: 200px;
        }
    }
            
    .menu{
        width: 100%;
        height: 35%;
        padding: 25% 0;
        overflow-y: hidden;

        nav{
            height: 100%;

            a{
                color: white;
                text-decoration: none;
                border-top: 1px solid #1b1b1b;
                height: 40px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px;
                cursor: pointer;
                
                h3{
                    font-size: 17px;
                    font-weight: 300 !important;
                    transition: .3s;

                    :hover{
                        color: rgb(255, 0, 64);
                    }
                }
            }
        }
    }

    .redes{
        margin-bottom: 30px;
        width: 70%;
        height: 10%;
        font-size: 1.3em;
        justify-content: space-around;

        a{
            text-decoration: none;
            color: white;

            svg:hover{
                transition: 0.3s;
                color: rgb(255, 0, 64);
                cursor: pointer;
            }
        }
    }
`;