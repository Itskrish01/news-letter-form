import { useState } from "react";
import "./App.css";
import H1 from "./components/Typography/H1";
import Paragraph from "./components/Typography/Paragraph";
import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
import { useMediaQuery } from "react-responsive";
import SuccessPage from "./components/Modal/SuccessPage";
import { motion } from "framer-motion";

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 700 });
  const [success, setSuccess] = useState(false);

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
    } else if (!regex.test(email)) {
      setEmailError("Valid email required");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();

    // Submit the form if there are no errors
    if (emailError === "") {
      setIsLoading(true);
      // Simulating an async operation with setTimeout
      setTimeout(() => {
        // Perform form submission logic here
        console.log("Form submitted");
        setSuccess(true);
        setIsLoading(false);
      }, 2000); // Simulating a 2-second delay
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    validateEmail();
  };

  if (success) {
    return <SuccessPage enteredEmail={email} dismissMessage={setSuccess} />;
  }

  return (
    <div className="flex justify-center  items-center h-screen">
      <motion.div
        initial={{ opacity: 0, translateY: -20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3, delay: 0 }}
        exit={{ opacity: 0 }}
        className="bg-white w-full md:max-w-[900px] shadow-2xl md:h-auto h-screen flex flex-col-reverse md:p-5 justify-between md:flex-row md:items-center md:rounded-3xl"
      >
        <div className="md:px-10 my-10 md:pr-16 px-5 md:flex-[0.5]">
          <motion.div
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <H1 color={"#242742"}>Stay Updated!</H1>
          </motion.div>
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, translateX: -10 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <Paragraph
              color={"#242742"}
              mobileSize={"base"}
              desktopSize={"base"}
            >
              Join 60,000+ product managers receiving monthly updates on:
            </Paragraph>
          </motion.div>
          <ul className="mt-7 space-y-3">
            <motion.li
              initial={{ opacity: 0, translateX: -10 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {" "}
              <img
                src="/images/icon-list.svg"
                alt="Illustration Sign Up Desktop"
              />
              <Paragraph
                color={"#242742"}
                mobileSize={"base"}
                desktopSize={"base"}
              >
                Product discovery and building what matters
              </Paragraph>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, translateX: -10 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              {" "}
              <img
                src="/images/icon-list.svg"
                alt="Illustration Sign Up Desktop"
              />
              <Paragraph
                color={"#242742"}
                mobileSize={"base"}
                desktopSize={"base"}
              >
                Measuring to ensure updates are a success
              </Paragraph>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, translateX: -10 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="flex items-center gap-4"
            >
              {" "}
              <img
                src="/images/icon-list.svg"
                alt="Illustration Sign Up Desktop"
              />
              <Paragraph
                color={"#242742"}
                mobileSize={"base"}
                desktopSize={"base"}
              >
                And much more!
              </Paragraph>
            </motion.li>
          </ul>
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="mt-10"
          >
            <form onSubmit={handleSubmit}>
              <Input
                label={"Email address"}
                handleChange={handleChange}
                value={email}
                isLoading={isLoading}
                emailError={emailError}
                placeholder={"email@company.com"}
                validateEmail={validateEmail}
              />
              <Button type={"submit"}>Subscribe to monthly newsletter</Button>
            </form>
          </motion.div>
        </div>
        <img
          src={` ${
            isTabletOrMobile
              ? "/images/illustration-sign-up-mobile.svg"
              : "/images/illustration-sign-up-desktop.svg"
          } `}
          className="md:flex-[0.5] md:w-auto w-full"
          alt="Illustration Sign Up"
          width={350}
        />
      </motion.div>
    </div>
  );
}

export default App;
