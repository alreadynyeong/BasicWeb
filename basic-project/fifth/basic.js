const $body = document.getElementsByTagName("body");
const $container = document.getElementsByClassName("container");
const $cityList = document.getElementById("cityList");
const $cities = $cityList.getElementsByTagName("li");
const $cityDiv = document.querySelector(".city");

const newCities = Array.from($cities);
newCities.map((city) => console.log(city.innerText));

$body[0].style.backgroundColor = "teal";
$cityDiv.style.color = "grey";

const worstCity = document.createElement("ul");
const worstCityDiv = document.createElement("div");
const worstCitySubTitle = document.createElement("h2");
const worstCityArr = ["Cairo", "London", "Risbon", "Sydney"];

worstCitySubTitle.innerText = "< Worst 5 >";
worstCityDiv.appendChild(worstCitySubTitle);

worstCityArr.map((city) => {
  const worstCityItem = document.createElement("li");
  worstCityItem.innerText = city;
  console.log(worstCityItem);
  worstCity.appendChild(worstCityItem);
});

worstCityDiv.appendChild(worstCity);
$container[0].appendChild(worstCityDiv);

worstCityDiv.classList.add("city");

worstCity.setAttribute("name", "worstCity");

console.log(worstCity);