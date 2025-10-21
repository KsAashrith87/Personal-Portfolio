// small client-side interactions
document.getElementById('year').textContent = new Date().getFullYear();

function demoAlert(name){
  alert('Demo placeholder for: ' + name);
}

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const fm = new FormData(e.target);
  const name = fm.get('name');
  document.getElementById('formStatus').textContent = `Thanks ${name}! Message received (demo).`;
  e.target.reset();
});
