import NavLink from "./NavLink"
import Logo from "/assets/tabler_plant-2.svg";
import CartIcon from "/assets/cart-icon.svg"
// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import FadeIn from "./FadeIn";
const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <div className="relative w-full max-w-[1490px] flex 
        items-center justify-between pt-10 mx-auto px-10">
            <div className="flex items-center gap-2 text-white">
                <img src={Logo} alt="logo" />
                <h3 className="text-xl hidden md:block">Daunku</h3>
            </div>
            <ul className="hidden md:flex items-center justify-between gap-10 lg:gap-[68px]">
                <NavLink to="services">Services</NavLink>
                <NavLink to="products">Shop</NavLink>
                <NavLink to="reference">Reference</NavLink>
                <NavLink to="care">Care</NavLink>
                <div className="relative">
                    <img src={CartIcon} alt="cart-icon" className="w-8 cursor-pointer" />
                    <span className="w-5 h-5 rounded-full text-center bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] absolute top-0 -left-2 text-white text-sm">1</span>
                </div>
            </ul>

            <HiMenuAlt3
                size={30}
                className="block md:hidden cursor-pointer text-white"
                onClick={() => setShowMobileMenu((prev) => !prev)}
            />
            <div
                className={`block md:hidden w-full fixed ${!showMobileMenu ? "-top-[410px]" : "top-0"
                    } left-0 bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
            >
                <AiOutlineClose
                    size={25}
                    className="absolute top-5 right-5  text-white cursor-pointer"
                    onClick={() => setShowMobileMenu(false)}
                />
                <FadeIn delay={0.5} direction="right" padding fullWidth >
                    <ul className="pt-[60px] items-center flex flex-col gap-8">
                        <NavLink to="services" mobileMenu>
                            Services
                        </NavLink>
                        <NavLink to="products" mobileMenu>
                            Shop
                        </NavLink>
                        <NavLink to="reference" mobileMenu>
                            Reference
                        </NavLink>
                        <NavLink to="care" mobileMenu>
                            Care
                        </NavLink>
                        <div className="relative">
                            <img src={CartIcon} alt="cart-icon" className="w-8 cursor-pointer" />
                            <span className="w-5 h-5 rounded-full text-center bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] absolute top-0 -left-2 text-white text-sm">1</span>
                        </div>
                    </ul>
                </FadeIn>

            </div>
        </div>
    )
}

export default Navbar