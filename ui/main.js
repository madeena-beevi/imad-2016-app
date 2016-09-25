console.log('Loaded!');
var element = document.getElementById('body1');
element.innerHTML ='NEW VALUE';
var img = document.getElementById('mg1');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft = 10;
    img.style.marginLeft = marginLeft ='px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,100);
    
};

