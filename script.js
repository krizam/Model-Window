let open = document.getElementById('open');
let model = document.getElementById('modal');
let close = document.getElementById('#close');

open.addEventListener('click', ()=> {
  model.style.display = 'block';
});
    
close.addEventListener('click',()=> {
  model.style.display = 'none';
});



