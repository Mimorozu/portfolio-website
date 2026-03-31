import React from "react"
import Navbar from "./Navbar"

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="home-section">
                <div className="name-wrapper">
                    <div className="firstname">
                        <span className="letter">E</span>
                        <span className="letter">T</span>
                        <span className="letter">H</span>
                        <span className="letter">A</span>
                        <span className="letter">N</span>
                        <svg viewBox="0 0 300 55" width="300">
                            <text x="50%" y="100%" text-anchor="middle">NERWAL</text>
                        </svg>
                    </div>
                    <span className="job-title"> Full Stack Cloud Developer </span>
                </div>

            {/* ========================================= secondary title for smaller screens ================================*/}


                <div className="name-wrapper-for-small-screens">
                    <div className="firstname">
                        <span className="letter">E</span>
                        <span className="letter">T</span>
                        <span className="letter">H</span>
                        <span className="letter">A</span>
                        <span className="letter">N</span>
                    </div>
                    <div className="svg-box">
                            <svg viewBox="0 0 235 70" width="235">
                                <text x="50%" y="100%" text-anchor="middle">NERWAL</text>
                            </svg>
                        </div>
                    <span className="job-title"> Full Stack Cloud Developer </span>
                </div>

            </div>
        </>
    )
}