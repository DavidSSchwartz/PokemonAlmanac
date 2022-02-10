import Image from 'next/image'
import pokemonAlmanac from '../public/Pokemon-Almanac.png'

const HeaderBanner = () => {
    return (
        <div>
            <Image 
                src={pokemonAlmanac}
                alt="Pokemon Almanac"
                className="banner-text"
            />
        </div>
    )
}

export default HeaderBanner;