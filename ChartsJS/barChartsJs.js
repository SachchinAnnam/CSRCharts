/*
Title: barCharts
Description:This code can be used to create bar charts using charts.js framework
Author: Sachchin Annam
*/


document.write('<script src="/imisscpl/dw/SiteAssets/Charts/Chart.min.js"><\/script>')

// Declare the variables.
var csrCharts = csrCharts || {};
 
csrCharts.Colors = ['#612ab3', '#c2242e', '#4876ff','#ffc125','#00406d','#fa3d0d','#cd3700','#ff8247'];
 
csrCharts.ChartTitle =[];
csrCharts.KKR = [];
csrCharts.RCB = [];
csrCharts.RR= [];
csrCharts.CSK= [];
csrCharts.MI= [];
csrCharts.DC= [];
csrCharts.KXIP= [];
csrCharts.DD= [];
 
 
csrCharts.Desc = '';
  
// Override the rendering.
csrCharts.FieldRenderSetup = function () {
  
    var override = {};
    override.Templates = {};
    override.Templates.Header = csrCharts.CustomHeader;
    override.Templates.Item = csrCharts.CustomItem;
    override.Templates.Footer = csrCharts.CustomFooter;
  
    SPClientTemplates.TemplateManager.RegisterTemplateOverrides(override);
};
  
 
csrCharts.CustomItem = function (ctx) {
    csrCharts.ChartTitle.push(ctx.CurrentItem.Title);//columns names
    csrCharts.KKR.push(parseInt(ctx.CurrentItem.KKR));//columns names
    csrCharts.RCB.push(parseInt(ctx.CurrentItem.RCB));//columns names
    csrCharts.CSK.push(parseInt(ctx.CurrentItem.CSK));//columns names
    csrCharts.RR.push(parseInt(ctx.CurrentItem.RR));//columns names
    csrCharts.MI.push(parseInt(ctx.CurrentItem.MI));//columns names
    csrCharts.DC.push(parseInt(ctx.CurrentItem.DC));//columns names
    csrCharts.KXIP.push(parseInt(ctx.CurrentItem.KXIP));//columns names
    csrCharts.DD.push(parseInt(ctx.CurrentItem.DD));//columns names

    return '';
}
  
 
csrCharts.CustomHeader = function (ctx) {
    return "<canvas id='lineChart' width='1020' height='500' style='float:left;margin-right:20px;'></canvas>";
}
  
// Override the footer.
csrCharts.CustomFooter = function () {
  
    //debugger;
    var data = {
        labels: csrCharts.ChartTitle,
        datasets: [
        {
            label: "KKR",
            fill: false,
            borderColor: csrCharts.Colors[0],
            pointBorderColor: csrCharts.Colors[0],
            pointBackgroundColor: csrCharts.Colors[0],
            backgroundColor:csrCharts.Colors[0],
            data: csrCharts.KKR
        },
        {
            label: "RCB",
            fill: false,
            borderColor: csrCharts.Colors[1],
            pointBorderColor: csrCharts.Colors[1],
            pointBackgroundColor:csrCharts.Colors[1], 
            backgroundColor:csrCharts.Colors[1],
            data: csrCharts.RCB
        },
        {
            label: "CSK",
            fill: false,
            borderColor: csrCharts.Colors[3],
            pointBorderColor: csrCharts.Colors[3],
            pointBackgroundColor:csrCharts.Colors[3],
            backgroundColor:csrCharts.Colors[3],
            data: csrCharts.CSK
        },
        {
            label: "RR",
            fill: false,
            borderColor: csrCharts.Colors[2],
            pointBorderColor: csrCharts.Colors[2],
            pointBackgroundColor:csrCharts.Colors[2],
            backgroundColor:csrCharts.Colors[2],
            data: csrCharts.RR
        },
         {
            label: "MI",
            fill: false,
            borderColor: csrCharts.Colors[4],
            pointBorderColor: csrCharts.Colors[4],
            pointBackgroundColor:csrCharts.Colors[4],
            backgroundColor:csrCharts.Colors[4],
            data: csrCharts.MI
        },
          {
            label: "DC",
            fill: false,
            borderColor: csrCharts.Colors[5],
            pointBorderColor: csrCharts.Colors[5],
            pointBackgroundColor:csrCharts.Colors[5],
            backgroundColor:csrCharts.Colors[5],
            data: csrCharts.DC
        },
        {
            label: "KXIP",
            fill: false,
            borderColor: csrCharts.Colors[6],
            pointBorderColor: csrCharts.Colors[6],
            pointBackgroundColor:csrCharts.Colors[6],
            backgroundColor:csrCharts.Colors[6],
            data: csrCharts.KXIP
        },
         {
            label: "DD",
            fill: false,
            borderColor: csrCharts.Colors[7],
            pointBorderColor: csrCharts.Colors[7],
            pointBackgroundColor:csrCharts.Colors[7],
            backgroundColor:csrCharts.Colors[7],
            data: csrCharts.DD
        }


        

        ]
    }
  
    // Line chart options.
    var options = {
    responsive: false,
        scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: 10,
        scaleStartValue: 0,
        pointDotRadius: 7,
        datasetFill: false
    };
  
  
    var chart = $('#lineChart').get(0).getContext("2d");
  

    new Chart(chart, {
        type: 'bar',
        data: data,
        options: options
    });
  
  
  
  
    return '';
}
  
$(document).ready(csrCharts.FieldRenderSetup());// JavaScript source code