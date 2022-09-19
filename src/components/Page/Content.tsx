import styled from "styled-components";
import { InternProps } from "../../App";
import React, { useContext, useEffect, useState } from "react";
import { ContentContext } from "../../App";
import { Link } from "react-router-dom";

export const ContentElement = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 980px;
    margin: 0px auto;
    padding: 24px 20px;
    width: 100%;

    .backbutton{
        align-self: flex-end;
        background-color: black;
        border-radius: 4px;
        color: white;
        font-size: 17px;
        font-weight: 500;
        margin: 24px 0px 0px;
        text-decoration: none;
        padding: 12px 20px;
    }
`

export const InternElement = styled.div`
    display: flex;
    flex-direction: column;

    h2{
        margin: 12px 0px;
        text-align: center;
    }
`


export default function PageContent() {

    const { page } = useContext(ContentContext);
    const [intern, setIntern] = useState([]);

    useEffect(() => {

        async function fetchData(page: string | null) {
            const res = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${page}`);
            const data = await res.json();
            if (data) {
                setIntern(data);
            }
        }

        if (localStorage.getItem("slug")) {
            fetchData(localStorage.getItem("slug"));
        }
        else {
            fetchData(page);
        }

    }, [page])

    const checkIntern = (intern: InternProps[]) => {
        if (intern) {
            return (
                <>
                    {
                        intern.map((element, index) => {
                            console.log(element);
                            return (
                                <InternElement key={index}>
                                    <img alt={element.yoast_head_json.og_title} src={element.yoast_head_json.og_image[0].url} />
                                    <h2>{element.title.rendered}</h2>
                                    <div dangerouslySetInnerHTML={{ __html: element.content.rendered }}></div>
                                </InternElement>
                            )
                        })
                    }
                </>
            )

        }
    }

    return (
        <ContentElement>
            {checkIntern(intern)}
            <Link to="/" className="backbutton">Voltar</Link>
        </ContentElement>
    )
}