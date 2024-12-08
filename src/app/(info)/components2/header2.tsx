import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header2() {
  return (
    <header className="flex justify-between items-center bg-white w-full h-[91px] left-[59px] mt-0 shadow-sm relative">

      <div>
        <h2 className="text-customBlue text-2xl font-bold pl-12">Bandage</h2>
      </div>
      {/* Navigation */}
      <nav className="text-customBlue pr-[180px]">

        <ul className="flex gap-x-6">
          <li className="hover:text-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/shop">Product</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/blog">Pricing</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
       
      <div className="mr-44">
          <Link href="/login" className="font-normal text-sky-500">Login</Link>
          <button className="bg-sky-500 text-white  ml-10 font-bold text-[14px] leading-[22px] tracking-[0.2px] w-[169px] h-[48px]">
            Become a member
            <FontAwesomeIcon icon={faArrowRight} className="text-white text-xs font-bold pl-2"/>
          </button>
          </div>
    
    </header>
  );
}
