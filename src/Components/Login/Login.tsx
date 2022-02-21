import { Grid, TextField } from "@mui/material";
import React, { useRef, useLayoutEffect } from "react";

// import Mapglobal from "./Map/Mapglobal"
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import Mapglobal from "./Map/Mapglobal";

const Login = () => {
  // useLayoutEffect(() => {
  //     let root = am5.Root.new("chartdiv");

  // // Set themes
  // // https://www.amcharts.com/docs/v5/concepts/themes/
  // root.setThemes([
  //   am5themes_Animated.new(root)
  // ]);

  // // Create the map chart
  // // https://www.amcharts.com/docs/v5/charts/map-chart/
  // let chart = root.container.children.push(am5map.MapChart.new(root, {
  //   panX: "rotateX",
  //   panY: "rotateY",
  //   projection: am5map.geoOrthographic(),
  //   paddingBottom: 20,
  //   paddingTop: 20,
  //   paddingLeft: 20,
  //   paddingRight: 20
  // }));

  // // Create main polygon series for countries
  // // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
  // let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  //   geoJSON: am5geodata_worldLow
  // }));

  // polygonSeries.mapPolygons.template.setAll({
  //   tooltipText: "{name}",
  //   toggleKey: "active",
  //   interactive: true
  // });

  // polygonSeries.mapPolygons.template.states.create("hover", {
  //   fill: root.interfaceColors.get("primaryButtonHover")
  // });

  // // Create series for background fill
  // // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/#Background_polygon
  // let backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
  // backgroundSeries.mapPolygons.template.setAll({
  //   fill: root.interfaceColors.get("alternativeBackground"),
  //   fillOpacity: 0.1,
  //   strokeOpacity: 0
  // });
  // backgroundSeries.data.push({
  //   geometry: am5map.getGeoRectangle(90, 180, -90, -180)
  // });

  // // Create graticule series
  // // https://www.amcharts.com/docs/v5/charts/map-chart/graticule-series/
  // let graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
  // graticuleSeries.mapLines.template.setAll({ strokeOpacity: 0.1, stroke: root.interfaceColors.get("alternativeBackground") })

  // // Rotate animation
  // chart.animate({
  //   key: "rotationX",
  //   from: 0,
  //   to: 360,
  //   duration: 30000,
  //   loops: Infinity
  // });

  // // Make stuff animate on load
  // chart.appear(1000, 100);
  //   }, []);
  return (
    <>
      <Grid
        container
        padding={4}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={"100vh"}
      >
        <Mapglobal />
        <Grid padding={5}>
          <TextField label="username" />
          <TextField sx={{ marginLeft: "10px" }} label="password" />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
