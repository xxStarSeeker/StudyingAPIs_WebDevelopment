const searchButton = document.getElementById('searchButton');
const animalNameInput = document.getElementById('animalName');
let animalInfoDiv = document.getElementById('animalInfo');
let clearBtn = document.getElementById("clear-btn");
const name = animalNameInput.value.trim();

//adding action listener
animalNameInput.addEventListener("dblclick", function(){
    if(animalNameInput.value!=""){
        animalNameInput.value="";
    }

  });

clearBtn.addEventListener("click", function (){
    document.querySelector(".clear button ").style.display = 'none';
    while(animalInfoDiv.firstChild!= null){
        animalInfoDiv.removeChild(animalInfoDiv.firstChild);
  }
  animalNameInput.value="";
}
);
animalNameInput.addEventListener('keydown', function(event) {
    // Check if the pressed key is "Enter"
    if (event.key === 'Enter') {
      AnimalInfo(name);
    }
  });
  
searchButton.addEventListener('click', function() {
AnimalInfo();
});

function AnimalInfo(name) {
    name=animalNameInput.value;
    const apiKey = 'yQ6cla0IbzVngyiPHeuy+Q==mJPnR4r62ITUViuW';
    const url = 'https://api.api-ninjas.com/v1/animals?name=' + name;
    if (name.length == 0 ) {
        animalInfoDiv.innerHTML = `<h3> input field cannot be empty</h3>`;
      } 
      else{
  //AJAX request
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.setRequestHeader('X-Api-Key', apiKey);


    xhr.onload = function() {

      if (xhr.status == 200) {
        const data = JSON.parse(xhr.responseText);
        if (data.length > 0 &&  name.length >2) {
            let animal = data[0];
          displayAnimalInfo(animal);
        }else if(name.length<=2){
            animalInfoDiv.innerHTML = `<h3> provide a longer name please to get right details.</h3>`;
          
        }
     else {
        Error("Request failed.");
        animalInfoDiv.innerHTML = `<h3> Enter a valid animal name.</h3>`;
    }
}
    };

    xhr.onerror = function() {
      console.error('Error occurred during the request.');
    
    };

    xhr.send();
  }
  

function displayAnimalInfo(animal) {
  const animalInfoHTML = `
    <h2>${animal.name}</h2>
    <p><strong>Kingdom:</strong> ${animal.taxonomy.kingdom}</p>
    <p><strong>class:</strong> ${animal.taxonomy.class}</p>
    <p><strong>Family:</strong> ${animal.taxonomy.family}</p>
    <p><strong>Location/s:</strong> ${animal.locations}</p>
    <p><strong>Order:</strong> ${animal.taxonomy.order}</p>
    
  `;

  animalInfoDiv.innerHTML = animalInfoHTML;

  document.querySelector(".clear button ").style.display = 'block';
}
}

