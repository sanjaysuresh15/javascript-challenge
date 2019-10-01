// add the data to the file
 let tableData; data 


// select body of html
 let tbody = d3.select("tbody");







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

let button = d3.select("#filter-btn");

button.on("click", function() {
  tbody.html("");
      // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");
    
      // Get the value property of the input element
  let inputValue = inputElement.property("value");
    
    console.log(inputValue);
    console.log(data);
    
  let filteredData = data.filter(data => data.datetime === inputValue);
   
  filteredData.forEach(function(UFO) {
    console.log(UFO);
    let row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
      console.log(key, value);
      let cell = row.append("td");
      cell.text(value);
    });
  }); 
    console.log(filteredData);
    

  })

