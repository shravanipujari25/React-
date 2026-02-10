import React from 'react'
import { Bookmark } from "lucide-react"

const Card = ({ job }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={job.brandLogo} alt={job.companyName} />
        <button>Save <Bookmark size={15} /></button>
      </div>

      <div className="center">
        <h3>
          {job.companyName} <span>{job.datePosted}</span>
        </h3>

        <h2>{job.post}</h2>

        <div className="tag">
          <h4>{job.tag1}</h4>
          <h4>{job.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>${job.pay}/hr</h3>
          <p>{job.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
