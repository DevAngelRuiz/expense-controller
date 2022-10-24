import styled from "styled-components";


export const TableLine = styled.tr`

`

export const TableColumn = styled.td`

padding: 10px 0;

`

export const ColorCategory = styled.div<{ color: string }>`
display: inline-block;
padding: 5px; 
border-radius: 5px;
color: white;
background-color: ${props => props.color}; 

`

export const ColorPrice = styled.div<{color: string}>`
color: ${props => props.color}; 
font-weight: bold; 
font-size: 20px;
`