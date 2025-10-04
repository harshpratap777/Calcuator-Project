 const display = document.getElementById("display");

    // Allow only numbers, operators, parentheses, control keys, and Shift
    display.addEventListener("keydown", function (e) {
      const allowedKeys = [
        "0","1","2","3","4","5","6","7","8","9",
        "+","-","*","/","(",")",
        "Backspace","Delete","ArrowLeft","ArrowRight","Enter","Shift"
      ];

      // If Enter key pressed, calculate result
      if (e.key === "Enter") {
        e.preventDefault();
        calculateResult();
        return;
      }

      // Block all keys except allowed ones
      if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    });

    // Function to add value by clicking buttons
    function appendValue(value) {
      display.value += value;
      display.focus();
    }

    // Function to clear the display
    function clearDisplay() {
      display.value = "";
      display.focus();
    }

    // Function to calculate result
    function calculateResult() {
      try {
        const expression = display.value.trim();
        if (expression === "") {
          display.value = "Error";
          return;
        }
        const result = eval(expression);
        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    }