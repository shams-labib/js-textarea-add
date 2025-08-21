const mainMal = document.getElementById('textarea');
const btnMal = document.getElementById('btn');

btnMal.addEventListener('click', function(){
  const mainMal2 = mainMal.value;
  const newValue = document.createElement('p');
  newValue.innerText = mainMal2;
  newValue.classList.add('comment')
  const newMan = document.getElementById('div');

  newMan.append(newValue);

  mainMal.value = '';
});
