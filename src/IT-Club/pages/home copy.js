import React, { useState } from 'react';
import './../css/home.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss'
import { BrowserRouter as Router } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cookies from "universal-cookie";
import jwt from "jwt-decode";


const login = () => {
    Swal.fire({
        title: "Login",
        html: `<center><table cellpadding="5px">
    <tr>
        <td><label for="username">Username</label></td>
        <td><input type="text" id="username" class="swal2-input" placeholder="Username"></td>
    </tr>
    <tr>
        <td><label for="password">Password</label></td>
        <td><input type="password" id="password" class="swal2-input" placeholder="Password"></td>
    </tr>
    </table></center>`,
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel',
        preConfirm: () => {
            const username = Swal.getPopup().querySelector('#username').value;
            const password = Swal.getPopup().querySelector('#password').value;
            if (!username || !password) {
                Swal.showValidationMessage(`Input all value in the box`)
            }
            return {
                username,
                password
            };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // FOR CLOSE
            // Swal.fire(
            //     'Woopss!',
            //     `  sda`,
            //     'error'
            // )
            // Perform your login logic here
            console.log("Logging in with:", result.value.username, result.value.password);
        }
    });
};

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container">
                <a href="#" className="navbar-brand fs-4 text-white">IT CLUB</a>
                <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="sidebar offcanvas text-dark offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header border-bottom">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">IT CLUB</h5>
                        <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                        <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                            <li className="nav-item mx-2 ">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-2 ">
                                <a className="nav-link active text-white" aria-current="page" href="#">Content</a>
                            </li>
                            <li className="nav-item mx-2 ">
                                <a className="nav-link active text-white" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item mx-2 ">
                                <a className="nav-link active text-white" aria-current="page" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className="d-flex flex-column justify-content-center align-items-center flex-lg-row gap-3">
                            <a href="#" className="text-white" onClick={login}>Login</a>
                            <a href="#" className="text-white text-decoration-none px-3 py-1 rounded-4" style={{ backgroundColor: '#f94ca4' }}>sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function MainSection() {
    return (
        <main className="navbar">
            <section className="w-100 vh-100 d-flex flex-column justify-content-center text-white align-items-center fs-2">
                <h1 style={{ fontSize: '1.5em' }}>Welcome to IT CLUB</h1>
                <h1 style={{ fontSize: '1.5em' }}>Learn Codes</h1>
                <button type="button" className="btn btn-outline-primary text-white">Click here</button>
            </section>
        </main>
    );
}

const cardsData = [
    {
        title: 'HTML',
        subTitle: 'Learn HTML',
        info:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos dolorum aperiam ullam aliquam. Natus vitae nihil incidunt laborum saepe, et libero mollitia illum similique provident omnis laboriosam quasi quibusdam.',
    },
    {
        title: 'CSS',
        subTitle: 'Learn CSS',
        info:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos dolorum aperiam ullam aliquam. Natus vitae nihil incidunt laborum saepe, et libero mollitia illum similique provident omnis laboriosam quasi quibusdam.',
    },
    {
        title: 'JavaScript',
        subTitle: 'Learn JavaScript',
        info:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos dolorum aperiam ullam aliquam. Natus vitae nihil incidunt laborum saepe, et libero mollitia illum similique provident omnis laboriosam quasi quibusdam.',
    },
    {
        title: 'React',
        subTitle: 'Learn React',
        info:
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos dolorum aperiam ullam aliquam. Natus vitae nihil incidunt laborum saepe, et libero mollitia illum similique provident omnis laboriosam quasi quibusdam.',
    },
];

function Card({ title, subTitle, info }) {
    return (
        <div className="col">
            <div className="container">
                <div className="card">
                    <img src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/0f1f62d3-2ba8-488a-8a2b-6d3765890d96/3798494645/notepad-plus-code-editor-for-html-css-javascript-screenshot.png" className="card-img" alt="" />
                    <div className="card-body">
                        <h1 className="card-title text-white">{title}</h1>
                        <p className="card-sub-title text-white">{subTitle}</p>
                        <p className="card-info text-white">{info}</p>
                        <button className="card-btn text-white">Learn Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// function footer() {
//     return (

//     )
// }

function HomeIT() {
    const cookies = new Cookies();
    const [user, setUser] = useState(null);

    const logoutSys = () => {
        setUser(null);
        cookies.remove("jwt_authorization");
    }

    const loginSys = (id, name, password) => {
        const index = jwt(id);
        setUser(index);
        cookies.set("jwt_authorization", id, {
            name: name,
            password: password
        })
    }
    return (
        <Router basename="/itclub">
            <div className="HomeIT">
                <Navbar />
                <MainSection />
                <br />
                <div className="Head-Codes">
                    <h1>
                        <strong>Codes</strong>
                    </h1>
                </div>
                <div className="row row-cols-4 row-cols-sm-2 row-cols-md-4">
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            title={card.title}
                            subTitle={card.subTitle}
                            info={card.info}
                        />
                    ))}
                </div>
                <footer className="kilimanjaro_area">

                </footer>
            </div>
        </Router>
    );
}

export default HomeIT;
