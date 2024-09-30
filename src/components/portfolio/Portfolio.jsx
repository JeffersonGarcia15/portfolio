import { useEffect, useState } from "react"
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import {
    featuredPortfolio,
    // realBnB,
    // twitterCloneGoLang,
    universeJFPortfolio,
    ddiyPortfolio,
} from "../../data";

function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: 'featured',
            title: "Featured"
        },
        // {
        //     id: 'realBnB',
        //     title: "A clone of AirBnB"
        // },
        // {
        //     id: 'twitter-go',
        //     title: "Twitter with Go/MongoDB"
        // },
        {
            id: 'universe-jf',
            title: "A clone of Flickr"
        },
        {
            id: 'ddiy',
            title: "DDIY - Question And Answer Site"
        },
    ]

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            // case "realBnB":
            //     setData(realBnB)
            //     break
            // case "twitter-go":
            //     setData(twitterCloneGoLang);
            //     break;
            case "universe-jf":
                setData(universeJFPortfolio);
                break;
            case "ddiy":
                setData(ddiyPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(project => (
                    <PortfolioList title={project.title} active={selected === project?.id} setSelected={setSelected} id={project.id} ></PortfolioList>
                ))}
            </ul>
            <div className="container">
                {data.map((data, idx) => (
                    <div className='item' key={idx}>
                        <img src={data.img} alt={data.title} />
                        {/* <h3>{data.title}</h3> */}
                        <a className='a-tag' href={data.url} target="_blank" rel="noreferrer">
                            {data.title}
                        </a>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
