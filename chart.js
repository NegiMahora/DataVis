$(function () {  
        $('#highchart').highcharts({
            colors: ["#ED3B1C"],
                chart: {type:'area',
                        style: {
                            fontFamily: "Radiance"
                        }
                    }, 
                title: {text: 'Número de jogadores por mês'}, 
                xAxis: {type: 'datetime',
                    minRange: 47 * 30 * 24 * 3600000 
                },
                yAxis: {title: {text: 'Número médio de jogadores'}},
                tooltip: {
                        xDateFormat: '%d - %m - %Y',
                        formatter: function() {
                                var index = this.series.xData.indexOf(this.x);
                                var prevPoint = this.series.yData[index-1];
                                var value = 'A quantidade média de jogadores no mês de ' + Highcharts.dateFormat('%b - %Y',this.point.x) + ' é de <b>' + this.point.y.toLocaleString() + '</b>';
                                if(prevPoint){
                                    value += '<br> e o aumento do número de jogadores desde o último mês é de <b>' + (((this.point.y - prevPoint)/this.point.y)*100).toFixed(2)  + '%</b>.';
                                }
                                return value;
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, '#ED3B1C'],
                                [1, '#FFFFFF']
                            ]
                        },
                        lineWidth: 1,
                        marker: {
                            enabled: false
                        },
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series:
                [
                    {
                        pointInterval: 31 * 24 * 3600 * 1000,
                        pointStart: Date.UTC(2012, 6, 1),
                        data:[
                             52721,
                             55768,
                             61867,
                             75965,
                             101077,
                             121924,
                             147748,
                             166973,
                             180879,
                             174835,
                             194363,
                             210224,
                             237800,
                             330720,
                             312424,
                             329677,
                             348246,
                             366606,
                             393860,
                             421114,
                             409755,
                             421710,
                             482387,
                             513783,
                             537018,
                             490883,
                             477998,
                             495693,
                             528789,
                             523940,
                             558504,
                             628970,
                             571713,
                             526061,
                             580348,
                             568448,
                             554991,
                             606944,
                             508158,
                             521941,
                             539536,
                             573344,
                             612174,
                             709178,
                             672554,
                             656944,
                             623798
                        ]
                    }
                ] 
        }); 
});