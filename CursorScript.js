const coords = { x: 0, y: 0 };

const circles = document.querySelector(".circle");

circles.array.forEach(function(circle) {
    circle.x = 0;
    circle.y = 0;
});


window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
    circles.array.forEach(function(circle,index) {
          circle.style.left = coords.x - 12 + "px"
        circle.style.top = coords.y - 12 + "px"
    });

});
