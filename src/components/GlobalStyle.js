import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
      margin:0;
      padding:0;
      box-sizing: border-box;
  }
  html{
      &::-webkit-scrollbar{
          width: 0.5rem;
      }
      &::-webkit-scrollbar-thumb{
          background-color: darkgrey;
      }
      &::-webkit-scrollbar-track {
		background: white;
	}
  }
  body{
      font-family: 'Montserrat',sans-serif;
      width: 100%;
      background-color: #151515
  }
  h1{
      font-size: 3rem;

      color: white;
  }
  h2{
      font-size: 3rem;
      font-family:'Abril Fatface',cursive;
      font-weight: lighter;
      color: white;
  }
  h3{
      font-size: 1.3rem;
      padding: 1.5rem 0rem;
      color: white;
  }
  p{
      font-size: 1.2rem;
      line-height: 200%;
      color: white;
  }
  a{
      text-decoration: none;
      color: white;
  }
  img{
      display:block;
  }
  input{
        font-weight: bold;
		font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
