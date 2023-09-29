import React, { useState, useEffect } from 'react';
import Cookies from "universal-cookie";
import { Link } from 'react-router-dom';
// import Cookies from "universal-cookie";
import './login.css'


function LoginStyle() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [inputs, setInputs] = useState([
        { id: 1, value: '', isActive: false },
        { id: 2, value: '', isActive: false },
        { id: 3, value: '', isActive: false },
        { id: 4, value: '', isActive: false },
        { id: 5, value: '', isActive: false },
        // Tambahkan input-input lain jika diperlukan
    ]);
    const cookies = new Cookies();
    const handleSubmit = async (e) => {
        e.preventDefault();
        cookies.set('sessionID', { status: true, idText:"jajasxdjangbegkdzjgdjd" }, { path: '/' }); // Simpan cookie untuk menandai login
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleInputFocus = (id) => {
        const updatedInputs = inputs.map((input) => {
            if (input.id === id) {
                return { ...input, isActive: true };
            }
            return input;
        });
        setInputs(updatedInputs);
    };

    const handleInputBlur = (id, value) => {
        const updatedInputs = inputs.map((input) => {
            if (input.id === id) {
                return { ...input, isActive: value !== '' };
            }
            return input;
        });
        setInputs(updatedInputs);
    };

    const [activeIndex, setActiveIndex] = useState(0);

    const handleBulletClick = (index) => {
        setActiveIndex(index);
    };

    let slides = [
        'img/carousel/carousel1.jpeg',
        'img/carousel/carousel2.jpeg',
        'img/carousel/carousel3.jpeg',
    ];

    const textData = [
        'Vihara SMK BUDDHI',
        'UBD',
        'Lapangan Futsal SMK BUDDHI',
    ];

    useEffect(() => {
        const nextSlide = () => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };

        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);

    }, [slides.length]);

    return (
        <main className={`${isDropdownOpen ? 'sign-up-mode' : ''}`}>
            <div className="box">
                <div className="inner-box">
                    <div className="forms-wrap">
                        <form onSubmit={handleSubmit} className="sign-in-form">
                            <Link className="logo" to="/">
                                <img src="img/logo/logo.png" alt="easyclass" />
                                <h4>SMK BUDDHI</h4>
                            </Link>

                            <div className="heading">
                                <h2>Welcome Back</h2>
                                <h6>Not registered yet?</h6>
                                <a href='#signup' className="toggle" onClick={toggleDropdown}> Sign up</a>
                            </div>

                            <div className="actual-form">
                                <div className="input-wrap">
                                    <input
                                        type="text"
                                        className={`input-field ${inputs[0].isActive ? 'active' : ''}`}
                                        onFocus={() => handleInputFocus(inputs[0].id)}
                                        onBlur={() => handleInputBlur(inputs[0].id, inputs[0].value)}
                                        onChange={(e) => {
                                            const updatedInputs = [...inputs];
                                            updatedInputs[0].value = e.target.value;
                                            setInputs(updatedInputs);
                                        }}
                                        required
                                    />
                                    <label>Name</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        className={`input-field ${inputs[1].isActive ? 'active' : ''}`}
                                        onFocus={() => handleInputFocus(inputs[1].id)}
                                        onBlur={() => handleInputBlur(inputs[1].id, inputs[1].value)}
                                        onChange={(e) => {
                                            const updatedInputs = [...inputs];
                                            updatedInputs[1].value = e.target.value;
                                            setInputs(updatedInputs);
                                        }}
                                        required
                                    />
                                    <label>Password</label>
                                </div>

                                {/* <form action="index.html" className="sign-btn" onSubmit={handleSubmit}/> */}

                                <input type="submit" value="Sign Up" className="sign-btn" onSubmit={handleSubmit} />


                                <p className="text">
                                    Forgotten your password or your login details?
                                    <a href="/">Get help</a> signing in
                                </p>
                            </div>
                        </form>

                        <form action="index.html" className="sign-up-form">
                            <Link className="logo" to="/">
                                <img src="img/logo/logo.png" alt="easyclass" />
                                <h4>SMK BUDDHI</h4>
                            </Link>

                            <div className="heading">
                                <h2>Get Started</h2>
                                <h6>Already have an account?</h6>
                                <a href='#signin' className="toggle" onClick={toggleDropdown}> Sign in</a>
                            </div>

                            <div className="actual-form">
                                <div className="input-wrap">
                                    <input
                                        type="text"
                                        className={`input-field ${inputs[2].isActive ? 'active' : ''}`}
                                        onFocus={() => handleInputFocus(inputs[2].id)}
                                        onBlur={() => handleInputBlur(inputs[2].id, inputs[2].value)}
                                        onChange={(e) => {
                                            const updatedInputs = [...inputs];
                                            updatedInputs[2].value = e.target.value;
                                            setInputs(updatedInputs);
                                        }}
                                        required
                                    />
                                    <label>Name</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="email"
                                        className={`input-field ${inputs[3].isActive ? 'active' : ''}`}
                                        onFocus={() => handleInputFocus(inputs[3].id)}
                                        onBlur={() => handleInputBlur(inputs[3].id, inputs[3].value)}
                                        onChange={(e) => {
                                            const updatedInputs = [...inputs];
                                            updatedInputs[3].value = e.target.value;
                                            setInputs(updatedInputs);
                                        }}
                                        required
                                    />
                                    <label>Email</label>
                                </div>

                                <div className="input-wrap">
                                    <input
                                        type="password"
                                        className={`input-field ${inputs[4].isActive ? 'active' : ''}`}
                                        onFocus={() => handleInputFocus(inputs[4].id)}
                                        onBlur={() => handleInputBlur(inputs[4].id, inputs[4].value)}
                                        onChange={(e) => {
                                            const updatedInputs = [...inputs];
                                            updatedInputs[4].value = e.target.value;
                                            setInputs(updatedInputs);
                                        }}
                                        required
                                    />
                                    <label>Password</label>
                                </div>

                                <input type="submit" value="Sign Up" className="sign-btn" />

                                <p className="text">
                                    By signing up, I agree to the
                                    <a href="/">Terms of Services</a> and
                                    <a href="/">Privacy Policy</a>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="carousel">
                        <div className="images-wrapper">
                            {slides.map((slide, index) => (
                                <img
                                    key={index}
                                    src={slide}
                                    className={`image ${index === activeIndex ? 'show' : ''}`}
                                    alt={`Carousel ${index + 1}`}
                                />
                            ))}
                        </div>

                        <div className="text-slider">
                            <div className="text-wrap">
                                <div className="text-group">
                                    <h2>{textData[activeIndex]}</h2>
                                </div>
                            </div>

                            <div className="bullets">
                                {slides.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`${index === activeIndex ? 'active' : ''
                                            }`}
                                        data-value={index + 1}
                                        onClick={() => handleBulletClick(index)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

function LoginPage() {
    // const cookies = new Cookies();

    // const sessionID = cookies.get('sessionID');

    // console.log(sessionID)


    return (
        <div className="LoginPage">
            <LoginStyle />
        </div>
    );
}

export default LoginPage;