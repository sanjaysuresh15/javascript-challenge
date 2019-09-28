// add the data to the file
 let tableData; data 


// select body of html
 let tbody = d3.select("tbody");




// set up columns to call
// let columnarray = ["datetime","city", "state", "country", "shape", "durationMinutes", "comments"]  



   // loop through the data and append rows with UFO data
   data.forEach(function(UFO) {
      console.log(UFO);
      let row = tbody.append("tr");
      Object.entries(UFO).forEach(function([key, value]) {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
      });
    }); 


