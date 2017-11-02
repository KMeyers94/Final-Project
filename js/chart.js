//chart stuffs below

$(function() {
  var myChart = Highcharts.chart("container", {
    chart: {
      type: "area"
    },
    title: {
      text: "Seven Summits"
    },
    subtitle: {
      text: "Bass List"
    },
    xAxis: {
      categories: [
        "Mount Everest", //1
        "Aconcagua", //2
        "Denali", //3
        "Kilimanjaro", //4
        "Mount Elbrus", //5
        "Mount Vinson", //6
        "Mount Kosciuszko" //7
      ]
    },

    yAxis: {
      title: {
        text: "Feet"
      },
      max: 30000
    },
    plotOptions: {
      series: {
        pointWidth: 15
      }
    },
    series: [
      {
        name: "Height",
        data: [
          29029, //1
          22838, //2
          20322, //3
          19341, //4
          18510, //5
          16050, //6
          7310 //7
        ]
      },
      {
        type: "column",
        name: "Prominence",
        data: [
          29029, //1
          22838, //2
          20157, //3
          19308, //4
          15554, //5
          16050, //6
          7310 //7
        ]
      }
    ]
  });
});

