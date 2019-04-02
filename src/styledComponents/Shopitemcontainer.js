import styled from 'styled-components';
import slide from './keyframes/slide';

const Shopitemcontainer = styled.div`
position: relative;
border: 1px solid #ccc;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
padding: 10px;
margin: 10px;
animation: ${slide} 1s ease-in-out;
border-radius: 2px;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-content: center;
width: calc(50% - 45px);
@media (max-width: 700px) {
  width: 100%;
}
`;

export default Shopitemcontainer