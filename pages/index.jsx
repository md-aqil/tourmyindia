import Layout from "../src/components/layouts/app";
import Banner from "../src/components/home/banner";
import { useTheme } from "../src/theme";
export default function Home(props) {
    const theme = useTheme();
    const handleChangeTheme = () => {
        if (document.body.classList.add('dark')) {
            document.body.classList.remove('dark')
        } else {
            document.body.classList.add('dark')
        }
    }
    return (
        <Layout>
            <button onClick={() => theme.changeColor('dark')}>Dark</button>
            <Banner />
            { theme.color }
        </Layout>
    )
}