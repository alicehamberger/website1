<template>
    <div id="graph"></div>
  </template>
  
  <script>
  import * as d3 from 'd3';
  
  export default {
    name: 'NodeGraph',
    mounted() {
      this.createGraph();
    },
    methods: {
      createGraph() {
        const data = [
        { id: 0, label: 'page 0', x: 250, y: 300, path: '/' },
        { id: 1, label: 'creative', x: 300, y: 100, path: '/page1' },
        { id: 2, label: 'tech', x: 100, y: 200, path: '/page2' },
        { id: 3, label: 'links', x: 400, y: 200, path: '/page3' }
          //{ id: 1, label: 'page 1', x: Math.random() * 200, y: Math.random() * 200 },
          //{ id: 2, label: 'page 2', x: Math.random() * 200, y: Math.random() * 200 },
          //{ id: 3, label: 'page 3', x: Math.random() * 200, y: Math.random() * 200 },
          //{ id: 4, label: 'page 4', x: Math.random() * 200, y: Math.random() * 200 }
        ];
  
        const svg = d3.select('#graph').append('svg')
          .attr('width', 800) //bubble size
          .attr('height', 800);
  
        svg.selectAll('circle')
          .data(data)
          .enter().append('circle')
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', 40) //bubble size radius
            .style('fill', 'none')
            //.style('fill-opacity', 0.5)
            .style('stroke', 'green')
            .on('mouseover', function() {
              d3.select(this).transition()
                .duration(500)
                .attr('r', 20);
            })
            .on('mouseleave', function() {
              d3.select(this).transition()
                .duration(500)
                .attr('r', 40);
            })
            .on('click', function(d) { 
              window.location.href = d.path;
            });
  
        svg.selectAll('text')
          .data(data)
          .enter().append('text')
            .attr('x', d => d.x)
            .attr('y', d => d.y)
            .text(d => d.label)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .style('fill', 'white');
  
        const updatePositions = () => {
          data.forEach(d => {
            const dx = (Math.random() - 0.5) * 2;
            const dy = (Math.random() - 0.5) * 2;
            d.x += dx;
            d.y += dy;
          });
  
          svg.selectAll('circle')
            .data(data)
            .attr('cx', d => d.x)
            .attr('cy', d => d.y);
  
          svg.selectAll('text')
            .data(data)
            .attr('x', d => d.x)
            .attr('y', d => d.y);
        };
  
        d3.interval(updatePositions, 1000);
      }
    }
  }
  </script>
  