import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './Graphs.scss'

const Graphs = ({ data }) => {

    const fixGraphData = (fixData) => {

        const tmpList = [...fixData]

        const newList = tmpList.map((obj) => {
            return ({ region: obj.region })
        })

        const regionesList = [
            'METROPOLITANA',
            'NORTE',
            'NOR-ORIENTE',
            'SUR-ORIENTE',
            'CENTRAL',
            'SUR-OCCIDENTE',
            'NOR-OCCIDENTE',
            'PETEN',
        ]
        
        const finalList = regionesList.map((item) => {
            
            let count = 0
            newList.forEach(obj => {
                if (obj.region === item) {
                    count++
                }
            })

            return ({ 
                region: item,
                incidencias: +count
             })
        })


        let fixedData = finalList || []
        return fixedData
    }

    const createGraph = (iData) => {
        /* Chart code */
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        let chart = am4core.create("chartdiv", am4charts.XYChart);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

        chart.data = iData;

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "region";
        categoryAxis.renderer.minGridDistance = 40;
        categoryAxis.fontSize = 11;

        let maxList = iData.map(obj => obj.incidencias)

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.max = (maxList);
        valueAxis.strictMinMax = true;
        valueAxis.renderer.minGridDistance = 30;

        // axis break
        // let axisBreak = valueAxis.axisBreaks.create();
        // axisBreak.startValue = 2100;
        // axisBreak.endValue = 22900;
        //axisBreak.breakSize = 0.005;

        // fixed axis break
        //let d = (axisBreak.endValue - axisBreak.startValue) / (valueAxis.max - valueAxis.min);
        // axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height

        // make break expand on hover
        // let hoverState = axisBreak.states.create("hover");
        // hoverState.properties.breakSize = 1;
        // hoverState.properties.opacity = 0.1;
        // hoverState.transitionDuration = 1500;

        // axisBreak.defaultState.transitionDuration = 1000;

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = "region";
        series.dataFields.valueY = "incidencias";
        series.columns.template.tooltipText = "{valueY.value}";
        series.columns.template.tooltipY = 0;
        series.columns.template.strokeOpacity = 0;

        // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
        series.columns.template.adapter.add("fill", function(fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
        });

    }


    useEffect(() => {
        if (data && data.length > 0 ) {
            createGraph(fixGraphData(data))
        }
    }, [data])
    
    return(
        <div className="grafica" id="chartdiv">
            
        </div>
    )
}

export default Graphs