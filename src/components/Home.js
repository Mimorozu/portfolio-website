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
                        <span className="job-title"> Cloud Engineer | Web developer </span>
                </div>

            </div>
        </>
    )
}