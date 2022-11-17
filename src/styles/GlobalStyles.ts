import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@font-face{
    font-family: 'Roboto';
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    font-weight: 400;
    font-style: normal;
    }
    
    *{
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        max-width: 350px;
        }
        
        
    Header a{
        color: white;
        text-decoration: none;
        cursor: pointer;
    }

    Header a:hover{
        scale: 1.1;
    }
    
    Header{
        justify-content: space-between;
        padding: 0 2vw 0 2vw;
        box-shadow: -1px 12px 19px -9px rgba(0,0,0,0.28);
        -webkit-box-shadow: -1px 12px 19px -9px rgba(0,0,0,0.28);
        -moz-box-shadow: -1px 12px 19px -9px rgba(0,0,0,0.28);
    }
    
    
    
    
    
    `;