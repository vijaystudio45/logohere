import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useSelector } from "react-redux";
import { CountryDataAction } from "../../Redux/actions/CountryAction";
import { useDispatch } from "react-redux";
import axios from "axios";

const GetServices = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("action", "GET_NUMBER");
    formData.append("key", "123Uf3QI85BnvMNQoOAUAD76fc4");
    formData.append("country", "usa");
    formData.append("operator", "any");
    formData.append("service", "vk");

    dispatch(CountryDataAction(formData));
  };

  const { countryData } = useSelector((state) => state.CountryDataReducer);

  console.log("countryData", countryData);

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
    <div>
      <div>
        <div className="mainservice">
          <h2 className="popularservicehead">Popular services</h2>
          <p className="popularpera">
            Receive one-time SMS from selected service to the bought number.
          </p>

          <div className="services-group">
            <div className="services-cards">
              <div class="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4">
                <div onClick={handleClickOpen} className="service-card-image">
                  <img className="w-[40px]" src="/img/telegram-logo-8.png" />
                  <h6>
                    Telegram <i class="fa fa-circle telegrameicon"></i>
                  </h6>
                </div>
                <div onClick={handleClickOpen} className="service-card-image">
                  <img
                    className="w-[40px] rounded-md"
                    src="/img/microsoft.png"
                  />
                  <h6>
                    Microsoft <i class="fa fa-circle telegrameicon"></i>
                  </h6>
                </div>
                <div onClick={handleClickOpen} className="service-card-image">
                  <img className="w-[40px]" src="/img/faceboook.png" />
                  <h6>
                    Facebook <i class="fa fa-circle telegrameicon"></i>
                  </h6>
                </div>
                <div onClick={handleClickOpen} className="service-card-image">
                  <img className="w-[40px]" src="/img/google.png" />
                  <h6>
                    Google/Youtube <i class="fa fa-circle telegrameicon"></i>
                  </h6>
                </div>
                <div onClick={handleClickOpen} className="service-card-image">
                  <img className="w-[40px]" src="/img/whatsap.png" />
                  <h6>
                    Whatsapp <i class="fa fa-circle telegrameicon"></i>
                  </h6>
                </div>
              </div>

              <button onClick={handleButtonClick}>
                Click me to make API request
              </button>
              {responseData && (
                <div>
                  <p>API Response:</p>
                  <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
              )}
            </div>
            <div className="service-text">
              <div className="sidecontnet">
                <h4 className="sideheading">
                  We don't charge if SMS doesn't arrive
                </h4>
                <div>
                  <img src="/img/sendsms.png" />
                </div>

                <h6 className="text-lg mt-4">How Single SMS Works?</h6>

                <p className="py-2 text-sm">
                  You can receive 1 message from the selected service. Each
                  number closes after the sms arrives and cannot be activated
                  again.
                </p>

                <p className="py-2 text-sm">
                  If you have not received any SMS to the purchased number it
                  will be autlmatically canceled after 10 minutes and your
                  balance will be refunded to your account.
                </p>
                <p className="py-2 text-sm">
                  Alternatively you can manually cancel the number and get a
                  full refund without waiting 10 minutes.
                </p>

                <p className="py-2 text-sm">
                  After receiving an SMS to the bought number, cancellation or
                  refund will not be possible.
                </p>
                <p className="py-2 text-sm">
                  The bought numbers will appear on the Single SMS Numbers page.
                  You will be redirected after the purchase.
                </p>
              </div>
            </div>
          </div>

          <div className="number-popup">
            <Dialog
              open={open}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>
                <h1 className="services-heading border-b-2 p-4 border-indigo-500">Get Number</h1>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <div class="">
                    <div class="bg-white">
                      <form class="bg-white">
                        <div class="">
                          <input
                            placeholder="select service"
                            className="services-input"
                            type="text"
                          />
                        </div>
                        <div class="">
                          <input
                            placeholder="select Country"
                            className="services-input"
                            type="text"
                          />
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                          <div class="">
                            <input
                              placeholder="Available Stock"
                              className="services-input"
                              type="text"
                            />
                          </div>
                          <div class="">
                            <input
                              placeholder="Price"
                              className="services-input"
                              type="text"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          class="getnumber-btn mb-2"
                        >
                          Get Number
                        </button>
                      </form>
                    </div>
                  </div>
                </DialogContentText>
              </DialogContent>
              {/* <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose}>Agree</Button>
              </DialogActions> */}
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetServices;
