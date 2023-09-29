import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Header() {
  return (
    <header className="w-full container mx-auto">
      <div className="flex flex-col items-center py-12">
        <a
          className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
          href="/"
        >
          SMK BUDDHI
        </a>
        <p className="text-lg text-gray-600">HOTs NEWS</p>
      </div>
    </header>
  );
}

function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
  }, []);
  return (
    <nav
      className="w-full py-4 border-t border-b bg-gray-100"
      x-data="{ open: false }"
    >
      <div className="block sm:hidden">
        <a
          href="/"
          className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
        >
          Topics <i className="fas ml-2"></i>
        </a>
      </div>
      <div className="w-full flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
          <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Information Technology
          </a>
          <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Accounting
          </a>
          <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Travel
          </a>
          <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Competitive
          </a>
          <a href="/" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            School Activity
          </a>
        </div>
      </div>
    </nav>
  );
}

function BeritaPage() {
  const { beritaId } = useParams();
  console.log(beritaId);
  return (
    <div className="BeritaPage">
      <Header />
    </div>
  );
}

export default BeritaPage;
