import logo from "../../../assets/image/WhatsApp Image 2023-06-11 at 7.01.36 PM.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="bg-[#0F172A]">
      <footer
        data-aos="fade-down"
        className="footer py-10 px-10 lg:px-0 mt-12 max-w-6xl mx-auto  text-center text-white"
      >
        <div>
          <span className="footer-title">Company Name</span>
          <div className="h-[70px] w-[70px] rounded-md flex items-center  ">
            <img src={logo} alt="" />{" "}
            <span className="font-extrabold ml-1">YOGA</span>
          </div>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company About</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="">Enter your email address</span>
            </label>
            <div className="relative text-black">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-accent text-white border-0 bg-[#6144FF] absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
            <p className="mt-5">
              Copyright © 2023 YOGA Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
