import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = memo(() => {
  return (
    <footer className="bg-[#27272A] text-gray-200">
      <div className="w-full flex flex-col md:flex-row md:justify-around items-center py-6 border-t border-gray-600 gap-6">
        <div>
          <Image
            src="/path-to-your-logo.png"
            className="w-32 h-32 object-contain"
            alt="Logo"
            width={128}
            height={128}
          />
        </div>
        <nav className="flex gap-6 text-sm md:text-base">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Contact Us
          </Link>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Repeto
          </Link>
        </nav>
        <div className="flex flex-row gap-6 lg:gap-10 md:gap-6 items-center justify-start sm:justify-start">
          <div className="bg-white p-1 rounded-full">
            <Link href="/">
              <svg
                className="w-8 h-8 text-[#27272A] hover:text-[#2761b8]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="bg-white p-1 rounded-full">
            <Link href="/">
              <svg
                className="w-8 h-8 text-[#27272A] hover:text-[#cd2f8b]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="bg-white p-1 rounded-full">
            <Link href="/">
              <svg
                className="w-8 h-8 text-[#27272A] hover:text-[#2b6be3]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between px-4 items-center py-6 text-sm md:text-base">
        <div className="flex flex-wrap gap-4 md:gap-10">
          <Link href="/" className="underline">
            Privacy Policy
          </Link>
          <Link href="/" className="underline">
            Terms of Service
          </Link>
          <Link href="/" className="underline">
            Cookies Settings
          </Link>
        </div>
        <div>@2024 Code Compass. All rights reserved</div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer"; 

export default Footer;
