// Assuming the search button has an ID of 'search-btn'
// document.getElementById('search-btn').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission

    // var model = document.getElementById('car-make').value; // Get car model from input field
    // const BtnEl =  document.getElementById("search-btn")
    // // API call to fetch car details
    // const apiKey ="Z1T6/P6FYvl/UPfmjwozfw==aSNOr1U3VzThyEzj";

    // const option ={
    //   method: 'GET',
    //   headers:  { 'X-Api-Key': apiKey },
    // };

    //  const apiURL= "https://api.api-ninjas.com/v1/cars?model=" + model;


    // async function carResult(model) {
    //   const response = await fetch(`${apiURL}?model=${model}`, option);
    //   const data = await response.json();
    //   console.log(data);


    // BtnEl.addEventListener("click",search-btn);
    
    
//     $.ajax({
        
//         url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
//         headers: { 'X-Api-Key': 'Z1T6/P6FYvl/UPfmjwozfw==aSNOr1U3VzThyEzj' },
//         contentType: 'application/json',
//         success: function(result) {
//             // Clear previous results
//             document.getElementById('car-results').innerHTML = "";

//             // Check if the result contains data
//             if (result.length > 0) {
//                 // Loop through results and display the car details
//                 result.forEach(function(car) {
//                     var carCard = `
//                         <div class="card bg-light mb-3" style="max-width: 18rem;">
//                           <div class="card-header">${car.make} - ${car.model}</div>
//                           <div class="card-body">
//                             <h5 class="card-title">Year: ${car.year}</h5>
//                             <p class="card-text">Fuel Type: ${car.fuel_type}</p>
//                             <p class="card-text">Transmission: ${car.transmission}</p>
//                             <p class="card-text">Drive: ${car.drive}</p>
//                             <p class="card-text">Cylinders: ${car.cylinders}</p>
//                             <button class="btn btn-primary view-details" data-model="${car.model}">View Details</button>
//                           </div>
//                         </div>
//                     `;

//                     document.getElementById('car-results').innerHTML += carCard;
//                 });

//                 // Add event listener to "View Details" buttons
//                 document.querySelectorAll('.view-details').forEach(function(button) {
//                     button.addEventListener('click', function() {
//                         var selectedModel = this.getAttribute('data-model');
//                         localStorage.setItem('selectedCarModel', selectedModel);
//                         window.location.href = 'car-details.html'; // Redirect to car details page
//                     });
//                 });
//             } else {
//                 document.getElementById('car-results').innerHTML = "<p>No results found</p>";
//             }
//         },
//         error: function ajaxError(jqXHR) {
//             console.error('Error: ', jqXHR.responseText);
//         }
//     });
// });// Assuming the search button has an ID of 'search-btn'
const BtnEl = document.getElementById("search-btn");
const modelInput = document.getElementById('car-make'); // Get car model input field

BtnEl.addEventListener('click', async function(event) {
  event.preventDefault(); // Prevent form submission

  // const model = modelInput.value; // Get car model from input field
  // const apiKey = "Z1T6/P6FYvl/UPfmjwozfw==aSNOr1U3VzThyEzj";
  // const option = {
  //   method: 'GET',
  //   headers: { 'X-Api-Key': apiKey },
  // };
  // const apiURL = `https://api.api-ninjas.com/v1/cars?model=${model}`;

  // try {
  //   const response = await fetch(apiURL, option);
  //   const data = await response.json();
  //   console.log(data);
  //   // You can also call the carResult function here if needed
  //   // carResult(model);
  // } catch (error) {
  //   console.error('Error:', error);
  // }

  $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cars?model=' + model,
    headers: { 'X-Api-Key': 'Z1T6/P6FYvl/UPfmjwozfw==aSNOr1U3VzThyEzj'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
});
