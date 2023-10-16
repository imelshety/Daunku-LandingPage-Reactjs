import FadeIn from "./FadeIn"
import img1 from "/assets/image-one.svg"
import img2 from "/assets/image-two.svg"
import img3 from "/assets/image-three.svg"

const Reference = () => {
    return (
        <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
            <FadeIn delay={0.2} direction="down">
                <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
                    Interior Plant Reference
                </h1>
            </FadeIn>
            <FadeIn delay={0.4} direction="down">
                <p className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
                    make your home so comfortable with refreshing plants
                </p>
            </FadeIn>

            <div className="flex flex-col md:flex-row md:justify-center gap-8">
                <FadeIn delay={0.2} direction="right">
                    <div className="flex flex-col gap-8">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                </FadeIn>
                <FadeIn delay={0.2} direction="left">
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}

export default Reference