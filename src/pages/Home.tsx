import Header from "../components/Header";
import Content from "../components/Home/Content";
import { BlogLayout } from "../components/Home/Layout";

export default function Home() {
    return (
        <BlogLayout>
            <Header />
            <Content />
        </BlogLayout>
    )
}