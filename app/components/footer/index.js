import React from "react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="border-t border-secondary-400 bg-primary text-white py-12">
      <div className="flex flex-col md:flex-row flex-nowrap space-y-5 lg:space-y-0 px-4">
        <ul className="space-y-1 w-2/3">
          <li className="mb-2">
            <Logo size="large" />
          </li>
          <li>Phone: 022-1231233</li>
          <li>Email: info@something.com</li>
        </ul>
        <div className="w-1/3">
          <h3 className="text-2xl lg:ms-2 font-bold">
            Subscribe to Newsletter
          </h3>
          <p className="mb-3 lg:ms-2">It&apos;s absolutely free</p>
          <form>
            <input
              type="text"
              name="email"
              placeholder="Subscribe to Newsletter"
              className="p-2 px-6 rounded-full border-primary-900 border w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
