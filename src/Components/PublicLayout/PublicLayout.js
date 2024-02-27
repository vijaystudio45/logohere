import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LoaderSpinner from "../Loader/Loader-spinner";

const PublicLayout = () => {
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
        <div className="publicmain">
          <div className="publi-header">
            <Header />
          </div>
          <div className="publi-centersection">
            <Outlet />
          </div>

          <div className="publi-footer">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default PublicLayout;
