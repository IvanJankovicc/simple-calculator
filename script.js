// Wait until the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const num1Input = document.getElementById('num1');
  const num2Input = document.getElementById('num2');
  const calcBtn   = document.getElementById('calculateBtn');
  const resultDiv = document.getElementById('result');

  calcBtn.addEventListener('click', () => {
    // Parse the input values as numbers
    const a = parseFloat(num1Input.value);
    const b = parseFloat(num2Input.value);

    if (isNaN(a) || isNaN(b)) {
      resultDiv.textContent = 'Result: please enter valid numbers';
      return;
    }

    // Perform calculation (addition)
    const sum = a + b;

    // Update the page
    resultDiv.textContent = `Result: ${sum}`;
  });
});
