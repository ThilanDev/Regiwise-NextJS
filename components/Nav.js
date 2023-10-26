import Link from 'next/link';

export default function Nav() {
  return (
    <div className="relative container text-25 font-bold mx-auto p-2">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="">
          <img src="/logo.png" alt="" />
        </div>
        {/* Menu items */}
        <div className="hidden lg:flex text-white space-x-10">
          <Link className="hover:underline hover:underline-offset-4" href="http://localhost:3000/">
            Home
          </Link>
          <Link className="hover:underline hover:underline-offset-4" href="#">
            About
          </Link>
          <Link className="hover:underline hover:underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="hover:underline hover:underline-offset-4" href="#">
            Contact
          </Link>
          
        </div>
        {/* Button */}
        <div className="flex items-center gap-2 text-white text-25 hidden xl:flex">
        <img src="/phone.png" alt="" />
        +(94)11 2 729 729
        </div>
        {/* Hamburger Icon */}
        <button id="menu-btn" className="block hamburger lg:hidden focus:outline-none">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div id="menu" className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <Link href="/pricing">
            Home
          </Link>
          <Link href="/products">
            About
          </Link>
          <Link href="/about">
            Pricing
          </Link>
          <Link href="/careers">
            Contact
          </Link>          
        </div>
      </div>
    </div>
  );
}
