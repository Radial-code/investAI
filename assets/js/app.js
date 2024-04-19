// nav bar
const navigation = document.getElementById("nav");
const changeButton = document.getElementById("change");

function toggleNavigationMenu() {
  navigation.classList.toggle("show");
  document.body.classList.toggle("overflow_hidden");
  changeButton.classList.toggle("change");
}

toggleNavigationMenu(); // Example usage, you can call the function as needed
