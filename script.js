const apiKey = "6d90bb33cae11df02679664303eb2671";
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherDiv = document.getElementById("weather");

searchButton.addEventListener("click", ()=>{
    const city = cityInput.value.trim();

    if (city === ""){
        weatherDiv.textContent = "Please enter a city name.";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200){
            weatherDiv.textContent = `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
            return;
        } else {
            weatherDiv.textContent = "City not found. Please try again";
        }
    })
    .catch(()=>{
        weatherDiv.textContent = "Error fetching weather data. Please try again.";
    })
});

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", ()=>{
    const task = taskInput.value.trim();
    if(task === ""){
        alert("Please enter a task.")
    }

    const li = document.createElement("li");
    li.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", ()=>{
        taskList.removeChild(li);
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
});


const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const resultDiv = document.getElementById("result");

addButton.addEventListener("click", ()=>{
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if(isNaN(num1) || isNaN(num2)){
        resultDiv.textContent = "Please enter valid numbers.";
        return;
    }

    const result = num1 + num2;
    resultDiv.textContent = `Result: ${result}`;

});

subtractButton.addEventListener("click", ()=>{
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if(isNaN(num1) || isNaN(num2)){
        resultDiv.textContent = "Please enter valid numbers.";
        return;
    }

    const result = num1 - num2;
    resultDiv.textContent = `Result: ${result}`;

});

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");

let count = 0;

incrementButton.addEventListener("click", ()=> {
    count++;
    countDisplay.textContent = count;

});

decrementButton.addEventListener("click", ()=> {
    count--;
    countDisplay.textContent = count;

});

const button = document.getElementById("changeColorButton");

button.addEventListener("click",()=>{
    randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});