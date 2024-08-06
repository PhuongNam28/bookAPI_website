import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/index";
import List from "../../Components/List/index";
import Header from "../../Components/Header/index";
import Icon from "../../Components/Icon/index";
import TrendingBook from "../../Components/TrendingBook/TrendingBook";
import ComboBook from "../../Components/ComboBook/index";
import BestSeller from "../../Components/BestSeller/index";
import InternationalBestSeller from "../../Components/InternationalBestSeller/InternationalbestSeller";
import NewArrival from "../../Components/NewArrival/NewArrival";
import Poster from "../../Components/Poster/Poster";
import Poster2 from "../../Components/Poster2/Poster2";
import AwardWinner from "../../Components/AwardWinner/index";
import Footer from "../../Components/Footer/index";
import LoginPage from "../LoginPage/LoginPage";
import TextSlider from "../../Components/TextSlider/TextSlider";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "../../lib/userStore";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton";

import './homepage.css'
function HomePage() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) {
    return (
      <div className="loading">
         Loading, Please Wait...
        <div className="spinner"></div>
      </div>
    );
  }
  return (
    <div className="homePage">
      {currentUser ? (
        <>
          <TextSlider />
          <Navbar />
          <List />
          <Header />
          <Icon />
          <TrendingBook />
          <ComboBook />
          <BestSeller />
          <NewArrival />
          <Poster />
          <InternationalBestSeller />
          <Poster2 />
          <AwardWinner />
          <Footer />
          <ScrollToTopButton />
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default HomePage;
