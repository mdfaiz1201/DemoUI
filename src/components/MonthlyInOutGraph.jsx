import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function MonthlyInOutGraph() {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const xValues = ['August', 'September', 'October', 'November', 'December', 'January'];
    const inValues = [3, 6, 9, 5, 8, 7]; 
    const outValues = [2, 4, 7, 3, 6, 5]; 

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.attr('width', width).attr('height', height);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand().domain(xValues).range([0, innerWidth]).padding(0.8); 
    const yScale = d3.scaleLinear().domain([0, d3.max(inValues.concat(outValues))]).nice().range([innerHeight, 0]);

    g.selectAll('.in-bar')
      .data(inValues)
      .enter()
      .append('rect')
      .attr('class', 'in-bar')
      .attr('x', (d, i) => xScale(xValues[i]))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(d))
      .attr('fill', 'green')
      .attr('rx', 5) 
      .attr('ry', 5); 

    g.selectAll('.out-bar')
      .data(outValues)
      .enter()
      .append('rect')
      .attr('class', 'out-bar')
      .attr('x', (d, i) => xScale(xValues[i]))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(d))
      .attr('fill', 'lightgreen')
      .attr('rx', 5) 
      .attr('ry', 5); 

    g
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(xScale));

  }, []);

  return (
   <div className='md:w-1/2 rounded-md bg-white'>
      <div className='flex justify-between m-5'>
         <h2 className='text-xl font-bold pr-2'>Total cash flow</h2>
         <div>
            <span className='rounded inline-block w-3 h-3 bg-green-400'></span><span className='text-xs mx-2'>In</span>
            <span className='rounded inline-block w-3 h-3 bg-green-600'></span><span className='ml-2 text-xs '>Out</span>
         </div>
      </div>
      <hr/>
      <div className=' text-center'>
      <div className='flex justify-center'>
         <svg ref={svgRef}></svg>
      </div>
   </div>
   </div>
  );
}

export default MonthlyInOutGraph;
