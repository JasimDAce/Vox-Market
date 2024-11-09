'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import axios from "axios";
import React from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const runonce = useRef(false);
  useEffect(() => {
    if(!runonce.current){
      runonce.current=true;
       axios.get(`${process.env.NEXT_PUBLIC_API_URL}`,{withCredentials: true}).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
      if (err.response.status === 401){
        router.push('/login');
      }
    });
    }
   
  },[])
   return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="dist/output.css" />
    <title>
      Online Shopping Site for Mobiles, Electronics, Furniture, Grocery,
      Lifestyle, Books &amp; More. Best Offers!
    </title>
    <link
      rel="icon"
      href="https://static-assets-web.flixcart.com/www/promos/new/20150528-140547-favicon-retina.ico"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    {/* Link Swiper's CSS */}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
    />
    <link rel="stylesheet" href="style.css" />
    <div>
      <header className="header bg-blue h-14 w-full top-0 flex items-center justify-center my-0 mx-auto font-roboto">
        <div className="logo_Container w-w20">
          <div className="w-full relative top-0.5">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              className="w-full hover:cursor-pointer"
            />
          </div>
          <div className="flex text-xs whitespace-nowrap relative">
            {/* <a href="https://www.flipkart.com/plus"> */}
            <p className="explorePlus m-0 text-xs font-roboto italic text-white flex hover:underline decoration-white cursor-pointer">
              Explore{" "}
              <span className="explorePlus text-yellow ml-1 text-xs font-semibold">
                Plus
              </span>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                className="explorePlusImg w-w3 h-3.5 m-0 ml-0.5"
              />
            </p>
          </div>
        </div>
        <div className="search_container flex justify-between items-center max-w-maxSearchBar w-full h-9 bg-white my-0 mr-7 ml-3 rounded-sm py-0 px-2.5">
          <form className="w-full" id="searchBar">
            <input
              type="text"
              placeholder="Search for products brands and more"
              className="formInput w-full text-sm border-none outline-none font-roboto"
              title="Search for products brands and more"
            />
          </form>
          <i className="fa-solid fa-magnifying-glass text-blue text-lg" />
        </div>
        <div className="loginBtn_container relative">
          <div className="loginBtn bg-white py-1 px-10 rounded-sm text-blue font-semibold text-belowBase mx-5 hover:cursor-pointer">
            Login
          </div>
          {/* <div class="left-1/2 -translate-x-2.5 bottom-full border-b-loginArrow border-solid border-transparent"></div> */}
          <div className="login_menu absolute h-80 w-w60 bg-white -ml-32 translate-x-1/3 top-12 z-10 shadow-loginContain text-sm font-roboto hidden">
            <div className="login_menu_list">
              <div className="login_menu_top flex p-4 gap-10 border-b-loginArrow border-solid">
                <p className="font-semibold">New Customer?</p>
                <a href="#" className="text-blue font-semibold">
                  Sign Up
                </a>
              </div>
              <div className="menu_nav_link">
                <div className="border-b-loginContain border-solid flex items-center w-full py-4 px-5 gap-4 hover:bg-loginbg hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    className=""
                    viewBox="0 0 16 14"
                  >
                    <path
                      fill="#2874F1"
                      fillRule="nonzero"
                      d="M7 .333A6.67 6.67 0 0 0 .333 7 6.67 6.67 0 0 0 7 13.667 6.67 6.67 0 0 0 13.667 7 6.67 6.67 0 0 0 7 .333zm0 2c1.107 0 2 .894 2 2 0 1.107-.893 2-2 2s-2-.893-2-2c0-1.106.893-2 2-2zM7 11.8a4.8 4.8 0 0 1-4-2.147C3.02 8.327 5.667 7.6 7 7.6c1.327 0 3.98.727 4 2.053A4.8 4.8 0 0 1 7 11.8z"
                    ></path>
                  </svg>
                  <p>My Profile</p>
                </div>
                <div className="border-b-loginContain border-solid flex items-center w-full py-4 px-5 gap-4 hover:bg-loginbg hover:cursor-pointer">
                  <svg
                    width={16}
                    height={16}
                    className=""
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Desktop_VIP"
                      stroke="none"
                      strokeWidth={1}
                      fillRule="evenodd"
                    >
                      <g transform="translate(7.873 .143)">
                        <path
                          d="M6.484 4.94s2.476 1.227 3.698 1.748c1.188.506 1.323 2.4.016 3.04-1.307.64-1.67.744-1.67.744s.208-.53.178-1.044c-.085-.914-2.787-1.656-4.576-2.094 0 0-1.375-4.311-1.995-5.512C1.509.612.242.11.242.11l2.995.04s1.03-.05 1.488 1.055c.456 1.106 1.76 3.734 1.76 3.734"
                          fill="#2873F0"
                          mask="url(#b)"
                        />
                      </g>
                      <g transform="translate(8.635 8.27)">
                        <path
                          d="M5.547 6.265S4.334 8.713 3.8 9.965c-.507 1.187-2.44 1.322-3.079.015C.081 8.673.015 8.44.015 8.44s.387.076 1 .048c.915-.084 1.7-2.786 2.138-4.575 0 0 4.311-1.377 5.513-1.997 1.21-.624 1.71-1.892 1.71-1.892l-.04 3.44s.05.587-1.055 1.044c-1.105.455-3.734 1.757-3.734 1.757"
                          fill="#2873F0"
                          mask="url(#d)"
                        />
                      </g>
                      <g transform="translate(0 8.778)">
                        <path
                          d="M4.655 5.573S2.193 4.353.956 3.826C-.232 3.32-.367 1.423.94.786 2.248.145 2.774.026 2.774.026s-.34.545-.255 1.157C2.606 2.1 5.22 2.74 7.008 3.179c0 0 1.427 4.287 1.997 5.513.695 1.493 1.848 1.72 1.848 1.72l-3.396-.05s-.585.05-1.042-1.055c-.458-1.106-1.76-3.734-1.76-3.734"
                          fill="#2873F0"
                          mask="url(#f)"
                        />
                      </g>
                      <g transform="translate(0 .143)">
                        <path
                          d="M4.857 4.754s1.219-2.46 1.747-3.699c.506-1.188 2.4-1.321 3.04-.016.64 1.308.701 1.544.701 1.544s-.482.007-.993.035c-.916.087-1.663 2.702-2.101 4.49 0 0-4.296 1.405-5.513 1.996C.066 9.916 0 10.957 0 10.957l.068-3.4s-.05-.586 1.055-1.043c1.105-.457 3.734-1.76 3.734-1.76"
                          fill="#2873F0"
                          mask="url(#h)"
                        />
                      </g>
                    </g>
                  </svg>
                  <p>Flipkart plus zone</p>
                </div>
                <div className="border-b-loginContain border-solid flex items-center w-full py-4 px-5 gap-4 hover:bg-loginbg hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={12}
                    className=""
                    viewBox="0 0 16 12"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        fill="#2874F1"
                        d="M6.038 11.682h8.407c.565 0 1.018-.38 1.13-.855V.847H.426v9.98c0 .475.452.855 1.017.855h2.232v-2.98H1.94L4.776 6l2.996 2.703H6.038v2.98z"
                      ></path>
                    </g>
                  </svg>
                  <p>Order</p>
                </div>
                <div className="border-b-loginContain border-solid flex items-center w-full py-4 px-5 gap-4 hover:bg-loginbg hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                    width={16}
                    height={14}
                    viewBox="0 0 20 16"
                  >
                    <path
                      d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z"
                      fill="#2874F0"
                      className=""
                      stroke="#FFF"
                      fillRule="evenodd"
                      opacity=".9"
                    />
                  </svg>
                  <p>Wishlist</p>
                </div>
                <div className="border-b-loginContain border-solid flex items-center w-full py-4 px-5 gap-4 hover:bg-loginbg hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={12}
                    className=""
                    viewBox="0 0 16 16"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path fill="#FFF" d="M0 0h16v16H0z" />
                      <path
                        fill="#2874F0"
                        d="M16 9.25v2.5c0 .69-.597 1.25-1.333 1.25H1.333C.597 13 0 12.44 0 11.75v-2.5c.736 0 1.333-.56 1.333-1.25S.736 6.75 0 6.75v-2.5C0 3.56.597 3 1.333 3h13.334C15.403 3 16 3.56 16 4.25v2.5c-.736 0-1.333.56-1.333 1.25S15.264 9.25 16 9.25zM4.4 3.625v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4zm0 2.5v1.25h.533v-1.25H4.4z"
                      ></path>
                    </g>
                  </svg>
                  <p>Rewards</p>
                </div>
                <div className="border-b-loginContain bg-white flex items-center w-full py-4 px-5 gap-4 hover:bg-loginbg hover:cursor-pointer">
                  <svg
                    width={16}
                    height={16}
                    className=""
                    viewBox="0 0 23 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      transform="translate(-9.694 -9)"
                    >
                      <ellipse cx="20.557" cy={20} rx="20.557" ry={20} />
                      <path d="M7 6h28v28H7z" />
                      <path
                        fill="#2874F0"
                        fillRule="nonzero"
                        d="M31.5 27v1.167a2.34 2.34 0 0 1-2.333 2.333H12.833a2.333 2.333 0 0 1-2.333-2.333V11.833A2.333 2.333 0 0 1 12.833 9.5h16.334a2.34 2.34 0 0 1 2.333 2.333V13H21a2.333 2.333 0 0 0-2.333 2.333v9.334A2.333 2.333 0 0 0 21 27h10.5zM21 24.667h11.667v-9.334H21v9.334zm4.667-2.917c-.97 0-1.75-.782-1.75-1.75s.78-1.75 1.75-1.75c.968 0 1.75.782 1.75 1.75s-.782 1.75-1.75 1.75z"
                      ></path>
                    </g>
                  </svg>
                  <p>Gift Cards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" seller text-textBase leading-5 tracking-wide text-white font-semibold py-0 mx-5 my-2.5 hover:cursor-pointer">
          Become a Seller
        </div>
        <div className="more_link text-textBase leading-5 tracking-wide text-white font-semibold py-0 mx-5 my-2.5 hover:cursor-pointer relative">
          More
          <i className="fa-solid fa-angle-down icon_more pl-1 text-xs" />
          <div className="more_menu absolute h-60 w-w72 p-4">
            <div className="more_menu_list text-black text-sm font-normal">
              <ul>
                <li className="border-b-loginContain border-solid flex items-center w-full py-4 px-3 gap-4 hover:bg-loginbg hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={14}
                    className=""
                    viewBox="0 0 12 14"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M-4-3h20v20H-4z" />
                      <path
                        fill="#2874F1"
                        d="M6.17 13.61c-1.183 0-1.922-.723-1.922-1.88H8.09c0 1.157-.74 1.88-1.92 1.88zm4.222-5.028l1.465 1.104v1.07H0v-1.07l1.464-1.104v-2.31h.004c.035-2.54 1.33-4.248 3.447-4.652V.992C4.915.446 5.37 0 5.928 0c.558 0 1.014.446 1.014.992v.628c2.118.404 3.412 2.112 3.446 4.65h.004v2.312z"
                      ></path>
                    </g>
                  </svg>
                  <p>Notification Preferences</p>
                </li>
                <li className="border-b-loginContain border-solid flex items-center w-full py-4 px-3 gap-4 hover:bg-loginbg hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    className=""
                    viewBox="0 0 14 17"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        fill="#2874F0"
                        fillRule="nonzero"
                        d="M12.25.542H1.75c-.833 0-1.5.675-1.5 1.5v10.5c0 .825.667 1.5 1.5 1.5h3L7 16.292l2.25-2.25h3c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5zm-4.5 12h-1.5v-1.5h1.5v1.5zM9.303 6.73l-.676.69c-.54.547-.877.997-.877 2.122h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.646.443-1.058 0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5H4c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .66-.27 1.26-.697 1.687z"
                      ></path>
                    </g>
                  </svg>
                  <p>24 X 7 Customer Care</p>
                </li>
                <li className="border-b-loginContain border-solid flex items-center w-full py-4 px-3 gap-4 hover:bg-loginbg hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={14}
                    className=""
                    viewBox="0 0 18 10"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        fill="#2874F0"
                        fillRule="nonzero"
                        d="M12.333 0l1.91 1.908-4.068 4.067-3.333-3.333L.667 8.825 1.842 10l5-5 3.333 3.333 5.25-5.24L17.333 5V0"
                      ></path>
                    </g>
                  </svg>
                  <p>Advertise</p>
                </li>
                <li className="border-b-loginContain border-solid flex items-center w-full py-4 px-3 gap-4 hover:bg-loginbg hover:cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={14}
                    className=""
                    viewBox="0 0 12 14"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path d="M-4-3h20v20H-4z" />
                      <path
                        fill="#2874F0"
                        fillRule="nonzero"
                        d="M12 4.94H8.57V0H3.43v4.94H0l6 5.766 6-5.765zM0 12.354V14h12v-1.647H0z"
                      ></path>
                    </g>
                  </svg>
                  <p>Download App</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cart flex text-textBase font-semibold text-white mx-5 items-center ">
          <i className="fa-solid fa-cart-shopping" />
          <p className="px-1.5 hover:cursor-pointer">Cart</p>
        </div>
      </header>
      <div className="main_container bg-sliderBgColor">
        <div
          className="flex items-center justify-center h-28 w-full shadow-featureGray bg-white"
          id="featuredProducts"
        >
          <div
            id="featureProduct_list"
            className="flex justify-between h-full max-w-maxFeatureList w-featureList items-center"
          ></div>
        </div>
        <div
          id="imageSliderContainer"
          className="relative my-0 mx-auto px-2 py-2 mt-0.5 bg-sliderBgColor"
        >
          <div>
            <div
              id="imageBtnContainer"
              className="absolute w-wSlidingImg flex justify-between items-center h-full"
            >
              <button
                id="preve_imageBtn"
                aria-label="Previous"
                className="swiper-button-prev"
              ></button>
              <button
                id="next_imageBtn"
                aria-label="Next"
                className="swiper-button-next"
              ></button>
            </div>
            <div className="swiper mySwiper">
              <div
                className="swiper-wrapper py-2 px-0"
                id="SlidingImgContainer"
              ></div>
            </div>
          </div>
        </div>
        <div id="productsContainer" className="bg-sliderBgColor p-2">
          <div className="bestofElectronic_Contianer product_list bg-white h-80 text-center flex shadow-productContain mt-0 mx-2 mb-3">
            <div className="productListHeading1 bg-eleProducts flex flex-col justify-center bg-bottom w-w60 bg-no-repeat h-full px-2.5 pt-7 pb-32 items-center">
              <div className="productListHeading text-text3Xl leading-10 font-normal font-roboto">
                Best of Electronics
              </div>
              <button className="viewAllBtn mt-6 bg-blue text-white shadow-viewAllBtn border-none inline-block py-2.5 px-5 rounded-sm text-sm w-w20 hover:cursor-pointer">
                VIEW ALL
              </button>
            </div>
            <div className="swiper bestEleProductList">
              <div
                id="bestofElctronicProductList"
                className="swiper-wrapper translate-x-0"
              ></div>
              <div id="imageBtnContainer">
                <button
                  id="preve_imageBtn"
                  aria-label="Previous"
                  className="swiper-button-prev"
                ></button>
                <button
                  id="next_imageBtn"
                  aria-label="Next"
                  className="swiper-button-next nextBtn"
                ></button>
              </div>
            </div>
          </div>
          <div className="beautyFoodToysProducts_Contianer product_list bg-white h-80 text-center flex shadow-productContain mt-0 mx-2 mb-3">
            <div className="productListHeading1 bg-beautyProducts flex flex-col justify-center w-w60 bg-bottom bg-no-repeat h-full px-2.5 pt-7 pb-32 items-center">
              <div className="productListHeading text-text3Xl leading-10 font-normal font-roboto">
                Beauty, Food, Toys &amp; more
              </div>
              <button className="viewAllBtn mt-6 bg-blue text-white shadow-viewAllBtn border-none inline-block py-2.5 px-5 rounded-sm text-sm w-w20 hover:cursor-pointer">
                VIEW ALL
              </button>
            </div>
            <div className="swiper beautyFoodToysProductList">
              <div
                id="beautyFoodToysProductList"
                className="swiper-wrapper translate-x-0"
              ></div>
              <div id="imageBtnContainer">
                <button
                  id="preve_imageBtn"
                  aria-label="Previous"
                  className="swiper-button-prev"
                ></button>
                <button
                  id="next_imageBtn"
                  aria-label="Next"
                  className="swiper-button-next nextBtn"
                ></button>
              </div>
            </div>
          </div>
          <div className="summerProducts_Contianer product_list bg-white h-80 text-center flex shadow-productContain mt-0 mx-2 mb-3">
            <div className="productListHeading1 bg-summerProducts flex flex-col justify-center w-w60 bg-bottom bg-no-repeat h-full px-2.5 pt-7 pb-32 items-center">
              <div className="productListHeading text-text3Xl leading-10 font-normal font-roboto">
                Shop for a Cool Summer
              </div>
              <button className="viewAllBtn mt-6 bg-blue text-white shadow-viewAllBtn border-none inline-block py-2.5 px-5 rounded-sm text-sm w-w20 hover:cursor-pointer">
                VIEW ALL
              </button>
            </div>
            <div className="swiper summerProductsList">
              <div
                id="summerProductsList"
                className="swiper-wrapper translate-x-0"
              ></div>
              <div id="imageBtnContainer">
                <button
                  id="preve_imageBtn"
                  aria-label="Previous"
                  className="swiper-button-prev"
                ></button>
                <button
                  id="next_imageBtn"
                  aria-label="Next"
                  className="swiper-button-next nextBtn"
                ></button>
              </div>
            </div>
          </div>
          <div className="homeKitchenProducts_Contianer product_list bg-white h-80 text-center flex shadow-productContain mt-0 mx-2 mb-3">
            <div className="productListHeading1 bg-homeKitchenProducts flex flex-col justify-center w-w60 bg-bottom bg-no-repeat h-full px-2.5 pt-7 pb-32 items-center">
              <div className="productListHeading text-text3Xl leading-10 font-normal font-roboto">
                Home &amp; Kitchen Essentials
              </div>
              <button className="viewAllBtn mt-6 bg-blue text-white shadow-viewAllBtn border-none inline-block py-2.5 px-5 rounded-sm text-sm w-w20 hover:cursor-pointer">
                VIEW ALL
              </button>
            </div>
            <div className="swiper homeKitchenProductsList">
              <div
                id="homeKitchenProductsList"
                className="swiper-wrapper translate-x-0"
              ></div>
              <div id="imageBtnContainer">
                <button
                  id="preve_imageBtn"
                  aria-label="Previous"
                  className="swiper-button-prev"
                ></button>
                <button
                  id="next_imageBtn"
                  aria-label="Next"
                  className="swiper-button-next nextBtn"
                ></button>
              </div>
            </div>
          </div>
          <div className="fashionProducts_Contianer product_list bg-white h-80 text-center flex shadow-productContain mt-0 mx-2 mb-3">
            <div className="productListHeading1 bg-fashionProducts flex flex-col justify-center w-w60 bg-bottom bg-no-repeat h-full px-2.5 pt-7 pb-32 items-center">
              <div className="productListHeading text-text3Xl leading-10 font-normal font-roboto">
                Fashion Top Deals{" "}
              </div>
              <button className="viewAllBtn mt-6 bg-blue text-white shadow-viewAllBtn border-none inline-block py-2.5 px-5 rounded-sm text-sm w-w20 hover:cursor-pointer">
                VIEW ALL
              </button>
            </div>
            <div className="swiper fashionProductsList">
              <div
                id="fashionProductsList"
                className="swiper-wrapper translate-x-0"
              ></div>
              <div id="imageBtnContainer">
                <button
                  id="preve_imageBtn"
                  aria-label="Previous"
                  className="swiper-button-prev"
                ></button>
                <button
                  id="next_imageBtn"
                  aria-label="Next"
                  className="swiper-button-next nextBtn"
                ></button>
              </div>
            </div>
          </div>
          <div className="topDealProducts_Contianer product_list bg-white h-80 text-center flex shadow-productContain mt-0 mx-2 mb-3">
            <div className="productListHeading1 bg-topDealProducts flex flex-col justify-center w-w60 bg-bottom bg-no-repeat h-full px-2.5 pt-7 pb-32 items-center">
              <div className="productListHeading text-text3Xl leading-10 font-normal font-roboto">
                Top Deals{" "}
              </div>
              <button className="viewAllBtn mt-6 bg-blue text-white shadow-viewAllBtn border-none inline-block py-2.5 px-5 rounded-sm text-sm w-w20 hover:cursor-pointer">
                VIEW ALL
              </button>
            </div>
            <div className="swiper topDealProductsList">
              <div
                id="topDealProductsList"
                className="swiper-wrapper translate-x-0"
              ></div>
              <div id="imageBtnContainer">
                <button
                  id="preve_imageBtn"
                  aria-label="Previous"
                  className="swiper-button-prev"
                ></button>
                <button
                  id="next_imageBtn"
                  aria-label="Next"
                  className="swiper-button-next nextBtn"
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="footer"
          className="bg-white border-y border-solid border-grayBorder mt-6"
        >
          <div className="footerTop flex flex-wrap w-full font-roboto text-xs text-left">
            <div className="inline-block align-top text-footerFont text-left p-6 my-0 mx-auto tracking-normal leading-5">
              <div className="topStories text-topStories font-semibold mt-3.5 py-3.5 px-0 text-xs">
                <h3>
                  Top Stories:
                  <span className="text-footerFont ml-0.5">Brand Directory</span>
                </h3>
              </div>
              <div
                className="topStoriesContent my-1 mx-0 hover:cursor-pointer"
                id="mostSearchedProducts"
              >
                <span id="topStoriesTitle"></span>
                <span id="topStoriesProducts"></span>
              </div>
              <div className="topStoriesContent hover:cursor-pointer">
                <span id="mobileProductsTitle"></span>
                <span id="mobileProducts"></span>
              </div>
              <div className="topStoriesContent hover:cursor-pointer">
                <span id="cameraProductsTitle"></span>
                <span id="cameraProducts"></span>
              </div>
              <div className="topStoriesContent hover:cursor-pointer">
                <span id="laptopProductsTitle"></span>
                <span id="laptopProducts"></span>
              </div>
              <div className="topStoriesContent hover:cursor-pointer">
                <span id="TVProductTitle"></span>
                <span id="TVProducts"></span>
              </div>
              <div className="topStoriesContent hover:cursor-pointer">
                <span id="LargeAppliancesTitle"></span>
                <span id="LargeAppliances"></span>
              </div>
              <div className="topStoriesContent hover:cursor-pointer">
                <span id="clothingProductsTitle"></span>
                <span id="clothingProducts"></span>
              </div>
            </div>
          </div>
          <div
            id="footerMiddleContainer"
            className="footerMiddle inline-block align-top w-full py-0 px-6 text-footerFont2 leading-4 text-xxs mt-8 mx-0 mb-4 font-roboto"
          ></div>
          <div className="footer bg-footerBg text-xs">
            <div className="footer_1 flex flex-row flex-wrap ml-16 w-wFooter pt-10 text-white">
              <div className="footerTopContent flex-1">
                <h3 className="text-footerFont2 font-normal mb-2.5">ABOUT</h3>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Contact Us
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  About Us
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Careers
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Flipkart Stories
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Press
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Flipkart Wholesale
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Corporate
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Information
                </p>
              </div>
              <div className="footerTopContent flex-1">
                <h3 className="text-footerFont2 font-normal mb-2.5">HELP</h3>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Payments
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Shipping
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Cancellation &amp;
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Returns
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  FAQ
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Report
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Infringement
                </p>
              </div>
              <div className="footerTopContent flex-1">
                <h3 className="text-footerFont2 font-normal mb-2.5">POLICY</h3>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Return Policy
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Terms Of Use
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Security
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Privacy
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Sitemap
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  EPR Compliance
                </p>
              </div>
              <div className="footerTopContent flex-1">
                <h3 className="text-footerFont2 font-normal mb-2.5">SOCIAL</h3>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Facebook
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Twitter
                </p>
                <p className="footerP leading-6 hover:underline decoration-white cursor-pointer">
                  Youtube
                </p>
              </div>
              <div className="footerTopContent flex-1">
                <div className="mailAddress border-l border-footerBorder border-solid py-0 px-6">
                  <h3 className="text-footerFont2 font-normal mb-2.5">Mail Us</h3>
                  <p className="whitespace-nowrap m-0 p-0">
                    Flipkart Internet Private Limited,
                    <br />
                    Buildings Alyssa, Begonia &amp;
                    <br />
                    Clove Embassy Tech Village,
                    <br />
                    Outer Ring Road, Devarabeesanahalli Village,
                    <br />
                    Bengaluru, 560103,
                    <br />
                    Karnataka, India
                  </p>
                </div>
              </div>
              <div className="footerTopContent flex-1 mr-0">
                <div className="officeAddress mb-2.5 pl-3.5">
                  <h3 className="text-footerFont2 font-normal mb-2.5">
                    Registered Office Address
                  </h3>
                  <p className="whitespace-nowrap m-0 p-0">
                    Flipkart Internet Private Limited,
                    <br />
                    Buildings Alyssa, Begonia &amp;
                    <br />
                    Clove Embassy Tech Village,
                    <br />
                    Outer Ring Road, Devarabeesanahalli Village,
                    <br />
                    Bengaluru, 560103,
                    <br />
                    Karnataka, India
                    <br />
                    CIN : U51109KA2012PTC066107
                    <br />
                    Telephone:{" "}
                    <span className="text-footerBlue hover:cursor-pointer">
                      044-45614700
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="footer2 border-t border-solid border-footerBorder py-6 px-0 mt-10 w-full flex justify-evenly items-center text-sm">
                <div className="footerContent flex">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K"
                    className="footerImg"
                    alt=""
                  />
                  <span className="footer2Text text-white ml-2 hover:cursor-pointer">
                    Become a Seller
                  </span>
                </div>
                <div className="footerContent flex">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                    className="footerImg"
                    alt=""
                  />
                  <span className="footer2Text text-white ml-2 hover:cursor-pointer">
                    Advertise
                  </span>
                </div>
                <div className="footerContent flex">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                    className="footerImg"
                    alt=""
                  />
                  <span className="footer2Text text-white ml-2 hover:cursor-pointer">
                    Gift Cards
                  </span>
                </div>
                <div className="footerContent flex">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                    className="footerImg"
                    alt=""
                  />
                  <span className="footer2Text text-white ml-2 hover:cursor-pointer">
                    Help Center
                  </span>
                </div>
                <span className="footerContent text-white">
                  © 2007-2023 Flipkart.com
                </span>
                <div className="footerContent">
                  <img
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"
                    className="footerImg2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
  }

  
  

