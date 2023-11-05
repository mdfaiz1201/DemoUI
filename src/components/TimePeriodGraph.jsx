import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import Upload from './Upload';

function TimePeriodGraph() {
  const [toggle, settoggle] = useState(false)
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const xValues = ['Older', 'Jan 1-08', 'Jan 9-14', 'Jan 14-30', 'Future'];
    const barValues = [3, 6, 9, 5, 8]; 

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.attr('width', width).attr('height', height);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().domain(xValues).range([0, innerWidth]).padding(0.8); 
    const yScale = d3.scaleLinear().domain([0, d3.max(barValues)]).nice().range([innerHeight, 0]);

    
    g.selectAll('rect')
      .data(barValues)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(xValues[i]))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth()) 
      .attr('height', d => innerHeight - yScale(d))
      .attr('fill', 'green')
      .attr('rx', 5) 
      .attr('ry', 5); 

    g
      .append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale));

  }, [toggle]);
  const handleClick =() => {
   settoggle(true)
  }
  
  return (
   <div className='md:w-1/2 rounded-md bg-white'>
      <div className='flex justify-between m-5 mb-3'>
         <h2 className='text-xl font-bold pr-2'>Invoices owed to you</h2>
         <div>
            <button onClick={handleClick} className='text-sm px-3 py-2 rounded-md text-green-500 bg-blue-100 font-bold'>New Sales Invoice</button>
         </div>
      </div>
      <hr/>
      <div className='flex justify-center items-center'>
         {toggle ? <Upload settoggle={settoggle}/> : <svg ref={svgRef}></svg>}
      </div>
   </div>
  );
}

export default TimePeriodGraph;
