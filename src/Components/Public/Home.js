import React, { useEffect, useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as JSONData from "./HomeJsonData";
// import { Link } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { CountryDataAction } from "../../Redux/actions/CountryAction";
import { useSelector } from "react-redux";
import axios from "axios";


const Home = () => {
  const dispatch = useDispatch();

  const [openIndex, setOpenIndex] = useState();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };


    const [responseData, setResponseData] = useState(null);

  const handleButtonClick = () => {
    const apiUrl = "https://onlinesim.herokuapp.com/";

    const requestData = {
      action: "GET_NUMBER",
      key: "123Uf3QI85BnvMNQoOAUAD76fc4",
      country: "usa",
      operator: "any",
      service: "vk",
    };

    axios
      .post(apiUrl, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle the response data here
        setResponseData(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  };


  return (
    <div className="md:py-12">
      <div className="weblogo container mx-auto">
        <div>
          <div className="weblogo">
            <div className="webimageshow">
              <img src={JSONData.HomeDataJson?.[0]?.img} />
            </div>
            <div className="webcontentshow">
              <h1>{JSONData.HomeDataJson?.[0]?.title}</h1>
              <p className="socialdescription datashow">
                {JSONData.HomeDataJson?.[0]?.socialDescription}
              </p>




  <button onClick={handleButtonClick}>
                Click me to make API requestrrrrrrrrrrrrrrrrrrr
              </button>
              <div className="groupbtnshow flex items-center gap-6 md:justify-center mt-8">
                {JSONData.HomeDataJson?.[0]?.buttons?.map((item, index) => (
                  <a href={item?.pageLink} key={index}>
                    <button className={item?.className}>{item?.label}</button>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <section className="center-section">
            <div className="container mx-auto md:p-4 md:my-6 space-y-2 text-center">
              <p className="socialdescription secvice">OUR SERVICES</p>
              <h2 className="mostpopularheading">Most Popular Services</h2>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {JSONData.MostpopularData?.map((item) => (
                <div className="flex flex-col items-center p-4">
                  <img className="my-4" src={item?.img} />
                  <h3 className="socialheading my-3 text-3xl font-semibold">
                    {item?.heading}
                  </h3>
                  <div className="text-center">
                    <p className="socialdescription">{item?.description}</p>
                    <button className="verifybtn">{item?.verifybtn}</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="features" className="center-section">
            <div className="container mx-auto md:p-4 md:my-6 space-y-2 text-center">
              <p className="socialdescription secvice">Our FEATURES</p>
              <h2 className="mostpopularheading">Developed for you</h2>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {JSONData.DevelopedData?.map((item) => (
                <div className="developeddata flex flex-col max-w-md sm:mx-auto sm:flex-row mt-4">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                      <img className="my-4" src={item?.img} />
                    </div>
                  </div>
                  <div>
                    <h3 className="socialheading my-3 text-3xl font-semibold">
                      {item?.heading}
                    </h3>
                    <p className="socialdescription develpoedicon developed">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div id="HowItWork" className="weblogo mt-15">
            <div className="webimageshow">
              <img src={JSONData?.ReciveSms?.[0]?.imageSrc} />
            </div>
            <div className="webcontentshow contnet">
              <p className="socialdescription secvice">
                {JSONData?.ReciveSms?.[0]?.serviceHeading}
              </p>

              <h1>{JSONData?.ReciveSms?.[0]?.title}</h1>
              <p className="socialdescription">
                {JSONData?.ReciveSms?.[0]?.contentDescription}
              </p>

              <section className="mt-8">
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {JSONData.ReciveSms?.[1]?.ServiceData?.map((item) => (
                    <div className="flex flex-col items-center">
                      <img className="my-" src={item?.img} />
                      <h3 className="socialheading mt-1 text-3xl font-semibold">
                        {item?.heading}
                      </h3>
                      <div className="text-center">
                        <p className="socialdescription selectservice">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <section id="FAQ" className="center-section">
            <div className="">
              <p className="socialdescription secvice text-center">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2 className="mostpopularheading frequently">
                Take a look at the most <br />
                asked questions.
              </h2>

              <div className="mt-12">
                <div className="accordion-container">
                  <div class="grid md:grid-cols-2 gap-4">
                    {JSONData?.accordionItems.map((item, index) => (
                      <div className="accordion-item">
                        <div
                          className="accordion-header"
                          // className={`accordion-header ${
                          //   openIndex === index ? "open" : ""
                          // }`}
                          // onClick={() => toggleAccordion(index)}
                        >
                          <h3 className="accodiantitle">{item.title}</h3>
                          {/* <div className="icon-container">
                          {openIndex === index ? <FaMinus /> : <FaPlus />}
                        </div> */}
                        </div>
                        <div
                          className="accordion-show"
                          // className={`accordion-show ${
                          //   openIndex === index ? "active" : "unactive"
                          // }`}
                        >
                          <p className="accordion-content">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="center-section1">
            <div class="grid md:grid-cols-2 grid-cols-1 md:gap-20 items-center">
              <div className="imagesliderhsow">
                <Slider {...settings}>
                  {JSONData?.ShowAllReviewData?.map((item, idx) => (
                    <img
                      className="sliderimageshow"
                      src={item?.imageUrl}
                      alt={`Image ${idx}`}
                    />
                  ))}
                </Slider>
              </div>

              <div>
                <img className="w-full" src="/img/starlogo.png" />
              </div>
            </div>
          </section>

          <section className="center-section">
            <div className="">
              <p className="socialdescription secvice text-center">COMMENTS</p>
              <h2 className="mostpopularheading frequently">
                Our Customer Reviews
              </h2>

              <div className="reviewbtnshow mt-12">
                <button className="reviews-btn">
                  See our reviews on{" "}
                  <img className="truestpilotimage" src="/img/Trustpilot.png" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
