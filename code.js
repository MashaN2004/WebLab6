var sec1 = document.getElementById('sec1.1');
var sec2 = document.getElementById('sec2.2');

document.getElementById('sec1').addEventListener('click', (e) => {
   if (e.target === document.getElementById('sec1')) {  
      sec1.style.zIndex = '1000';
      sec2.style.zIndex = '999';
      document.getElementById('cat').style.display = 'block';

      sec1.style.width = '95%';
      document.querySelector('.sec1 img').style.width = '80%';
      sec2.style.width = '95%';
     document.querySelector('.sec2 img').style.width = '80%';
    }
});

document.getElementById('sec3').addEventListener('click', (e) => {
  if (e.target === document.getElementById('sec3')) {  
     sec1.style.zIndex = '999';
     sec2.style.zIndex = '1000';
     document.getElementById('cat').style.display = 'none';

     
     sec1.style.width = '95%';
     document.querySelector('.sec1 img').style.width = '80%';
     sec2.style.width = '95%';
     document.querySelector('.sec2 img').style.width = '80%';
     
   }
});

document.getElementById('sec2').addEventListener('click', (e) => {
  if (e.target === document.getElementById('sec2')) {  
     sec1.style.zIndex = '999';
     sec2.style.zIndex = '1000';
     document.getElementById('cat').style.display = 'block';
     sec1.style.width = '50%';
     sec2.style.width = '50%';
     document.querySelector('.sec1 img').style.width = '100%';
     document.querySelector('.sec2 img').style.width = '100%';
   }
});