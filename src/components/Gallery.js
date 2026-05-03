import React from "react"
import Navbar from "./Navbar"

export default function Gallery() {

    const projects = [
        {
            number: "01",
            title: "Business Directory",
            tech: "PHP · SQL · AWS",
            image: "/kweScreenShot.png",
            url: "https://www.kitchenworktopexperts.co.uk/"

        },
        {
            number: "02",
            title: "Claim Management System",
            tech: "React · CRUD · CI/CD pipeline",
            image: "/project2.png", // Replace with your image
            url: "https://claims-record-manager.vercel.app/login"
        },
        {
            number: "03",
            title: "B2B Marketplace - in prodcuction",
            tech: "React · Node.js · MongoDB",
            image: "/project2.png", // Replace with your image
            url: ""
        },
    ];

    return (
        <>
            <Navbar />

            <div className="gallery-flex-cont">
                {projects.map((project, index) => (
                     <a 
                     className="gallery-a-tag" 
                     href={project.url}
                     key={index}>
                        <div className="project-card">
                            <h2 className="project-number">{project.number}</h2>
                            <h3 className="project-title">{project.title}</h3>
                            <span className="project-tech">{project.tech}</span>
                        </div>
                     </a>
                ))}
            </div >
        </>
    )
}