import React from "react";
import home1 from "../assets/blog-app/home1.png";
import home2 from "../assets/blog-app/home2.png";
import landingpage from "../assets/blog-app/landingpage.png";
import loginPage from "../assets/blog-app/loginPage.png";
import signupPage from "../assets/blog-app/signupPage.png";

const images = [
  { src: landingpage, alt: "Landing Page" },
  { src: loginPage, alt: "Log in Page" },
  { src: signupPage, alt: "Sign Up Page" },
  { src: home1, alt: "User01 Post" },
  { src: home2, alt: "User02 Post, Comment, Like" },
];

export const ImgCarousel = () => {
  return (
    <>
      <div class="carousel carousel-center rounded-box h-96 space-x-5 p-3 bg-neutral ">
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image.src} alt={image.alt} className=" h-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImgCarousel;
