import React from "react";
import styles from "../style";
import "../css/hero.css"
import { discount, robot } from "../assets";
import logo from "../assets/logoUse.png"
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="Hero"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* giving display flexStart because we want to show this div in left or first */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* discount offer div */}
        <div
          className="flex flex-row items-center py-[6px] px-4
          bg-discount-gradient rounded-[10px] mb-2 discount"
        >
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px] discount"
          />
          <p className={`${styles.paragraph} discount`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">3 Month</span> Account
          </p>
        </div>
        {/* main heading */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="text-white flex-1 font-poppins 
            font-semibold ss-text-[72px] text-[52px] ss:leading-[90px] leading-[75px]"
          >
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Banking</span>{" "}
          </h1>
          {/* get started button */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1
          className="text-white font-poppins 
            font-semibold ss-text-[65px] text-[52px] ss:leading-[90px] leading-[75px]"
        >
          {" "}
          Generation
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <b style={{color:"yellow "}}>Manasseh</b> is not just a bank, but also an investment company, providing dual services that sets us apart from our competitors. Our reach is not limited to our immediate locality, as we operate on a national scale, bringing our unique services to every corner of U.S.A.
        </p>
      </div>

      {/* Robot image div*/}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={logo}
          alt="biling"
          className="w-[100%] h-[100%] relative z-[5] logo-img"
        />

        {/* Gradient divs */}
        <div className=" absolute w-[40%] h-[35%] z-[0] top-0 pink__gradient" />
        <div className=" absolute w-[80%] h-[80%] z-[1] bottom-40 white__gradient" />
        <div className=" absolute w-[50%] h-[50%] right-20 bottom-20 z-[0]  blue__gradient" />
      </div>

      {/* Get Started  Component only shows in smaller devices 
      not in devices > width than 620px*/}
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
