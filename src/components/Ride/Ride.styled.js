import styled from "styled-components";

const SingleRide = styled.div `
    max-height: 250px;
    max-width: 200px;
    // display: flex;
    // flex-flow: row wrap;
    
    // grid-template-columns: 100px 50px 100px;
    // grid-template-rows: 80px auto 80px; 
    // grid-column-gap: 10px;
    // grid-row-gap: 15px;
    
    background-color: ${props => (props.chosenRide ? "red" : "#373737")};
`;

const Colored = styled.div `
    width: 100%;
    height: 5px;
`;

const Zone = styled.div `
    text-decoration-color: #656565;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
`;

const Name = styled.div `
    text-decoration-color: #656565;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
`;

const Time = styled.div `
    text-decoration-color: #656565;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
`;

const Tickets = styled.div `
    text-decoration-color: #656565;
    font-size: 20px;
    font-family: "Times New Roman", Times, serif;
`;

const TimeSVG = styled.div `
    height: 20px;
`;

const TicketsSVG = styled.div `
    height: 20px;;
`;

export {SingleRide,Tickets,Time,TicketsSVG,TimeSVG, Colored, Name, Zone}
