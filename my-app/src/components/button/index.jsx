import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
    border: none;
    outline: none;
    background: #014421;
    color: #fff;
    padding: 5px 2em;
    font-size: 1.1rem;
    font-weight: normal;
    border-radius: 3px;
    cursor: pointer;
    transition: all 200ms ease-in-out;


    &:hover {
        background: #B11E16
    }

    &:focus {
        outline: none;
    } 

`;

export function Button(props) {
    return <ButtonWrapper>{props.children}</ButtonWrapper>;

}