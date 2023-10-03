import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUser, faBullseye, faHeart } from '@fortawesome/free-solid-svg-icons';
import './home.css';
import Swal from 'sweetalert2';
import Cookies from "universal-cookie";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation } from 'swiper/modules';



function Navbar({ profile, logout }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNctOpen, setIsNctOpen] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleNct = () => {
        setIsNctOpen(!isNctOpen);
    };

    return (
        <nav className="bg-rose-700">
            <div
                className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center">
                    <img src="./img/logo/logo.png" className="h-8 mr-3" alt="buddhi-logo" />
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SMK
                        BUDDHI</span>
                </a>
                <div className="flex md:order-2 gap-4">
                    <button data-collapse-toggle="navbar-cta" type="button" onClick={toggleNct}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    {profile === true ? (<img
                        id="avatarButton"
                        data-dropdown-toggle="userDropdown"
                        data-dropdown-placement="bottom-start"
                        src="./img/icon/user.png"
                        className="w-10 h-10 rounded-full cursor-pointer "
                        alt="User dropdown"
                        onClick={toggleDropdown}
                    />) : profile}
                    <div
                        id="userDropdown"
                        className={`${isDropdownOpen ? 'block' : 'hidden'
                            } absolute right-0 mt-12 bg-white border border-gray-300 rounded-lg shadow-md w-48`}
                    >
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Profile
                        </a>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Settings
                        </a>
                        {logout}
                    </div>
                </div>
                <div
                    className={`${isNctOpen ? "" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}
                    id="navbar-cta">
                    <ul
                        className="flex flex-col font-medium p-4 md:p-0 mt-4 text-black rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <a href="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="/"
                                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">News</a>
                        </li>
                        <li>
                            <a href='/' className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function Caroussel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const mobileSlides = [
        'img/carousel/mobile1.jpeg',
        'img/carousel/mobile2.jpeg',
        'img/carousel/mobile3.jpeg',
    ];

    let slides = [
        'img/carousel/carousel1.jpeg',
        'img/carousel/carousel2.jpeg',
        'img/carousel/carousel3.jpeg',
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        const nextSlide = () => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);

    }, [slides.length]);
    slides = isMobile ? mobileSlides : slides;

    return (
        <section class="bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4 py-8 lg:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div class="lg:col-span-7 flex flex-col justify-center items-center lg:items-start">
                <h1 class="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none text-center dark:text-white">SMK BUDDHI</h1>
                <p class="mt-4 text-base md:text-lg lg:text-xl font-light text-center text-gray-500 dark:text-gray-400">JOIN SMK BUDDHI NOW | SUDAH TERAKREDITASI A</p>
                <div class="mt-6 flex flex-col items-center lg:flex-row lg:items-center">
                    <a href="#" class="mb-3 lg:mb-0 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        LEARN MORE
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        REGISTER NOW
                    </a>
                </div>
            </div>
            <div class="lg:col-span-5 flex justify-center hidden lg:block">
                <img src="img/logo/logo.png" alt="mockup" class="max-w-full h-auto" />
            </div>
        </div>
    </div>
</section>

    
    
    )
    // return (
    //     <div id="default-carousel" className="relative" data-carousel="slide">
    //         <div className="relative overflow-hidden w-full h-fit">
    //             {slides.map((slide, index) => (
    //                 <div
    //                     key={index}
    //                     className={`duration-700 ease-in-out ${index === activeIndex ? '' : 'hidden'
    //                         }`}
    //                     data-carousel-item
    //                 >
    //                     <img src={slide} className="relative w-full" alt={`Carousel ${index + 1}`} />
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // )
}

function Container() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-64 lg:h-62 sm:w-1/2 sm:h-1/2 p-4 m-4 bg-gray-200 rounded-lg text-center bg-rose-700 text-white">
                <div className='text-6xl p-3'> <FontAwesomeIcon icon={faBullseye} /></div>
                <p className="text-lg font-semibold ">VISI MISI</p>
                <p className="flex center text-lg font-weight-600">Membentuk manusia menjadi insan intektual yang penuh kebajikan</p>
                
            </div>

            <div className="w-full lg:w-64 lg:h-62 sm:w-1/2 sm:h-1/2 p-4 m-4 bg-gray-200 rounded-lg text-center mx-5 bg-rose-700 text-white">
                <div className='text-6xl p-3'> <FontAwesomeIcon icon={faHeart} /></div>
                <p className="text-lg font-semibold">KEGIATAN</p>
                <p className="flex center text-lg font-weight-600">memiliki acara untuk meningkatkan kemampuan siswa</p>
            </div>

            <div className="w-full lg:w-64 lg:h-62 sm:w-1/2 sm:h-1/2 p-4 m-4 bg-gray-200 rounded-lg text-center mx-5 bg-rose-700 text-white">
                <div className='text-6xl p-3'> <FontAwesomeIcon icon={faSchool} /></div>
                <p className="text-lg font-semibold">TENTANG SEKOLAH</p>
                <p className="flex center text-lg font-weight-600">Sekolah yang sudah didirikan sejak tahun 1912</p>
            </div>
        </div>
    )
}


function Card() {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 justify-items-center shadow-xl">
                <div className="max-w-sm rounded overflow-hidden shadow-lx bg-white">
                    <img className="w-full" src="/img/img/1.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">PTS SMK BUDDHI</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#study</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#school</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#computer</span>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-l bg-white">
                    <img class="w-full" src="/img/img/2.jpg" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Jalan Jalan SMK BUDDHI</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img class="w-full" src="/img/img/3.jpg" alt="Sunset in the mountains" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Lomba Music</div>
                        <p class="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#music</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#competitive</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Guru = [
    {
        nama: "Bronya",
        bidang: "Desain Media Interaktif",
        media: [
            {
                sosial: "Instagram",
                user: "Hallo"
            },
            {
                sosial: "Twiter",
                user: "Hallo"
            },
            {
                sosial: "Github",
                user: "Hallo"
            },
            {
                sosial: "Youtube",
                user: "Hallo"
            }
        ],
        motivasi: "Aku Adalah Seorang Guru Yang Sehat"
    },
    {
        nama: "Bronya 2",
        bidang: "Desain Media Interaktif",
        media: [
            {
                sosial: "Instagram",
                user: "Hallo"
            },
            {
                sosial: "Twiter",
                user: "Hallo"
            },
            {
                sosial: "Github",
                user: "Hallo"
            },
            {
                sosial: "Youtube",
                user: "Hallo"
            }
        ],
        motivasi: "Aku Adalah Seorang Guru Yang Sehat"
    },
    {
        nama: "Bronya 3",
        bidang: "Desain Media Interaktif",
        media: [
            {
                sosial: "Instagram",
                user: "Hallo"
            },
            {
                sosial: "Twiter",
                user: "Hallo"
            },
            {
                sosial: "Github",
                user: "Hallo"
            },
            {
                sosial: "Youtube",
                user: "Hallo"
            }
        ],
        motivasi: "Aku Adalah Seorang Guru Yang Sehat"
    },
    {
        nama: "Bronya 4",
        bidang: "Desain Media Interaktif",
        media: [
            {
                sosial: "Instagram",
                user: "Hallo"
            },
            {
                sosial: "Twiter",
                user: "Hallo"
            },
            {
                sosial: "Github",
                user: "Hallo"
            },
            {
                sosial: "Youtube",
                user: "Hallo"
            }
        ],
        motivasi: "Aku Adalah Seorang Guru Yang Sehat"
    },
    {
        nama: "Bronya 5",
        bidang: "Desain Media Interaktif",
        media: [
            {
                sosial: "Instagram",
                user: "Hallo"
            },
            {
                sosial: "Twiter",
                user: "Hallo"
            },
            {
                sosial: "Github",
                user: "Hallo"
            },
            {
                sosial: "Youtube",
                user: "Hallo"
            }
        ],
        motivasi: "Aku Adalah Seorang Guru Yang Sehat"
    },
    {
        nama: "Bronya 6",
        bidang: "Desain Media Interaktif",
        media: [
            {
                sosial: "Instagram",
                user: "Hallo"
            },
            {
                sosial: "Twiter",
                user: "Hallo"
            },
            {
                sosial: "Github",
                user: "Hallo"
            },
            {
                sosial: "Youtube",
                user: "Hallo"
            }
        ],
        motivasi: "Aku Adalah Seorang Guru Yang Sehat"
    }
]

const Profile = () => {
    let hasil = []
    for (let i = 0; i < Guru.length; i++) {
        hasil.push(<SwiperSlide>
            <div className="relative w-full group max-w-xs min-w-0 max-w-xxs h-fit sm:max-w-xxs mx-auto mt-10 mb-2 sm:mb-4 break-words bg-white border-solid border-2 border-black shadow-2xl dark:bg-white md:max-w-xxs rounded-xl sm:w-full mt-40" id="firstprofile">
                <div className="pb-6">
                    <div className="flex flex-wrap">
                        <div className="flex justify-center w-full">
                            <div className="relative" id="Profile">
                                <img
                                    src="img/logo/logo.png"
                                    alt="Logo Buddhi"
                                    className="dark:shadow-xl border-white dark:border-black rounded-full border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]"
                                />

                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mt-20 text-center">
                        <h3 className="mb-1 text-2xl font-bold leading-normal text-black">{Guru[i].nama}</h3>
                        <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">

                            <div className="text-sm font-bold tracking-wide text-black font-mono text-xl">Guru {Guru[i].bidang}</div>
                        </div>
                        <div className="w-full text-center">
                            <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                                <div className="flex space-x-2">
                                    {Guru[i].media.some(a => a.sosial === "Twiter") ? (<a
                                        className="p-1 -m-1 text-black hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                                        href={Guru[i].media.filter(item => item.sosial === "Twiter").map(item => item.user)}
                                        rel="noopener noreferrer"
                                        aria-label="Bronya on Twitter"
                                        target="_blank"
                                    >
                                        <svg className="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 24 24">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>) : ""}

                                    {Guru[i].media.some(a => a.sosial === "Github") ? (<a className="p-1 -m-1 text-black hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary" href={Guru[i].media.filter(item => item.sosial === "Github").map(item => item.user)} rel="noopener noreferrer" aria-label="Bronya on Github" target="_blank">
                                        <svg className="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 140 140">
                                            <path d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z"></path>
                                        </svg>
                                    </a>) : ""}

                                    {Guru[i].media.some(a => a.sosial === "Instagram") ? (<a
                                        className="p-1 -m-1 text-black hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                                        href={Guru[i].media.filter(item => item.sosial === "Instagram").map(item => item.user)}
                                        rel="noopener noreferrer"
                                        aria-label="Bronya on Instagram"
                                        target="_blank"
                                    >
                                        <svg className="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M73.1735 2C89.9405 2 92.3831 2.0897 99.4487 2.414C106.79 2.7521 111.807 3.9182 116.195 5.6225C120.801 7.35353 124.973 10.0686 128.422 13.5782C131.931 17.0266 134.646 21.1993 136.378 25.805C138.082 30.1934 139.248 35.2097 139.586 42.5513C139.917 49.9136 140 52.2596 140 71V71.552C140 89.7887 139.917 92.1623 139.586 99.4487C139.248 106.79 138.082 111.807 136.378 116.195C134.646 120.801 131.931 124.973 128.422 128.422C124.973 131.931 120.801 134.646 116.195 136.378C111.807 138.082 106.79 139.248 99.4487 139.586C92.0864 139.917 89.7404 140 71 140H70.448C52.2113 140 49.8377 139.917 42.5513 139.586C35.2097 139.248 30.1934 138.082 25.805 136.378C21.1993 134.646 17.0266 131.931 13.5782 128.422C10.0686 124.973 7.35353 120.801 5.6225 116.195C3.9182 111.807 2.7521 106.79 2.414 99.4487C2.0897 92.3831 2 89.9336 2 73.1735V68.8265C2 52.0595 2.0897 49.6169 2.414 42.5513C2.7521 35.2097 3.9182 30.1934 5.6225 25.805C7.35353 21.1993 10.0686 17.0266 13.5782 13.5782C17.0266 10.0686 21.1993 7.35353 25.805 5.6225C30.1934 3.9182 35.2097 2.7521 42.5513 2.414C49.6169 2.0897 52.0664 2 68.8265 2H73.1735V2ZM72.6146 14.4338H69.3854C52.439 14.4338 50.1758 14.5097 43.1171 14.834C36.3896 15.1445 32.7395 16.2623 30.3038 17.2076C27.0815 18.4634 24.7838 19.9538 22.3688 22.3688C19.9538 24.7838 18.4634 27.0815 17.2076 30.3038C16.2623 32.7395 15.1376 36.3896 14.834 43.1171C14.5097 50.1758 14.4338 52.439 14.4338 69.3854V72.6146C14.4338 89.561 14.5097 91.8242 14.834 98.8829C15.1445 105.61 16.2623 109.261 17.2076 111.696C18.4634 114.912 19.9607 117.216 22.3688 119.631C24.7838 122.046 27.0815 123.537 30.3038 124.792C32.7395 125.738 36.3896 126.862 43.1171 127.166C50.3897 127.497 52.5701 127.566 71 127.566H71.552C89.4713 127.566 91.6793 127.497 98.876 127.166C105.61 126.855 109.261 125.738 111.696 124.792C114.912 123.537 117.216 122.046 119.631 119.631C122.046 117.216 123.537 114.919 124.792 111.696C125.738 109.261 126.862 105.61 127.166 98.8829C127.497 91.6034 127.566 89.4299 127.566 71V70.448C127.566 52.5287 127.497 50.3207 127.166 43.124C126.855 36.3896 125.738 32.7395 124.792 30.3038C123.687 27.3062 121.923 24.5947 119.631 22.3688C117.405 20.077 114.694 18.3134 111.696 17.2076C109.261 16.2623 105.61 15.1376 98.8829 14.834C91.8242 14.5097 89.561 14.4338 72.6146 14.4338ZM71 35.5685C75.6529 35.5685 80.2603 36.485 84.559 38.2656C88.8578 40.0462 92.7637 42.656 96.0539 45.9461C99.344 49.2363 101.954 53.1422 103.734 57.441C105.515 61.7397 106.432 66.3471 106.432 71C106.432 75.6529 105.515 80.2603 103.734 84.559C101.954 88.8578 99.344 92.7637 96.0539 96.0539C92.7637 99.344 88.8578 101.954 84.559 103.734C80.2603 105.515 75.6529 106.432 71 106.432C61.603 106.432 52.5908 102.699 45.9461 96.0539C39.3015 89.4092 35.5685 80.397 35.5685 71C35.5685 61.603 39.3015 52.5908 45.9461 45.9461C52.5908 39.3015 61.603 35.5685 71 35.5685V35.5685ZM71 48.0023C64.9006 48.0023 59.0511 50.4253 54.7382 54.7382C50.4253 59.0511 48.0023 64.9006 48.0023 71C48.0023 77.0994 50.4253 82.9489 54.7382 87.2618C59.0511 91.5747 64.9006 93.9977 71 93.9977C77.0994 93.9977 82.9489 91.5747 87.2618 87.2618C91.5747 82.9489 93.9977 77.0994 93.9977 71C93.9977 64.9006 91.5747 59.0511 87.2618 54.7382C82.9489 50.4253 77.0994 48.0023 71 48.0023V48.0023ZM107.832 25.8878C110.028 25.8878 112.134 26.7602 113.687 28.313C115.24 29.8658 116.112 31.9718 116.112 34.1678C116.112 36.3638 115.24 38.4698 113.687 40.0226C112.134 41.5754 110.028 42.4478 107.832 42.4478C105.636 42.4478 103.53 41.5754 101.977 40.0226C100.425 38.4698 99.5522 36.3638 99.5522 34.1678C99.5522 31.9718 100.425 29.8658 101.977 28.313C103.53 26.7602 105.636 25.8878 107.832 25.8878Z" ></path>
                                        </svg>
                                    </a>) : ""}

                                    {Guru[i].media.some(a => a.sosial === "Youtube") ? (<a
                                        className="p-1 -m-1 text-black hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary"
                                        href={Guru[i].media.filter(item => item.sosial === "Youtube").map(item => item.user)}
                                        rel="noopener noreferrer"
                                        aria-label="Bronya Cerda on Youtube"
                                        target="_blank"
                                    >
                                        <svg className="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 140 140">
                                            <path d="M115 15H25A25 25 0 000 40v60a25 25 0 0025 25h90a25 25 0 0025-25V40a25 25 0 00-25-25zM95.71 76.25L63.58 94.1A7.15 7.15 0 0153 87.85v-35.7a7.15 7.15 0 0110.6-6.26l32.11 17.86a7.15 7.15 0 010 12.5z"
                                            ></path>
                                        </svg>
                                    </a>) : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-6">
                                <p className="mb-4 font-light leading-relaxed text-black">
                                    {Guru[i].motivasi}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide >)
    }
    const [slidesPerView, setSlidesPerView] = useState(1);
    useEffect(() => {
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;
        setSlidesPerView(isDesktop ? 3 : 1);
        const handleResize = () => {
            const isDesktop = window.matchMedia('(min-width: 768px)').matches;
            setSlidesPerView(isDesktop ? 3 : 1);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <Swiper
            slidesPerView={slidesPerView}
            loop={true}
            centeredSlides={true} 
            navigation={true}
            modules={[Navigation]}
        >
            {hasil}
        </Swiper>
    );
};

function Footer() {
    return (<div className="container mx-auto bg-rose-700">
        <div className="flex items-center justify-between">
            <a href="/">
                <img className="w-auto h-24"
                    src="img/logo/SMK-BUDDHI.png" alt="Buddhi"
                    id="logofoote" />
            </a>

            <div className="flex -mx-2">
                <a href="/"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Youtube">
                    <svg className="w-5 h-5 fill-current"
                        viewBox="0 0 50 50" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z">
                        </path>
                    </svg>
                </a>

                <a href="/"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Facebook">
                    <svg className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                        </path>
                    </svg>
                </a>

                <a href="/"
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    aria-label="Github">
                    <svg className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    </div>)
}



function HomeIT() {
    const cookies = new Cookies();

    const login = () => {
        Swal.fire({
            title: 'Login',
            html: `<center><table cellpadding="5px">
            <tr>
                <td><label for="username">Username</label></td>
                <td><input type="text" id="username" className="swal2-input" placeholder="Username"></td>
            </tr>
            <tr>
                <td><label for="password">Password</label></td>
                <td><input type="password" id="password" className="swal2-input" placeholder="Password"></td>
            </tr>
            </table></center>`,
            showCancelButton: true,
            confirmButtonText: 'Login',
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                const username = Swal.getPopup().querySelector('#username').value;
                const password = Swal.getPopup().querySelector('#password').value;
                if (!username || !password) {
                    Swal.showValidationMessage('Input all value in the box');
                }
                return {
                    username,
                    password
                };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                cookies.set('sessionID', { status: true, username: result.value.username, password: result.value.password }, { path: '/' }); // Simpan cookie untuk menandai login
            }
        });
    };

    const logout = () => {
        cookies.remove('sessionID');
    }

    const sessionID = cookies.get('sessionID');

    console.log(sessionID)


    return (
        <div className="HomeIT">
            <Navbar
                profile={sessionID === undefined ? (<Link to="/login"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Sign Up
                </Link>) : true}
                logout={(<a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={logout}>
                    Logout
                </a>)} />
            <Caroussel />
            <br />
            <Container /><br /><br /><br />
            <div className='bg-rose-700 p-14'>
                <p className="text-4xl text-center text-white my-px">BERITA</p>
                <hr className="w-48 h-1 mx-auto my-px bg-white border-0 rounded md:my-px dark:bg-white" /><br />
                <Card />
                <br />
                <div className="flex justify-center">
                    <button type="button" className="bg-white from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-3 py-4 text-center mr-2 mb-2">Lihat Berita Lainnya</button>
                </div>
            </div>

            <Profile />
            <br />
            <footer class="bg-rose-700">
                <Footer />
            </footer>
        </div>
    );
}

export default HomeIT;
