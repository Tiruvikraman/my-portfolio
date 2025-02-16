import React from 'react';
import './Work.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import work_data from '../../assets/mywork_data';
import arrow_item from '../../assets/arrow_icon.svg';

const Work = () => {
  return (
    <div id='projects' className="work">
        <div className="work-title">
            <h1>My Works</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="work-cont">
            {work_data.map((work, index) => {
                return (
                    <div key={index} className="work-item">
                        <a href={work.link} target="_blank" rel="noopener noreferrer">
                            <img src={work.w_img} alt={work.w_name} />
                        </a>
                        <h2>{work.w_name}</h2>
                        <p>{work.w_desc}</p>
                    </div>
                );
            })}
        </div>
        <div className="work-showmore">
            <a href='https://github.com/Tiruvikraman/' target="_blank" rel="noopener noreferrer">Show More</a>
            <img src={arrow_item} alt="" />
        </div>
    </div>
  );
};

export default Work;
