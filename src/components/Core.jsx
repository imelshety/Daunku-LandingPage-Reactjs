/* eslint-disable react/no-unescaped-entities */
import FadeIn from "./FadeIn"
import img1 from "/assets/core1.svg"
import img2 from "/assets/core2.svg"
import img3 from "/assets/core3.svg"
import img4 from "/assets/core4.png"

import mainImg from "/assets/image-four.svg"
const Core = () => {
    return (
        <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
            <FadeIn delay={0.2} direction="down">
                <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
                    How to care for plants
                </h1>
            </FadeIn>
            <FadeIn delay={0.4} direction="down">
                <p className="text-[#4F4F4F] text-center text-lg mb-12">
                    Take care of plants with all your heart</p>
            </FadeIn>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex flex-col gap-8 items-start">
                    <FadeIn delay={0.2} direction="left">
                        <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                            <img
                                src={img1}
                                alt="core1"
                                className="h-[88px] w-[68px]"
                            />
                            <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium">
                                Adjust Lighting
                            </h3>
                            <p className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">
                                When caring for indoor plants, make sure the room temperature is neither too cold nor too hot
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="left">
                        <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                            <img
                                src={img2}
                                alt="core1"
                                className="h-[88px] w-[68px]"
                            />
                            <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium">
                                Don't water too often
                            </h3>
                            <p className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">
                                Watering ornamental plants indoors does not have to be done every day.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="left">
                        <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                            <img
                                src={img3}
                                alt="core1"
                                className="h-[88px] w-[68px]"
                            />
                            <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium">
                                Don't water too often
                            </h3>
                            <p className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">
                                Watering ornamental plants indoors does not have to be done every day.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="left">
                        <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                            <img
                                src={img4}
                                alt="core1"
                                className="h-[88px] w-[68px]"
                            />
                            <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium">
                                Fertilize regularly
                            </h3>
                            <p className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">
                                The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength                            </p>
                        </div>
                    </FadeIn>
                </div>
                <FadeIn delay={0.6} direction="right">
                    <img src={mainImg} alt="plants" />
                </FadeIn>
            </div>
        </div>
    )
}

export default Core