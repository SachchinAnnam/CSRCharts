/*
Title: barCharts
Description:This code can be used to create charts using Highcharts.js framework
Author: Sachchin Annam
*/

document.write('<script src="/imisscpl/dw/SiteAssets/Charts/highcharts.js"><\/script>')
document.write('<script src="/imisscpl/dw/SiteAssets/Charts/exporting.js"><\/script>')


// Declare the variables.
var csrCharts = csrCharts || {};
 
csrCharts.colors = ['#612ab3', '#c2242e', '#4876ff','#ffc125','#00406d','#fa3d0d','#cd3700','#ff8247'];
 
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
    return "<div id='container' style='min-width: 1388px; height: 400px; margin: 0 auto'></div>";
}


// Override the footer.
csrCharts.CustomFooter = function () {
  debugger;
  var colors = Highcharts.getOptions().colors;
colors = ['#612ab3', '#c2242e', '#4876ff','#ffc125','#00406d','#fa3d0d','#cd3700','#ff8247'];

Highcharts.chart('container', {

    chart: {
        type: 'column'
    },
    title: {
        text: 'IPL Statistics'
    },
    subtitle: {
        text: 'Season1-5'
    },
    xAxis: {
        categories: csrCharts.ChartTitle,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Points'
        }
    },
  plotOptions: {
                column: {
                    cursor: 'pointer',
                   dataLabels: {
                        enabled: true,
                        color:csrCharts.colors[0],
                        style: {
                            fontWeight: 'bold'
                        },
                        
                    }
                }
            },
    series: [{
        name: 'KKR',
        data: csrCharts.KKR,
        color:colors[0]

    }, {
        name: 'RCB',
        data: csrCharts.RCB,
        color:colors[1]

    }, {
        name: 'RR',
        data: csrCharts.RR,
        color:colors[2]

    }, {
        name: 'CSK',
        data: csrCharts.CSK,
        color:colors[3]

    },{
        name: 'MI',
        data: csrCharts.MI,
        color:colors[4]

    },{
        name: 'DC',
        data: csrCharts.DC,
        color:colors[5]
    },{
        name: 'KXIP',
        data: csrCharts.KXIP,
        color:colors[6]
    },{
        name: 'DD',
        data: csrCharts.DD,
        color:colors[7]
    }

    
    ]
});
return '';

}

$(document).ready(csrCharts.FieldRenderSetup());

