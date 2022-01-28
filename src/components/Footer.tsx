import React from "react";

const Footer = () => {
    return (
        <footer className="min-w-full bg-gray-900 text-white text-center py-6">
            <div>
                Challenge by{" "}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor
                </a>
            </div>
            <div>
                Coded by{" "}
                <a
                    href="https://camilomujica.one"
                    className="text-fmPurple-light hover:underline"
                >
                    Camilo Mujica
                </a>
            </div>
        </footer>
    );
};

export default Footer;
