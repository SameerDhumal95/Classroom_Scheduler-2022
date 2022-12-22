import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import Main from "./Main/main";
import { CssBaseline } from "@mui/material";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <CssBaseline />
      {loading ? (
        <div className="preloader">
          <ClockLoader
            color={"rgb(253, 132, 31)"}
            loading={loading}
            size={150}
          />
        </div>
      ) : (
        <div className="main" style={{ background: "rgb(239, 239, 239)" }}>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default App;
