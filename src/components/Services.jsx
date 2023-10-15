import FadeIn from './FadeIn'
import service1 from '/assets/service-1.svg'
import service2 from '/assets/service-2.svg'
import service3 from '/assets/service-3.svg'

const Services = () => {
    return (
        <div
            id="services"
            className=" w-full pb-10 max-w-[1490px] mt-28 mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 xs:justify-between">

            <FadeIn delay={0.2} direction="down">
                <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
                    <img
                        src={service1}
                        className="max-h-[84px] max-w-[84px]"
                        alt=""
                    />
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">
                            Free Shapping
                        </h3>
                        <h6 className="text-center lg:text-start text-base lg:text-lg text-fontGray font-medium">
                            No charge for each delivery
                        </h6>
                    </div>
                </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="down">
                <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
                    <img
                        src={service2}
                        className="max-h-[84px] max-w-[84px]"
                        alt=""
                    />
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">
                            Quick Payment
                        </h3>
                        <h6 className="text-center lg:text-start text-base lg:text-lg text-fontGray font-medium">
                            100% secure payment
                        </h6>
                    </div>
                </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="down">
                <div className="flex flex-col lg:flex-row gap-4 w-full items-center">
                    <img
                        src={service3}
                        className="max-h-[84px] max-w-[84px]"
                        alt=""
                    />
                    <div className="flex flex-col gap-1.5">
                        <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">
                            24/7 Support
                        </h3>
                        <h6 className="text-center lg:text-start text-base lg:text-lg text-fontGray font-medium">
                            Quick support
                        </h6>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}

export default Services