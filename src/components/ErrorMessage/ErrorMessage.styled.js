import styled from "styled-components";

const Error = styled.div `
    max-height: 250px;
    max-width: 200px;
    // display: flex;
    // flex-flow: row wrap;
    
    // grid-template-columns: 100px 50px 100px;
    // grid-template-rows: 80px auto 80px; 
    // grid-column-gap: 10px;
    // grid-row-gap: 15px;
    
    background-color: #373737;
`;

const Colored = styled.div `
    width: 100%;
    height: 5px;
    background-color: red;
`;

const Message = styled.div `
    text-decoration-color: #656565;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
`;

export {Error, Colored, Message}
