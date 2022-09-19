import Header from "../components/Header";
import { BlogLayout } from "../components/Home/Layout";
import PageContent from "../components/Page/Content";

export default function Page(){
    return(
        <BlogLayout>
            <Header />
            <PageContent />
        </BlogLayout>
    )
}