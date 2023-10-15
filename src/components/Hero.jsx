import FadeIn from './FadeIn'
import Navbar from './Navbar'
import HeroImg from '/assets/background-1.jpg'
import searchIcon from '/assets/search-icon.svg'
const Hero = () => {
    return (
        <div
            className="w-full h-screen relative flex flex-col items-center"
            style={{
                background: `url(${HeroImg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <Navbar />
            <FadeIn delay={0.2} direction="down" padding fullWidth >
                <h1 className='text-white font-bold text-xl md:text-3xl lg:text-5xl max-w-[1050px] leading-tight text-center mt-12'>Bring Serenity to Your Place With Interior Plants</h1>
            </FadeIn>
            <FadeIn delay={0.4} direction="down" padding fullWidth>
                <p className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">
                    find your dream plant for you home decoration with us, and we will make it happen.
                </p>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" padding fullWidth>
                <div className="relative w-full xs:w-[460px] mt-11">
                    <input
                        type="text"
                        placeholder="Search"
                        className="rounded-full w-full pl-6 pr-[68px] py-4 bg-primary  text-white
              text-base placeholder-white"
                    />
                    <img
                        src={searchIcon}
                        alt="search"
                        className="absolute top-2/4 -translate-y-2/4 right-3 h-8 w-8 md:w-11 md:h-11 cursor-pointer rounded-full border bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)]"
                    />
                </div>
            </FadeIn>

        </div>
    )
}

export default Hero