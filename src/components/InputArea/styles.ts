import styled from "styled-components";

export const Container = styled.div`
width: 80%;
background-color: white;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 10px;
margin: auto;
margin-bottom: 20px;
display: flex;
justify-content: space-around;
align-items: center;
`

export const InputDate = styled.input`
width: 110px;
height: 30px;
font-family: sans-serif;
border-radius: 10px;

`

export const SelectCategory = styled.select`
width: 120px;
height: 30px;
font-family: sans-serif;
border-radius: 10px;
`
export const InputTitle = styled.input`
width: 200px;
height: 30px;
border-radius: 10px;
padding-left: 10px;
`
export const InputValue = styled.input`
width: 100px;
height: 30px;
border-radius: 10px;
padding-left: 10px;
`
export const Button = styled.button`
background-color:#7FFFD4;
width: 200px;
height: 40px;
border-radius: 10px;
cursor: pointer;
font-family: sans-serif;
font-weight: 700;
transition: all 0.5s;

:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);

}

`


