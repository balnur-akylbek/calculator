function calculatePrice() {
  let basePrice = 100;

  const education = parseFloat(document.getElementById('education').value);
  const networth = parseFloat(document.getElementById('networth').value);
  const caste = parseFloat(document.getElementById('caste').value);
  const age = parseFloat(document.querySelector('input[name="age"]:checked').value);

  let finalPrice = basePrice * education * networth;

  finalPrice += caste;

  if (document.getElementById('music').checked) 
    finalPrice += parseFloat(document.getElementById('music').value);
  if (document.getElementById('cook').checked) 
    finalPrice += parseFloat(document.getElementById('cook').value);
  if (document.getElementById('easygoing').checked) 
    finalPrice += parseFloat(document.getElementById('easygoing').value);
  if (document.getElementById('sings').checked) 
    finalPrice += parseFloat(document.getElementById('sings').value);

  finalPrice *= age;

  if (document.getElementById('gossipParent').checked) 
    finalPrice *= parseFloat(document.getElementById('gossipParent').value);
  if (document.getElementById('gossipCharacter').checked) 
    finalPrice *= parseFloat(document.getElementById('gossipCharacter').value);
  if (document.getElementById('generalGossip').checked) 
    finalPrice += parseFloat(document.getElementById('generalGossip').value);

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = 'The final price is ' + finalPrice + '$';
    
  if (finalPrice > 500) {
    resultDiv.classList.add('highlight');
  } 
  else {
    resultDiv.classList.remove('highlight');
  }
}