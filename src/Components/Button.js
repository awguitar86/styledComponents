import styled, { css } from 'styled-components';

const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparant;
    color: palvioletred;
    border: 2px solid palevioletred;
    width: 150px;
    height: 40px;
    font-size: 10pt;

    ${props => props.primary && css`
        background: palevioletred;
        color: white;
    `}
`;

export default Button;