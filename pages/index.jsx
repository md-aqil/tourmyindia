import Layout from "../src/components/layouts/app";
import Banner from "../src/components/home/banner";
import { useTheme } from "../src/theme";
export default function Home(props) {
    const theme = useTheme();
   
    return (
        <Layout>
            <Banner />
        </Layout>
    )
}