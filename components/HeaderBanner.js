import Image from 'next/image'
import pokemonAlmanac from '../public/Pokemon-Almanac.png'
import BannerPokemon from './BannerPokemon';
import { useParallax } from 'react-scroll-parallax';
import BannerBackground from './BannerBackground';

const HeaderBanner = ({ pokemon }) => {
    const { ref } = useParallax({ opacity: ['3', '0'], speed: '-50'})

    return (
        <div className="banner-container">
            <BannerBackground />
            <div 
                className="banner-text margin-top-17"
                ref={ref}
            >
                <Image 
                    src={pokemonAlmanac}
                    alt="Pokemon Almanac"
                />
            </div>
            <BannerPokemon 
                pokemon = {pokemon}
            />
        </div>
    )
}

export default HeaderBanner;