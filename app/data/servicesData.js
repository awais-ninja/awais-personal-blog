import SEO from "@/app/static/images/icons/seo.svg";
import AndroidDev from "@/app/static/images/icons/android-development.svg";
import DigitalMarketing from "@/app/static/images/icons/digital-marketing.svg";
import ECommerce from "@/app/static/images/icons/ecommerce.svg";
import EmailMarketing from "@/app/static/images/icons/email-marketing.svg";
import UIUX from "@/app/static/images/icons/ui-ux.svg";
import WebDev from "@/app/static/images/icons/digital-marketing.svg";
import Wordpress from "@/app/static/images/icons/wordpress.svg";

import { FaPaintBrush } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiContentful } from "react-icons/si";
import { SiMinutemailer } from "react-icons/si";

const servicesData = [
  {
    title: "SEO Optimization",
    description:
      "Boost rankings and drive traffic with our expert SEO services.",
    image: (
      <FaGlobeAmericas className="h-24 w-24 bg-primary px-auto p-4 rounded-full fill-white mx-auto shadow-lg shadow-black/25" />
    ),
  },
  {
    title: "Social Media Marketing",
    description:
      "Increase brand awareness with targeted social media campaigns.",
    image: (
      <SiGooglemarketingplatform className="h-24 w-24 bg-primary px-auto p-4 rounded-full fill-white mx-auto shadow-lg shadow-black/25" />
    ),
  },
  {
    title: "Mobile App Development",
    description: "Create user-friendly mobile apps to enhance engagement.",
    image: (
      <IoLogoAndroid className="h-24 w-24 bg-primary px-auto p-4 rounded-full fill-white mx-auto shadow-lg shadow-black/25" />
    ),
  },
  {
    title: "Web Development",
    description: "Build responsive websites for a seamless user experience.",
    image: (
      <MdDeveloperMode className="h-24 w-24 bg-primary px-auto p-4 rounded-full fill-white mx-auto shadow-lg shadow-black/25" />
    ),
  },
  {
    title: "E-commerce Solutions",
    description: "Optimize your online store to maximize sales.",
    image: (
      <FaStore className="h-24 w-24 bg-primary px-auto p-4 rounded-full fill-white mx-auto shadow-lg shadow-black/25" />
    ),
  },
  {
    title: "UX/UI Design",
    description: "Design intuitive and visually appealing user interfaces.",
    image: (
      <FaPaintBrush className="h-24 w-24 bg-primary px-auto p-4 rounded-full fill-white mx-auto shadow-lg shadow-black/25" />
    ),
  },
  {
    title: "WordPress Development",
    description: "Get custom themes and plugins tailored to your needs.",
    image: (
      <FaWordpress className="h-24 w-24 bg-primary px-auto p-4 rounded-full fill-white mx-auto shadow-lg shadow-black/25" />
    ),
  },
  {
    title: "Content Creation",
    description: "Engage with high-quality, SEO-optimized content.",
    image: (
      <SiContentful className="h-24 w-24 bg-primary px-auto p-4 rounded-full fill-white mx-auto shadow-lg shadow-black/25" />
    ),
  },
  {
    title: "Email Marketing",
    description: "Drive sales with personalized email campaigns.",
    image: (
      <SiMinutemailer className="h-24 w-24 bg-primary px-auto p-4 rounded-full fill-white mx-auto shadow-lg shadow-black/25" />
    ),
  },
];

export default servicesData;
