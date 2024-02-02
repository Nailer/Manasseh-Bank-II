import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          We make your finances sour high
          <br className="sm:block hidden" />
          with few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We set the gears of your finances in your hands by offering 0% commission in transaction, periodic increase in capital, secure and end-to-end encrypted information and transaction.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
