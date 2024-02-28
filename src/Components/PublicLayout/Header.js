import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import * as HeaderJSONData from "../PublicLayout/LayoutJson";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        // className="nonstickyheader text-gray-600 body-font"
        className={
          isSticky
            ? "stickyheader top-0 bg-white shadow-xl z-10"
            : "nonstickyheader"
        }
      >
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a href="/" className="companylogo">
            <img
              src={
                HeaderJSONData?.HeaderJSon?.[0]?.HeaderLogo?.webLogoShow
                  ?.imageSrc
              }
              alt="Company Logo"
            />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:mt-0 mt-6">
            <ScrollLink
              to="features"
              smooth={true}
              duration={900}
              className="headeroption mr-5"
            >
              Features
            </ScrollLink>
            <ScrollLink
              to="HowItWork"
              smooth={true}
              duration={900}
              className="headeroption mr-5"
            >
              How It Work
            </ScrollLink>
            <ScrollLink
              to="FAQ"
              smooth={true}
              duration={900}
              className="headeroption mr-5"
            >
              F.A.Q
            </ScrollLink>
            <a href="/blog" className="headeroption md:mr-5">
              Blog
            </a>
            <a
              href="/login"
              className="headeroptionbtn md:mr-5 "
            >
              {
                HeaderJSONData?.HeaderJSon?.[0]?.HeaderLogo?.customerPanelLink
                  ?.text
              }
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
