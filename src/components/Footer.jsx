
const Footer = () => {
    return (
        <div className="bg-[linear-gradient(133deg,_#566270_0%,_#283444_100%)]">
            <div className="max-w-[1490px] mx-auto px-10 py-[120px]">
                <div className="flex flex-col items-center xl:items-start xl:flex-row xl:justify-between gap-12">
                    <div className="w-full xl:w-auto flex flex-col items-center xl:items-start">
                        <h2 className="text-white text-center xl:text-start font-medium text-3xl lg:text-[32px]">
                            Newslatter
                        </h2>
                        <div className="relative w-full xs:w-[380px] xl:w-[320px] mt-11">
                            <input
                                type="text"
                                placeholder="Email"
                                className="rounded-full w-full pl-6 pr-[140px] py-4 bg-primary outline-none text-white text-base
                  xs:text-lg placeholder-white"
                            />
                            <div
                                className="absolute top-2/4 -translate-y-2/4 right-3 bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] px-6 py-2.5 rounded-full
                cursor-pointer text-white"
                            >
                                Subscribe
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 w-full">
                        <div className="flex flex-col xs:flex-row gap-12 w-full md:w-auto">
                            <div
                                className="text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto"
                            >
                                <h4 className="text-center">Support</h4>
                                <ul className="flex flex-col items-center gap-4 mt-8">
                                    <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                                        About Us
                                    </li>
                                    <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                                        Careers
                                    </li><li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                                        Blog
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto"
                            >
                                <h4 className="text-center">Useful Link</h4>
                                <ul className="flex flex-col items-center gap-4 mt-8">
                                    <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                                        Payment & Tax
                                    </li>
                                    <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                                        Team of service
                                    </li><li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                                        Privaci Policy
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto"
                            >
                                <h4 className="text-center">Our Menu </h4>
                                <ul className="flex flex-col items-center gap-4 mt-8">
                                    <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                                        Best Product
                                    </li>
                                    <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                                        Category
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="text-white max-w-screen-md md:max-w-[340px] flex-1 md:flex-auto"
                            >
                                <h4 className="text-center"> Address</h4>
                                <ul className="flex flex-col items-center gap-4 mt-8">
                                    <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                                        Cairo,Egypt
                                    </li>
                                    <li className="font-medium text-sm md:text-base cursor-pointer text-center xl:text-start w-fit">
                                        elshetydev99@gmail.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white my-12" >

                    <h6 className="text-white text-center text-base lg:text-lg py-8">
                        &copy; ELSHETY - All rights reserved
                    </h6>
                </div>
            </div>
        </div >
    )
}

export default Footer