import React from "react";
import Logo from "../Logo";

const Footer = () => {
  return (
    <div className="border-t border-secondary-400 from-primary-800 to-primary-900 bg-gradient-to-b text-white py-12">
      <div className="flex flex-col flex-nowrap space-y-5 px-4">
        <ul className="space-y-1">
          <li className="mb-2">
            <Logo size="large" />
          </li>
          <li>Phone: 022-1231233</li>
          <li>Email: info@something.com</li>
        </ul>
        <div>
          <p>Subscribe to my Newsletter and never skip any article</p>
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
