import { useEffect, useState } from "react"
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"

function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const list = [
        {
            id: 'featured',
            title: "Featured"
        },
        {
            id: 'table-for-two',
            title: "A clone of Open Table"
        },
        {
            id: 'universe-jf',
            title: "A clone of Flickr"
        },
        {
            id: 'ddiy',
            title: "DDIY - Question And Answer Site"
        },
    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(project => (
                    <PortfolioList title={project.title} active={selected === project?.id} setSelected={setSelected} id={project.id} ></PortfolioList>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://astrogram.s3.us-east-2.amazonaws.com/Screen+Shot+2021-08-13+at+6.39.45+AM.png" alt="DDIY" />
                    <h3>DDIY - Question and Answer Site</h3>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
