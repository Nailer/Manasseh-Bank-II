import React from "react";
import styles, { layout } from "../style";

import { apple, bill, google } from "../assets";
const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* self closing div for adding gradient of white and pink color */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          {" "}
          We make both the spending <br className="sm:block hidden" />and investing easier simultaenously.
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Start upgrading your finances today with our user-friendly platform.
          For the restrictions from agencies, we receive driver's license and social security number. Rest assured, your information is protected with the latest
          security measures.
        </p>

        {/* for Google and Apple app store images */}
        
      </div>
    </section>
  );
};

export default Billing;
