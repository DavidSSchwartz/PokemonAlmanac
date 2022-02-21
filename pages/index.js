import HeaderBanner from "../components/HeaderBanner"
import fetchData from '../utils/api'
// import { ParallaxBanner } from 'react-scroll-parallax'

const Home = (props) => {
    return (
        <div 
            className = "main-background" 
        >
            
            <HeaderBanner 
                pokemon = {props.data}
            />
        </div>
    )
}

export async function getStaticProps(context) {
    let idsFirst9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let urlparams = idsFirst9.map(id => `pokemon/${id}`)
    let res = await fetchData(urlparams);
    return {
      props: {
          data: res
      },
    }
}

export default Home;