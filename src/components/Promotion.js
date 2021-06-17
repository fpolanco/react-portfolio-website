import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          <p>{data.promotionPara}</p>
          <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
        </div>
      </div>
    </div>
  )
}

export default Promotion
