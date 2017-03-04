'use strict' 

const svg = d3.select("#container")
                              .append("svg")
                              .attr("width",600)
                              .attr("height",400)

d3.json("world.geojson", createMap);

function createMap(countries){
    var aProjection = d3.geoMercator();
    console.log(countries.features);
    var geoPath = d3.geoPath().projection(aProjection);
    d3.select("svg").selectAll("path").data(countries.features)
      .enter().append("path").attr("d",geoPath).attr("class", "countries");
};


