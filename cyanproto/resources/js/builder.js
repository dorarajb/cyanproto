	function processdata1(jsondata){

		var pjdata = jQuery.parseJSON(JSON.stringify(jsondata));
		var hddata = $('<div/>').html(pjdata).text();
		var srdata = hddata.replace(/u/g, '');
		srdata = srdata.replace(/'/g, '');
		
		srdata = srdata.replace(/{/g, '');
		srdata = srdata.replace(/}/g, '');
		var ardata = [];
		var ardata1 = srdata.split(',');
		var miny=0, maxy=0, minx=0, maxx=0;
		var tempardata = ardata1[0].split(':');
		
		minx = parseInt(tempardata[0]);
		miny = parseInt(tempardata[1]) * 1000;
		for (i=0; i<ardata1.length; i++) {
			var ardata2 = ardata1[i].split(':');
			ardata2[0] = parseInt(ardata2[0]);
			if (ardata2[0] > 0) { 
				if (ardata2[0] > maxx) {
					maxx = ardata2[0];
				}
				if (ardata2[0] < minx) {
					minx = ardata2[0];
				}
				ardata2[1] = parseInt(ardata2[1]) * 1000;
				if (ardata2[1] > maxy) {
					maxy = ardata2[1];
				}
				if (ardata2[1] < miny) {
					miny = ardata2[1];
				}
				ardata.push(ardata2);
			}
		}
		
		var options = {
			xaxis: {show: false,  min: (minx - 2), max: (maxx + 2)},
			yaxis: {show: false, mode: 'time', min: (miny - miny/4000), max: (maxy + maxy/4000)},
			grid: {show: false, hoverable: true, clickable: false},
			lines: {show: true, color: "yellow"},
            points: {show: true}
		};
		
		var data = [{data: ardata}];
		$.plot($("#spark1"), data, options);
		
		var previousPoint = null;
	    $("#spark1").bind("plothover", function (event, pos, item) {

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    var value1 = item.datapoint[0].toFixed(0);
                    var timestamp1 = dddash.format_timestamp(item.datapoint[1], 'instant');
                    $("#value1").html(value1);
                    $("#timestamp1").html(timestamp1);
                }
            }
            else {
                $("#value1").html("645");
                $("#timestamp1").html('&nbsp;');
                previousPoint = null;            
            }
	    });

	    $("#spark1").bind("plotclick", function (event, pos, item) {
	        if (item) {
	            plot.highlight(item.series, item.datapoint);
	        }
	    });
	}

	
	function processdata2(jsondata){

		var pjdata = jQuery.parseJSON(JSON.stringify(jsondata));
		var hddata = $('<div/>').html(pjdata).text();
		var srdata = hddata.replace(/u/g, '');
		srdata = srdata.replace(/'/g, '');
		
		srdata = srdata.replace(/{/g, '');
		srdata = srdata.replace(/}/g, '');
		var ardata = [];
		var ardata1 = srdata.split(',');
		var miny=0, maxy=0, minx=0, maxx=0;
		var tempardata = ardata1[0].split(':');
		
		minx = parseInt(tempardata[0]);
		miny = parseInt(tempardata[1]) * 1000;
		for (i=0; i<ardata1.length; i++) {
			var ardata2 = ardata1[i].split(':');
			ardata2[0] = parseInt(ardata2[0]);
			if (ardata2[0] > 0) { 
				if (ardata2[0] > maxx) {
					maxx = ardata2[0];
				}
				if (ardata2[0] < minx) {
					minx = ardata2[0];
				}
				ardata2[1] = parseInt(ardata2[1]) * 1000;
				if (ardata2[1] > maxy) {
					maxy = ardata2[1];
				}
				if (ardata2[1] < miny) {
					miny = ardata2[1];
				}
				ardata.push(ardata2);
			}
		}
		
		var options = {
			xaxis: {show: false,  min: (minx - 2), max: (maxx + 2)},
			yaxis: {show: false, mode: 'time', min: (miny - miny/4000), max: (maxy + maxy/4000)},
			grid: {show: false, hoverable: true, clickable: true},
			lines: {show: true, color: "yellow"}
		};
		
		var data = [{data: ardata}];
		$.plot($("#spark2"), data, options);
		
		var previousPoint = null;
	    $("#spark2").bind("plothover", function (event, pos, item) {
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    var value2 = item.datapoint[0].toFixed(0);
                    var timestamp2 = dddash.format_timestamp(item.datapoint[1], 'instant');
                    $("#value2").html(value2);
                    $("#timestamp2").html(timestamp2);
                }
            }
            else {
                $("#value2").html("645");
                $("#timestamp2").html('&nbsp;');
                previousPoint = null;            
            }
	    });

	    $("#spark2").bind("plotclick", function (event, pos, item) {
	        if (item) {
	            plot.highlight(item.series, item.datapoint);
	        }
	    });

	}

	function processdata3(jsondata){

		var pjdata = jQuery.parseJSON(JSON.stringify(jsondata));
		var hddata = $('<div/>').html(pjdata).text();
		var srdata = hddata.replace(/u/g, '');
		srdata = srdata.replace(/'/g, '');
		
		srdata = srdata.replace(/{/g, '');
		srdata = srdata.replace(/}/g, '');
		var ardata = [];
		var ardata1 = srdata.split(',');
		var miny=0, maxy=0, minx=0, maxx=0;
		var tempardata = ardata1[0].split(':');
		
		minx = parseInt(tempardata[0]) * 1000;
		miny = parseInt(tempardata[1]);
		for (i=0; i<ardata1.length; i++) {
			var ardata2 = ardata1[i].split(':');
			ardata2[0] = parseInt(ardata2[0]);
			if (ardata2[0] > 0) { 
				ardata2[0] = parseInt(ardata2[0]) * 1000;
				if (ardata2[0] > maxx) {
					maxx = ardata2[0];
				}
				if (ardata2[0] < minx) {
					minx = ardata2[0];
				}
				if (ardata2[1] > maxy) {
					maxy = ardata2[1];
				}
				if (ardata2[1] < miny) {
					miny = ardata2[1];
				}
				ardata.push(ardata2);
			}
		}
		var options = {
			xaxis: {show: false, mode: 'time', min: (minx - minx/400), max: (maxx + maxx/400)},
			yaxis: {show: false},
			grid: {show: false, hoverable: true, clickable: true},
			bars: {show: true, barWidth:20*24*60*60*1000, fillColor:"yellow", lineWidth:0, align:"center"}
		};
		
		var data = [{data: ardata}];
		$.plot($("#spark3"), data, options);
		
		var previousPoint = null;
	    $("#spark3").bind("plothover", function (event, pos, item) {
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    var value3 = item.datapoint[1].toFixed(0);
                    var timestamp3 = dddash.format_timestamp(item.datapoint[0], 'instant');
                    $("#value3").html(value3);
                    $("#timestamp3").html(timestamp3);
                }
            }
            else {
                $("#value3").html("25");
                $("#timestamp3").html('&nbsp;');
                previousPoint = null;            
            }
	    });

	    $("#spark3").bind("plotclick", function (event, pos, item) {
	        if (item) {
	            plot.highlight(item.series, item.datapoint);
	        }
	    });

	}

	function processdata4(jsondata){

		var pjdata = jQuery.parseJSON(JSON.stringify(jsondata));
		var hddata = $('<div/>').html(pjdata).text();
		var srdata = hddata.replace(/u/g, '');
		srdata = srdata.replace(/'/g, '');
		
		srdata = srdata.replace(/{/g, '');
		srdata = srdata.replace(/}/g, '');
		var ardata = [];
		var ardata1 = srdata.split(',');
		var miny=0, maxy=0, minx=0, maxx=0;
		var tempardata = ardata1[0].split(':');
		
		minx = parseInt(tempardata[0]) * 1000;
		miny = parseInt(tempardata[1]);
		for (i=0; i<ardata1.length; i++) {
			var ardata2 = ardata1[i].split(':');
			ardata2[0] = parseInt(ardata2[0]);
			if (ardata2[0] > 0) { 
				ardata2[0] = parseInt(ardata2[0]) * 1000;
				if (ardata2[0] > maxx) {
					maxx = ardata2[0];
				}
				if (ardata2[0] < minx) {
					minx = ardata2[0];
				}
				if (ardata2[1] > maxy) {
					maxy = ardata2[1];
				}
				if (ardata2[1] < miny) {
					miny = ardata2[1];
				}
				ardata.push(ardata2);
			}
		}
		var options = {
				xaxis: {show: false, mode: 'time', min: (minx - minx/400), max: (maxx + maxx/400)},
				yaxis: {show: false},
				grid: {show: false, hoverable: true, clickable: true},
				bars: {show: true, barWidth:7*24*60*60*1000, fillColor:"yellow", lineWidth:0, align:"center"}
			};		

		var data = [{data: ardata}];
		$.plot($("#spark4"), data, options);
		
		var previousPoint = null;
	    $("#spark4").bind("plothover", function (event, pos, item) {
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    var value4 = item.datapoint[1].toFixed(0);
                    var timestamp4 = dddash.format_timestamp(item.datapoint[0], 'instant');
                    $("#value4").html(value4);
                    $("#timestamp4").html(timestamp4);
                }
            }
            else {
                $("#value4").html("7");
                $("#timestamp4").html('&nbsp;');
                previousPoint = null;            
            }
	    });

	    $("#spark4").bind("plotclick", function (event, pos, item) {
	        if (item) {
	            plot.highlight(item.series, item.datapoint);
	        }
	    });

	}