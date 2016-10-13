var testData = [
		["Email","Flee8@gmu.edu"],
		["Voice","703-209-2548"],
		["Address","4400 University Dr, Fairfax, VA 22030"]
	];

// set up the table
	var table = d3.select("#contact").append("table").attr("class","datatable");
	thead = table.append("thead").append("tr");
	tbody = table.append("tbody");


// first create the table rows (3 needed)

var tr = tbody.selectAll("tr")
		
        .data(testData.filter(function(d,i){
        if (i >= 0 ) {   // don't need the first row
            return d;  
        }}))
        .enter()
        .append("tr");

// Now create the table cells

var td = tr.selectAll("td")
        .data(function(d) {return d; })
        .enter()
        .append("td")
        .text(function(d) {return d;});