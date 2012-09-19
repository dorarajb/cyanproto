	function processdata1(jsondata){

		var pjdata = jQuery.parseJSON(JSON.stringify(jsondata));
		var hddata = $('<div/>').html(pjdata).text();
		var srdata = hddata.replace(/u/g, '');
		srdata = srdata.replace(/'/g, '');
		
		srdata = srdata.replace(/{/g, '');
		srdata = srdata.replace(/}/g, '');
		var ardata = [];
		var xticks = [];
		var ardata1 = srdata.split(',');
		for (i=0; i<ardata1.length; i++) {
			var ardata2 = ardata1[i].split(':');
			ardata2[0] = parseInt(ardata2[0]);
			if (ardata2[0] > 0) { 
				ardata2[1] = parseInt(ardata2[1]) * 1000;
				ardata.push(ardata2);
				xticks.push([ardata2[0], ardata2[0].toString()]);
			}
		}
		
		var options = {
			xaxis: {show: false, ticks:xticks},
			yaxis: {show: false, mode: 'time', min: 1300000000000, max: 1400000000000},
			grid: {show: true, hoverable: true, clickable: true},
			lines: {show: true, color: "yellow"},
            points: {show: true}
		};
		
		var data = [{data: ardata}];
		$.plot($("#placeholder1"), data, options);
		
		var previousPoint = null;
	    $("#placeholder1").bind("plothover", function (event, pos, item) {

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    $("#tooltip1").remove();
                    var x = item.datapoint[0].toFixed(0);
                    var dt = new Date(parseInt(item.datapoint[1]));
                    showTooltip(item.pageX, item.pageY, "Build: " + x + "<br> Time: " + dt.toUTCString());
                }
            }
            else {
                $("#tooltip1").remove();
                previousPoint = null;            
            }
	    });

	    $("#placeholder1").bind("plotclick", function (event, pos, item) {
	        if (item) {
	            plot.highlight(item.series, item.datapoint);
	        }
	    });

	    function showTooltip(x, y, contents) {
	        $('<div id="tooltip1">' + contents + '</div>').css( {
	            position: 'absolute',
	            display: 'none',
	            top: y + 5,
	            left: x + 5,
	            border: '1px solid #fdd',
	            padding: '2px',
	            'background-color': '#fee',
	            opacity: 0.80
	        }).appendTo("body").fadeIn(200);
	    }
	}

	
	function processdata2(jsondata){

		var pjdata = jQuery.parseJSON(JSON.stringify(jsondata));
		var hddata = $('<div/>').html(pjdata).text();
		var srdata = hddata.replace(/u/g, '');
		srdata = srdata.replace(/'/g, '');
		
		srdata = srdata.replace(/{/g, '');
		srdata = srdata.replace(/}/g, '');
		var ardata = [];
		var xticks = [];
		var ardata1 = srdata.split(',');
		for (i=0; i<ardata1.length; i++) {
			var ardata2 = ardata1[i].split(':');
			ardata2[0] = parseInt(ardata2[0]);
			if (ardata2[0] > 0) { 
				ardata2[1] = parseInt(ardata2[1]) * 1000;
				ardata.push(ardata2);
				xticks.push([ardata2[0], ardata2[0].toString()]);
			}
		}
		
		var options = {
			xaxis: {show: false, ticks:xticks},
			yaxis: {show: false, mode: 'time', min: 1300000000000, max: 1400000000000},
			grid: {show: true, hoverable: true, clickable: true},
			lines: {show: true, color: "black"}
		};
		
		var data = [{data: ardata}];
		$.plot($("#placeholder2"), data, options);
		
		var previousPoint = null;
	    $("#placeholder2").bind("plothover", function (event, pos, item) {

            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    $("#tooltip2").remove();
                    var x = item.datapoint[0].toFixed(0);
                    var dt = new Date(parseInt(item.datapoint[1]));
                    showTooltip(item.pageX, item.pageY, "Build: " + x + "<br> Time: " + dt.toUTCString());
                }
            }
            else {
                $("#tooltip2").remove();
                previousPoint = null;            
            }
	    });

	    $("#placeholder2").bind("plotclick", function (event, pos, item) {
	        if (item) {
	            plot.highlight(item.series, item.datapoint);
	        }
	    });

	    function showTooltip(x, y, contents) {
	        $('<div id="tooltip2">' + contents + '</div>').css( {
	            position: 'absolute',
	            display: 'none',
	            top: y + 5,
	            left: x + 5,
	            border: '1px solid #fdd',
	            padding: '2px',
	            'background-color': '#fee',
	            opacity: 0.80
	        }).appendTo("body").fadeIn(200);
	    }
	}
