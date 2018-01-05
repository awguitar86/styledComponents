import styled, { css } from 'styled-components';

const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: ${props => props.primary ? 'palevioletred' : 'white'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
    border: 2px solid palevioletred;
    width: 150px;
    height: 40px;
    font-size: 10pt;
`;


export default Button;