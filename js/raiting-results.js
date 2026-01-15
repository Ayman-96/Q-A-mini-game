// Import your data object
import { data } from "./rait.js";
console.log ( data.correct)
console.log ( data.zero)
function colorForPercent(p) {
  const pct = Math.max(0, Math.min(100, p));
  const hue = (pct / 100) * 120;
  return `hsl(${hue} 85% 45%)`;
}

function animateCircle(circleEl, targetPercent, duration = 1000) {
  const textEl = circleEl.querySelector('.inner');
  const startTime = performance.now();
  const startVal = Number(circleEl.dataset.current) || 0;
  const endVal = Math.max(0, Math.min(100, Number(targetPercent) || 0));

  function frame(now) {
    const t = Math.min(1, (now - startTime) / duration);
    const value = Math.round(startVal + (endVal - startVal) * t);

    const color = colorForPercent(value);
    circleEl.style.background =
      `conic-gradient(${color} ${value * 3.6}deg, #e0e0e0 0deg)`;
    textEl.textContent = `${value}%`;
    circleEl.dataset.current = value;

    if (t < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function renderFromData(dataObj) {
  const totalQuestions = 10; // total number of quiz questions

  document.querySelectorAll('.circle[data-key]').forEach(circle => {
    const key = circle.dataset.key;
    const rawValue = dataObj.hasOwnProperty(key) ? dataObj[key] : 0;

    // Convert raw score to percentage
    const targetPercent = (rawValue / totalQuestions) * 100;

    animateCircle(circle, targetPercent);
  });
}

// Run animation when results.html loads
renderFromData(data);

//////////////////////////////////////

document.querySelector('.correct-total').innerHTML= `Total corrcted answers : ${data.correct}`;
document.querySelector('.wrong-total').innerHTML= `Total wrong answers : ${data.wrong}`;
document.querySelector('.nore-total').innerHTML= `Total didn't hit answers : ${data.zero}`

if(data.zero >= 3){
 setInterval(()=>{
  document.getElementById("if-3-nore").innerHTML= '3 not hit = correct'
 },3000);
 setInterval(()=>{
  document.getElementById("if-3-nore").innerHTML= ''
 },6000);

}