import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { sectors } from "../../Utils/Menu"
import SectorList from "./SectorList"
import "./sector.css"

const DynamicSectors = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [sector, setSector] = useState(null)

  useEffect(() => {
    if (!id || id === "our-work") {
      const defaultSector = sectors.find((sec) => sec.href === "research")
      if (defaultSector) {
        setSector(defaultSector)
      } else {
        navigate("/not-found")
      }
    } else {
      const selectedSector = sectors.find((sec) => sec.href === id)
      if (selectedSector) {
        setSector(selectedSector)
      } else {
        navigate("/not-found")
      }
    }
  }, [id, navigate])

  if (!sector) {
    return <div>Loading...</div>
  }

  return (
    <>
          <div className="about_we">
  <img src="/what_we_do.JPG" alt="About us" className="about_hero_image" />
  <h1 className="about_hero_text">What We Do</h1>
</div>
    <div className="main-sections">
 

      <div className="list_sections">
        <div>
          <h3>
            {" "}
            <span>What We Do</span>
          </h3>
        </div>
        <SectorList />
      </div>
      <div className="details_sector">
        <div className="sector-banner">
          <h3>
            <span className="title_details">
              {sector.icon}&nbsp;{sector.name}
            </span>
          </h3>
          <span className="summary">{sector.summary}</span>
          <div className="details">
            <h4>Objectives</h4>
            <ul>
              {sector.objectives.map((item, idx) => (
                <li key={idx} className="items_details">
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <h4>Action Plan</h4>
              {sector.actions}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default DynamicSectors
