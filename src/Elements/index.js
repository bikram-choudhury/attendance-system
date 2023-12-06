import styled from "styled-components";

const ListItem = styled.li`
    position: relative;
    ${props => props.title ? `
        color: #333;
        font-size: 15px;
        font-weight: 500;
        padding: 12px 20px;
    `: ''}
`;

export {
    ListItem
}