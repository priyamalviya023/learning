google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
      var data = new google.visualization.DataTable();
    

     var data = google.visualization.arrayToDataTable([
          ['month', 'yellow', 'black'],
          ['Jan',  20000,     38000],
          ['feb',  35000,      24000],
          ['Mar',  21000,     22220],
          ['Apr',  20030,      23540],
        
        ]);

      var options = {
        Title:"Social overview",
        hAxis: {
          title: ''
        },
        vAxis: {
          title: ''
        },
       
         
         curveType:'function',
        
          colors: ['yellow', 'black']
          
         
     
        
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
    google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
     var data = google.visualization.arrayToDataTable([
          ['day', 'yellow'],
          ['S',  3],
          ['M',  2],
          ['T',  6.4],
          ['W',  3],
          ['T' ,  5.3],
           ['F' ,  4.6],
           ['S' ,  5.6],
        
        ]);

      var options = {
      
        backgroundColor: 'white',
        colors:['yellow']
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_week'));
      chart.draw(data, options);
    }
    google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

 
        var data = google.visualization.arrayToDataTable([
          ['day', 'yellow'],
          ['S',  0.3],
          ['M',  0.5],
          ['T',  1.0],
          ['W',  1.2],
          ['T' , 1.0],
           ['F' ,  0.6],
           ['S' ,  1.0],
        
        ]);
      var options = {
        title: 'Motivation Level Throughout the Day',
       vaxis:
       { 
            title: 'Time of Day',
          format: 'number',
          viewWindow: {
            min: [0.7],
            max: [1.5]
          }
       
          },
        colors:["yellow","black"]
        
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_s'));

      chart.draw(data, options);
    }
  