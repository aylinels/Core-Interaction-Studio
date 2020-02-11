function createTag() {
  var star = document.createElement("img");
  star.src = "img/differences.png";
  star.style.left = Math.random() * 60 + "vw";
  star.style.top = Math.random() * 90 + "vh";
  star.style.transform = "rotate(" + (45 - Math.random() * 90 ) + "deg)";
  Math.floor( Math.random( ) * star.rotate );
  star.classList.add("img");
  star.id = i;
  var container = document.getElementById('container');
  container.appendChild(star);
}
 
setInterval(createTag, 200);

for (i = 0; i < 1; i++) {
  createTag();
}


