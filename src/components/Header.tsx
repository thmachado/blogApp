import styled from "styled-components";

export const HeaderElement = styled.header`
    align-items: center;
    border-bottom: 1px solid #00000014;
    display: flex;
    justify-content: center;
    padding: 12px 20px;
`

export default function Header(){
    return(
        <HeaderElement>
            <h1>blogApp</h1>
        </HeaderElement>
    )
}