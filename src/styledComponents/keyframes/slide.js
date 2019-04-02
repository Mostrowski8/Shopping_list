import {keyframes} from 'styled-components';

const slide = keyframes ` 
  from {margin-left: -100px; opacity: 0}
  to { transform: translateX(100); opacity: 1;}
`;

export default slide