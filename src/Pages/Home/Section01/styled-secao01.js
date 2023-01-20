import styled from "styled-components";



export const Section01Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-y: hidden;

    .sidebar{
        height: 100%;
        width: 12%;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: white;
        box-shadow: 1px 5px 5px black;
        position: relative;
        z-index: 22;

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
    }

    .mainContainer{
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
            font-family: 'Roboto Condensed', sans-serif;
            cursor: default;
            justify-content: flex-start;
           
            .nome{
                color: rgb(255, 0, 64)
            }

            span{
                position: relative;
                z-index: 2;
                transition: 0.5s;

                :hover{
                    color: blue;
                }
            }

            span:hover{
                color: rgb(0, 247, 255);
                font-size: 75px;
            }
        }

        .buttons{
            display: flex;
            justify-content: flex-start;

            button{
                width: 250px;
                height: 60px;
                margin-right: 30px;
            }
        }
        

    }
 
`;