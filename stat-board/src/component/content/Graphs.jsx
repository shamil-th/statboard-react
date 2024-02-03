import React from 'react';
import GraphCss from './GraphsCss.module.css'
import LineGraph from './LineGraph';
import PieChart from './PieChart';


const Graphs = () => {
  return (
    <div className={GraphCss.graphs}>
        <LineGraph/>
        <PieChart/>
    </div>
  )
}

export default Graphs