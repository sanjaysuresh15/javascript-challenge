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
// select the filter button to be where you click to filter
let button = d3.select("#filter-btn");

button.on("click", function() {
  // clear the field for only the input value
  tbody.html("");
      // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");
    
      // Get the value property of the input element
  let inputValue = inputElement.property("value");
    

  // print the data value that you put in
    console.log(inputValue);
    console.log(data);
    // filter the datetime field for the input value
  let filteredData = data.filter(data => data.datetime === inputValue);
  //  run through the data for only the filtered value and print the rows in the table body
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

