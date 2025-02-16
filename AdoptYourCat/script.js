//reading user input
let resultBtn = document.getElementById("search-btn");
let nameInp = document.getElementById("name-inp");
let catInp = document.getElementById("cat-inp");
let clearBtn = document.getElementById("clear-btn");

//declaration
let myResult= document.querySelector("#result");
let name = nameInp.value;
let cat = catInp.value;

//adding action listener
nameInp.addEventListener('keydown', function(event) {
  // Check if the pressed key is "Enter"
  if (event.key === 'Enter') {
    loadApi();
  }
});

catInp.addEventListener('keydown', function(event) {
  // Check if the pressed key is "Enter"
  if (event.key === 'Enter') {
    loadApi();
  }
});
resultBtn.addEventListener("click", loadApi )

function loadApi (){
  name = nameInp.value;
  cat = catInp.value;

  let finalURL = `https://api.thecatapi.com/v1/images/search`;

  if (cat.length == 0 || name.length == 0) {
    result.innerHTML = `<h3> input field/s cannot be empty</h3>`;
  } 
  else{
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
      displayData(data);
    } else {
      Error("Request failed.");
      
    }
    
  };

  request.onerror = function () {
    Error("Request failed.");
  };

  request.send();

}
}


resultBtn.addEventListener("click", function() {

});

nameInp.addEventListener("dblclick", function(){
  if(nameInp.value!=""){
      nameInp.value="";
  }
});


catInp.addEventListener("dblclick", function(){
    if(catInp.value!=""){
        catInp.value="";
    }
});

clearBtn.addEventListener("click", function (){
  document.querySelector(".clear button ").style.display = 'none';
  while(myResult.firstChild!= null){
  myResult.removeChild(myResult.firstChild);
}


});


  function displayData(data) {
    result.innerHTML = `
      <img src="${data[0].url}" class="flag-img">
      <h3>hello <Strong>${name}</strong></h3>
      <h3>I'm your cat <strong>${cat}</strong>!</h3>
    `;    

    document.querySelector(".clear button ").style.display = 'block';
};
