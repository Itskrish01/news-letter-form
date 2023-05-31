import React from "react";
import H1 from "../Typography/H1";
import Paragraph from "../Typography/Paragraph";
import Button from "../UI/Button";
import { motion } from "framer-motion";

const SuccessPage = ({ enteredEmail, dismissMessage }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -10 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0 }}
      className="flex justify-center items-center h-screen"
    >
      <div className="bg-white px-6 shadow-2xl md:max-w-[450px] w-full md:h-auto h-screen md:px-12 md:py-12 md:rounded-3xl">
        <div className="md:py-0 py-60">
          <motion.img
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            src="/images/icon-success.svg"
            className="h-12 w-12"
            alt="icon"
          />
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mt-7"
          >
            <H1 color={"#242742"}>Thanks for subscribing!</H1>
          </motion.div>
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <Paragraph
              color={"#242742"}
              mobileSize={"base"}
              desktopSize={"base"}
            >
              A confirmation email has been sent to{" "}
              <span className="font-bold">{enteredEmail}</span> Please open it
              and click the button inside to confirm your subscription.
            </Paragraph>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="mt-4 w-full"
        >
          <Button type={"button"} handleClick={() => dismissMessage(false)}>
            Dismiss message
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SuccessPage;
