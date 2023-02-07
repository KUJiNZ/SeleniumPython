
  function submitText() {
    var inputText = document.getElementById("inputText1").value;
    if (inputText === "") {
      alert("Please enter a value!");
    } else {
      alert("You entered: " + inputText);
    }
  }
