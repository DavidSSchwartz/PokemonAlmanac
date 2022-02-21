import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax';

const BannerPokemon = ({ pokemon }) => {

    const moveRight = {translateX: ['0', '100%']};
    const moveLeft = {translateX: ['0', '-100%']};
    const growSmall = {scale: ['1', '2']};
    const growBig = {scale: ['1', '3']};
    const mainAnimation = (index) => {
        let animation;
        if ((index + 1) % 3 === 0)
            animation = growBig;
        else if (index === 0 || index % 3 === 0)
            animation = moveRight;
        else
            animation = {...moveLeft, ...growSmall};
        return animation
    }

    const displayPokemon = pokemon.map((poke, index) => {
                            return (
                                <Parallax 
                                    key={index}
                                    opacity={['2','-1']}
                                    translateY = {['0','100']}
                                    speed={-100}
                                    {...mainAnimation(index)}
                                    style={{marginBottom: '10rem'}}
                                    startScroll={'100'}
                                >
                                    <Image
                                        src={poke.sprites.front_default}
                                        alt={poke.name}
                                        width={500}
                                        height={500}
                                    />
                                </Parallax>
                            )
                        });
    return (
        <div className = "margin-top-17">
            {displayPokemon}
        </div>
    )
}

export default BannerPokemon;