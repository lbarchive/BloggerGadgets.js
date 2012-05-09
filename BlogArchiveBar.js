// Copyright 2012 Yu-Jie Lin
// MIT License

// Prepare Google Visualization and jQuery
google.load("visualization", "1", {packages:["corechart"]});
var jQuery;
if (!jQuery)
  google.load("jquery", "1");

// Draw function
function draw_BlogArchiveBar() {

  var items = window.BlogArchiveBarItems;
  if (!items) {
    items = $.map($('div.BlogArchive option'), function(item, idx){
      var $item = $(item);
      var text = $item.text().replace(/ \(\d+\)$/, '');
      var count = parseInt($item.text().replace(/.* \(/, '').replace(')', ''));
      var href = $item.val();
      if (!href)
        return null
      return [[text, count, href]];
    });
  }

  $('#ArchiveList').empty().append($('<div/>').attr('id', 'BlogArchiveBarChart'));

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Item');
  data.addColumn('number', 'Posts');
  for (idx in items) {
    data.addRow([items[idx][0], items[idx][1]]);
  }

  var options = {
    backgroundColor: {
      fill: 'none'
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "100%"
    },
    hAxis: {
      direction: -1,
      textPosition: 'none'
    },
    height: 100,
    legend: {
      position: 'none'
    },
    series: {
      0: {color: '#aaa'}
    },
    vAxis: {
      gridlines: {count: 0},
      textPosition: 'none'
    }
  }
  $.extend(true, options, window.BlogArchiveBarOptions);
  // Process gadget options
  if (options.BlogArchiveBar) {
    if (options.BlogArchiveBar.bar_width)
      options.width = options.bar_width * items.length;
    options.BlogArchiveBar = undefined;
    }

  var chart = new google.visualization.ColumnChart(document.getElementById('BlogArchiveBarChart'));
  google.visualization.events.addListener(chart, 'select', function(){
    location.href = items[chart.getSelection()[0].row][2];
  });
  chart.draw(data, options);
}

google.setOnLoadCallback(draw_BlogArchiveBar);
