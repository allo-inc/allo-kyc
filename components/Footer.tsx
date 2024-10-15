"use client";
import React from "react";
import { Twitter, Facebook, Linkedin, Instagram } from "lucide-react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <footer className="bg-gray-900 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">ALLO</h2>
            <p className="text-sm opacity-70">
              Your gateway to Web3 marketplace with cutting-edge technology.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigate("/")}>Home</button>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} ALLO Marketplace. All rights
            reserved.
          </p>
          <p>
            <button onClick={() => handleNavigate("/privacy-policy")}>
              Privacy Policy
            </button>{" "}
            |{" "}
            <button onClick={() => handleNavigate("/terms-of-service")}>
              Terms of Service
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
