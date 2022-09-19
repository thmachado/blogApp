import styled from "styled-components";
import { Link } from "react-router-dom";
import { InternProps } from "../../App";
import React, { useContext } from "react";
import { ContentContext } from "../../App";

export const ContentElement = styled.main`
    max-width: 700px;
    margin: 0px auto;
    padding: 24px 0px;
    width: 100%;

    ul, li{
        list-style: none;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    li{
        max-width: 300px;
        margin: 12px;
        transition: all 0.7s ease-in-out;

        a{
            text-decoration: none;
        }

        img{
            border-radius: 4px;
            max-width: 300px;
        }

        h2{
            color: black;
            font-size: 17px;
            text-align: center;
        }

        &:hover{
            transform: scale(1.04);
        }
    }
`

export default function Content() {

    const { content, setPage } = useContext(ContentContext);

    const handlePage = (slug: string) => {
        setPage(slug);
        localStorage.setItem("slug", slug);
    }

    const checkContent = (content: InternProps[]) => {
        if (content) {
            return (
                <ul>
                    {
                        content.map((element, index) => {
                            return (
                                <li key={index}>
                                    <Link to="/page" onClick={() => handlePage(element.slug)}>
                                        <img alt={element.yoast_head_json.og_title} src={element.yoast_head_json.og_image[0].url} />
                                        <h2>{element.title.rendered}</h2>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
    }

    return (
        <ContentElement>
            {checkContent(content)}
        </ContentElement>
    )
}