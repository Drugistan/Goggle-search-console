console.log("okokokoko")

$(function() {
  // Set up pie chart and add data.
  var config = {
    type: 'pie',
    options: {
      legend: {
        display: false
      },
      cutoutPercentage: 0.1,
      animation: {
        animateScale: true
      }
    },
    data: {
      labels: ["mobile", "tablet", "Desktop"],
      machineLabels: ["mobile", "tablet", "Desktop"],
      datasets: [{
        borderWidth: 0,
        backgroundColor: [
          '#800080', // purple
          '#0000FF', // green
          '#00FF00', //green
          
        ],
        data: [20, 30, 40]
      }]
    }
  };

  // Instantiate the pie chart in the canvas element.
  var myPie = new Chart(document.getElementById('progress-charts'), config);
  
  // Register click event to log the clicked label (machine name).
  document.getElementById('progress-charts').onclick = function(evt) {
    var activePoints = myPie.getElementAtEvent(evt);
    var firstPoint = activePoints[0];
    if (firstPoint !== undefined) {
      var clickedItem = config.data.machineLabels[firstPoint._index];
      console.log(clickedItem);
    }
  };
  
  // Add the legend in custom area to allow CSS theming.
  document.getElementById('chart-legend').innerHTML = myPie.generateLegend();
  
  
  
});