import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SetResetPasswordAction } from "../../Redux/actions/AuthAction";
import { validations } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import LoaderSpinner from "../Loader/Loader-spinner";

function ResetPassword() {
  const { token, uid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.authReducer);
  const [render, setRender] = useState(false);

  const {
    success,
    error,
    message,
    loading: ResetPassword,
  } = useSelector((state) => state.SetForgotPassworRedcuer);

  const [oldpassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [cNewpassword, setCnewPassword] = useState();
  const [errors, setErrors] = useState({
    newPassword: "",
    cNewpassword: "",
  });
  const handleUpdateSubmit = async () => {
    const formData = new FormData();
    formData.append("password", newPassword);
    formData.append("confirm_password", cNewpassword);
    formData.append("email", userData?.user?.email);

    dispatch(SetResetPasswordAction(formData, token, uid));
    setRender(true)
  };

  const validateSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {
      newPassword: validations.password(newPassword),
      cNewpassword: validations.confirmPassword(cNewpassword, newPassword),
    };
    setErrors(tempErrors);
    // if (Object.values(tempErrors).filter((value) => value).length) {
    //   return;
    // }
    handleUpdateSubmit();
  };

  useEffect(() => {
    if (success && render) {
      swal({
        title: "",
        text: message,
        className: "successAlert",
        icon: "/img/1111.png",
        buttons: false,
        timer: 3000,
        open: true,
      });
      navigate("/");
    }
    if (error && render) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/1111.png",
        buttons: false,
        timer: 3000,
      });
      setRender(false);
    }
  }, [success, error]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <LoaderSpinner />
      ) : (
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
                    Reset your account's Password
                  </h2>
                  <div class="mt-12">
                    <form onSubmit={validateSubmit}>
                      <div className="inputsenter">
                        <div class="text-sm font-bold text-gray-700 tracking-wide">
                          New Password
                        </div>
                        <input
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                            setErrors({ ...errors, newPassword: null });
                          }}
                          class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          type="password"
                          placeholder="********"
                        />
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            opacity: errors.newPassword ? 1 : 0,
                          }}
                        >
                          {errors.newPassword ?? "valid"}
                        </span>
                      </div>
                      <div className="inputsenter">
                        <div class="flex justify-between items-center">
                          <div class="text-sm font-bold text-gray-700 tracking-wide">
                            Password
                          </div>
                        </div>
                        <input
                          class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          type="password"
                          placeholder="********"
                          onChange={(e) => {
                            setCnewPassword(e.target.value);
                            setErrors({ ...errors, cNewpassword: null });
                          }}
                        />
                        <span
                          style={{
                            color: "red",
                            fontSize: "15px",
                            opacity: errors.cNewpassword ? 1 : 0,
                          }}
                        >
                          {errors.cNewpassword ?? "valid"}
                        </span>
                      </div>

                      <div class="mt-2">
                        <button
                          type="submit"
                          class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                              font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                              shadow-lg"
                        >
                          Reset Password
                        </button>
                      </div>
                    </form>
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
      )}
    </>
  );
}

export default ResetPassword;
