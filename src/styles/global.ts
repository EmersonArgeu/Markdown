import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme.black};
        -webkit-font-smoothing: antialiased;

    }

    body, input, textarea, button{
        font-family: 'Martian Mono', monospace;
        font-weight: 400;
        font-size: 1rem;
    }

`
