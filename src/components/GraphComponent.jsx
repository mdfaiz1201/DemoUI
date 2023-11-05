import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

function GraphComponent() {
  const [numWaves, setNumWaves] = useState(1)
  const [amplitude, setAmplitude] = useState(2)
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg.selectAll('*').remove();

    const width = 400;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.attr('width', width).attr('height', height);

    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    const xValues = d3.range(11, 16.1, 0.1); 

    const yValues = xValues.map((d, i) => amplitude * Math.sin(d) * Math.cos(i / xValues.length * numWaves * 2 * Math.PI));

    const xScale = d3.scaleLinear().domain([11, 16]).range([0, innerWidth]);
    const yScale = d3
      .scaleLinear()
      .domain([-numWaves * amplitude, numWaves * amplitude])
      .range([innerHeight, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(xValues[i]))
      .y(d => yScale(d))
      .curve(d3.curveCardinal.tension(0.5));
    g
      .append('path')
      .datum(yValues)
      .attr('fill', 'none')
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('d', line);

    g
      .append('g')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(
        d3
          .axisBottom(xScale)
          .tickValues(d3.ticks(11, 16, 5))
          .tickFormat(d3.format('d'))
      );
  }, [numWaves, amplitude]);
  
  const handleChange = () => {
   setAmplitude(parseInt(amplitude)*3)
   setNumWaves(parseInt(numWaves)+2)
  }
  return (
    <div className='md:w-1/2 rounded-md bg-white'>
      <div className='flex justify-between m-5'>
         <h2 className='text-xl font-bold pr-2'>Checking account</h2>
         <div>
            <select onChange={handleChange} className='m-1 bg-gray-200 px-2 py-1 rounded'>
               <option>Manage</option>
               <option>option 2</option>
               <option>option 3</option>
            </select>
            <select onChange={handleChange} className='m-1 bg-gray-200 px-2 py-1 rounded'>
               <option>January</option>
               <option>option 2</option>
               <option>option 3</option>
            </select>
         </div>
      </div>
      <hr/>
      <div className='flex justify-center'>
         <svg ref={svgRef}></svg>
      </div>
    </div>
  );
}

export default GraphComponent;
