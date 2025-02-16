let searchBtn = document.getElementById("search-btn");
let clearBtn = document.getElementById("clear-btn");
let myResult= document.querySelector("#result");

searchBtn.addEventListener("click",  searchCountry);
searchBtn.addEventListener("dbclick",  searchCountry);

searchBtn.addEventListener("click", function() {

});


clearBtn.addEventListener("click", function (){
  document.querySelector(".clear button ").style.display = 'none';
  while(myResult.firstChild!= null){
  myResult.removeChild(myResult.firstChild);
}
});

function searchCountry(){

    let finalURL = `https://meowfacts.herokuapp.com/`;

  
    console.log(finalURL);
    //AJAX request
    let request = new XMLHttpRequest();
  
    request.open(
      //Method
        "GET"
      //URL
    ,  finalURL
    , true);
  
    request.onload = function () {
      if (request.status >= 200 && request.status < 400 ){ 
        let data = JSON.parse(request.responseText);
        displayCountryData(data);
      } else {
        Error("Request failed.");
        
      }
      
    };
  
    request.onerror = function () {
      Error("Request failed.");
    };
  
    request.send();
  };

  
  function displayCountryData(data) {
    result.innerHTML = `
      <h2>${data.data[0]}</h2>
    `;    
    document.querySelector(".clear button ").style.display = 'block';
};
