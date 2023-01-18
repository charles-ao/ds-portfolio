import React from "react";
import { useGlobalContext } from "../../Context";
const Portfolio = () => {
    const {data, showFrontendProjects, showAllProjects, showDataProjects, expandData, collapseData,expansion} = useGlobalContext()
    


  return (
    
      <div className="portfolio" id="portfolio">
        <div className="portfolio-head">
            <div className="portfolio-head-name">
                <h5>Portfolio</h5>
            </div>
            <div className="portfolio-head-quote">
                <h5>“In God we trust, all others must bring Data”</h5>
            </div>
        </div>
        <div className="portfolio-body">
            <div className="portfolio-filter">
                <div className="portfolio-filter-item active" onClick={showAllProjects} ><p>ALL</p></div>
                <div className="portfolio-filter-item" onClick={showDataProjects} ><p>DATA</p></div>
                <div className="portfolio-filter-item" onClick={showFrontendProjects} ><p>FRONTEND</p></div>
            </div>
            <div className="portfolio-body-content">
                <div className="portfolio-body-content-section">
                    {
                        data.map((project, index) => ( 
                            <div className="portfolio-card" key={index}>
                                <img src={project.img} alt="portfolio" className="portfolio-image"/>
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <div className="overlay-content-top">
                                            <h6>{project.title}</h6>
                                            <div className="overlay-content-top-tools">
                                                {project.tool.map((eachTool, index) => (
                                                    <div key={index} className="overlay-tool">{eachTool}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="overlay-content-middle">
                                            <p> {project.detail}
                                            </p>
                                        </div>
                                        <div className="overlay-content-bottom">
                                            <div className="btn"><span>View</span></div>
                                            <div className="btn"><span>Code</span></div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        ))
                    }
                    
                </div>
                <div className="trimmer" onClick={expansion? collapseData : expandData}><span>{expansion? "Collapse":"Show More"}</span></div>
            </div> 
        </div>
      </div>
  )
}

export default Portfolio;

