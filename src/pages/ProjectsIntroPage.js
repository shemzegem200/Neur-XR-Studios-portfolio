import React from 'react'
import myimage from '../images/proj_intro_img.jpeg'

function ProjectsIntroPage() {
  return (
    <div className="intropage" id='intro-proj'>

        <div className="intropagepic-2">
            <img src={myimage} alt="My Image" />

            <div className='outer-text'>
                <div className="intro-subtext-2">
                    Our Projects
                </div>
            </div>

        </div>

        
    </div>
  )
}

export default ProjectsIntroPage