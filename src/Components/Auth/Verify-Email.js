import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VerifyEmailAction } from "../../Redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { validations } from "../../utils";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { screen } from "@testing-library/react";
import LoaderSpinner from "../Loader/Loader-spinner";
function VerifyEmail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { decodedID } = useParams();
  const [render, setRerender] = useState(true);

  const shouldLog = useRef(true);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      dispatch(VerifyEmailAction(decodedID));
    }
    setRerender(true);
  }, []);

  const {
    success,
    error,
    message,
    loading: verifyLoading,
  } = useSelector((state) => state.VerifyEmailReducer);

  useEffect(() => {
    if (success && render) {
      swal({
        title: " Complete",
        text: message,
        className: "successAlert",
        icon: "/img/1111.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
    }

    if (error && render) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/1111.png",
        buttons: false,
        timer: 5000,
      });
      setRerender(false);
    }
  }, [success, error]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading || verifyLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <div class="min-h-screen md:bg-[#111111] text-gray-900 flex justify-center py-12">
            <div class="max-w-screen-xl m-0 sm:m-20 bg-white md:shadow sm:rounded-lg flex justify-center flex-1">
              <div className="m-auto  md:w-6/12 md:px-0 px-4">
                <div class="xl:max-w-screen-sm">
                  <div class="md:py-12  flex justify-center lg:justify-start lg:px-12">
                    <div class="cursor-pointer flex items-center">
                      <div>
                        <svg
                          class="w-10 text-indigo-500"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 225 225"
                        >
                          <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                            <g>
                              <path
                                id="Layer0_0_1_STROKES"
                                class="st0"
                                d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
                        <img className="w-[200px]" src="/img/1111.png" />
                      </div>
                    </div>
                  </div>
                  <div class="md:px-12">
                    <h2
                      class="text-center md:text-4xl text-xl text-indigo-900 font-display font-semibold lg:text-left xl:text-2xl
      xl:text-bold"
                    >
                      Welcome to Logo Here.
                      <br /> Your email has been confirmed.
                    </h2>
                    <div class="mt-12">
                      <div class="mt-2">
                        <Link to="/login">
                          <button
                            type="submit"
                            class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg"
                          >
                            Log In
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-1 text-center hidden lg:flex">
                <div
                  class="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default VerifyEmail;
