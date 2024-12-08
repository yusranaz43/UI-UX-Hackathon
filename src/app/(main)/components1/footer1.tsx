import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer1(){
    return(
      <footer className="pt-7 align-middle">
        <div className="flex">
          <h3 className="text-customBlue text-xl pl-48 font-bold">Bandage</h3>
          <div className="pl-[740px] space-x-3 text-xl">
            <a href="/"><FontAwesomeIcon icon={faFacebook} className="text-sky-500"/></a>
            <a href="/"><FontAwesomeIcon icon={faInstagram} className="text-sky-500"/></a>
            <a href="/"><FontAwesomeIcon icon={faTwitter} className="text-sky-500"/></a>
          </div>
        </div>
 
        <hr className="my-6 mx-48 border-gray-300" />

        <div className="grid grid-cols-5 px-48 items-center py-6 gap-0.5">
            <div>
              <h5 className="font-bold text-sm text-customBlue">Company Info</h5>
              <ul className="text-xs pt-5 space-y-2 text-gray-700">
                <li><Link href="/">About Us</Link></li>
                <li><Link href="/">Carrier</Link></li>
                <li><Link href="/">We are Hiring</Link></li>
                <li><Link href="/">Blogs</Link></li>
              </ul>
            </div>
            <div>
             <h5 className="font-bold text-sm text-customBlue">Legal</h5>
              <ul className="text-xs pt-5 space-y-2 text-gray-700">
                <li><Link href="/">About Us</Link></li>
                <li><Link href="/">Carrier</Link></li>
                <li><Link href="/">We are Hiring</Link></li>
                <li><Link href="/">Blogs</Link></li>
              </ul>
            </div>
            <div>
             <h5 className="font-bold text-sm text-customBlue">Features</h5>
              <ul className="text-xs pt-5 space-y-2 text-gray-700">
                <li><Link href="/">Business Marketing</Link></li>
                <li><Link href="/">User Analytic</Link></li>
                <li><Link href="/">Live Chat</Link></li>
                <li><Link href="/">Unlimited Support</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-sm text-customBlue">Resources</h5>
              <ul className="text-xs pt-5 space-y-2 text-gray-700">
                <li><Link href="/">IOSS & Android</Link></li>
                <li><Link href="/">Watch a Demo</Link></li>
                <li><Link href="/">Cuatomers</Link></li>
                <li><Link href="/">API</Link></li>
              </ul></div>
            <div className="col-span-1 self-start">
            <h5 className="font-bold text-sm text-customBlue ">Get In Touch</h5>
              <ul className="text-xs pt-5 space-y-2 text-gray-700">
                <div className="flex pb-1">
                  <input type="email" placeholder="Your Email" className="h-[35px] pl-5"/>
                  <button type="submit" className="bg-sky-500 text-white hover:bg-blue-600 px-3 py-1 w-[80px] h-[35px]">
                     Subscribe</button>
                </div>
                  <li><Link href="/">Lore imp sum dolor Amit</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-xs pl-48 py-7 text-gray-700">
            <p>Made With Love By Finland All Right Reserved </p>
          </div>
      </footer>
    )
  }