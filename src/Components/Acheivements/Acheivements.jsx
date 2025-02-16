import React, { useState } from 'react';
import './Acheivements.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Acheivements_data from '../../assets/acheive_data';
import arrow_item from '../../assets/arrow_icon.svg';

const Acheivements = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="Acheivements" className="Acheivements">
      <div className="Acheivements-title">
        <h1 className="my-Acheivements">
          My Acheivements
          <img src={theme_pattern} alt="" />
        </h1>
      </div>
      <div className="Acheivements-cont">
        {Acheivements_data.map((achievement, index) => (
          <div key={index} className="Acheivements-format">
            <div className="image-container">
              <img className="imgg" src={achievement.s_no} alt={achievement.s_name} />
            </div>
            <h2>{achievement.s_name}</h2>
            <p className={expandedItems[index] ? "expanded" : ""}>
              {expandedItems[index] ? achievement.s_desc : `${achievement.s_desc.substring(0, 100)}...`}
            </p>
            <div className="Acheivements-readmore" onClick={() => toggleExpand(index)}>
              <p>{expandedItems[index] ? "Read Less" : "Read More"}</p>
              <img src={arrow_item} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acheivements;
