import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
      <div className="">
        <footer className="footer p-10 bg-base-200 text-base-content justify-center gap-56">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
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
        </footer>
        <footer className="footer px-10 py-4 border-t bg-black  border-base-300 text-white">
          <div className="items-center grid-flow-col">
            <h1 className="text-white font-bold text-3xl">
              <span className=" text-yellow-600">Summer</span> Camp
            </h1>
            <p className="text-white">
              Copyright © 2023 - All right reserved here
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <Link to="https://web.facebook.com">
                <FaFacebook />
              </Link>
              <Link to="https://web.google.com">
                <FaGoogle />
              </Link>
              <Link to="https://web.github.com">
                <FaGithub />
              </Link>
              <Link to="https://web.twitter.com">
                <FaTwitter />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    );
};
           
export default Footer;

 