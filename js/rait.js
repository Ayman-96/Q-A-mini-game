// This runs when the page finishes loading
window.addEventListener('DOMContentLoaded', () => {
    // Clear localStorage only on this page load
    localStorage.clear();
});

// Make the inputs readOnly and visible buttons
const inputElement = document.querySelectorAll('.input-answer');
const raitButtons = document.querySelectorAll('.rait-buttons-container');
const submitBtn = document.querySelector('.submit');

if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    inputElement.forEach((input) => {
      input.style.color = 'grey';
      input.style.fontWeight = 'bold';
      input.readOnly = true;
    });

      // Show rait buttons
    raitButtons.forEach((element) => {
      element.style.display = 'inline-block';
    });

    submitBtn.classList.add('second-submit');
    document.querySelector('.second-submit').addEventListener('click', () => {
      localStorage.setItem('data',JSON.stringify(data));
      window.location.href = "results.html";
    });

    // Header updates
    document.getElementById("subtitle").innerHTML = 'Time to Rait on Your answers Mate!';
    document.getElementById("paragraph").innerHTML = 'Now it’s your turn to rait your partners raits, be fair and realistic, also enjoy together because it’s Fantastic!<br>Please consider the Rules before starting to judge.';
    document.getElementById("ul").innerHTML = 'Let them know about WHY & HOW you rait, enjoy the Experience together!';
    document.getElementById("rait-rule").innerHTML = 'REMEMBER: once you raited any answer, there will be no way changing it.';
  }
)};

  

// Data of raitings
export const data = JSON.parse(localStorage.getItem('data')) || {
  overallRaitings: 0,
  correct: 0,
  wrong: 0,
  zero: 0,       // ✅ added missing key
  arrayIndex: []
};

// Event listeners for buttons
document.querySelectorAll('.plus1').forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!data.arrayIndex.includes(index)) {
      data.arrayIndex.push(index);
      data.correct++;
      button.style.backgroundColor = 'lightgreen';
      button.style.color = 'white';
      console.log(data.correct)
    }
  });
});

document.querySelectorAll('.minus1').forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!data.arrayIndex.includes(index)) {
      data.arrayIndex.push(index);
      data.wrong++;
      button.style.backgroundColor = 'lightpink';
      button.style.color = 'white';
    }
  });
});

document.querySelectorAll('.zero').forEach((button, index) => {
  button.addEventListener('click', () => {
    if (!data.arrayIndex.includes(index)) {
      data.arrayIndex.push(index);
      data.zero++;
      if (data.zero === 3 || data.zero === 6 || data.zero === 9) {
        data.correct++;
      }
      button.style.backgroundColor = '#FAFAFA';
      button.style.color = '#E0E0E0';
    }
  });
});
     