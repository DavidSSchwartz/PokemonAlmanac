import HeaderBanner from "../components/HeaderBanner"
import fetchData from '../utils/api'

const Home = (props) => {
    console.log(props.data)
    return (
        <div class = "main-background">
            <HeaderBanner />
        </div>
    )
}

export async function getStaticProps(context) {
    let res = await fetchData("pokemon", 30);
    return {
      props: {
          data: res
      }, // will be passed to the page component as props
    }
}

export default Home;