const generateButton = document.getElementById("generateButton");
const result = document.getElementById("result");
const genderSelect = document.getElementById("genderSelect");

const displayResult = (res) => {
  const { first_name, last_name, gender } = res;
  result.innerHTML = `${first_name} ${last_name}`;
};

const getRandomName = async () => {
  let res;
  const gender = genderSelect.value.toLowerCase();
  res = await fetch(`http://localhost:5000/random-name/${gender}`);
  const res_1 = await res.json();
  console.log(res_1);
  displayResult(res_1);
};

generateButton.addEventListener("click", getRandomName);
