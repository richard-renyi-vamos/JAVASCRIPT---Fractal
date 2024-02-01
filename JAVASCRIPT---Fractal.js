document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('fractalCanvas');
    var ctx = canvas.getContext('2d');
    var width = canvas.width;
    var height = canvas.height;

    var maxIteration = 100;
    var zoom = 150;
    var moveX = 0.5;
    var moveY = 0;

    for(var x = 0; x < width; x++) {
        for(var y = 0; y < height; y++) {
            var zx = 1.5 * (x - width / 2) / (0.5 * zoom * width) + moveX;
            var zy = (y - height / 2) / (0.5 * zoom * height) + moveY;
            var i = maxIteration;
            var cX = zx, cY = zy;

            while (zx * zx + zy * zy < 4 && i > 0) {
                var tmp = zx * zx - zy * zy + cX;
                zy = 2.0 * zx * zy + cY;
                zx = tmp;
                i--;
            }

            var color = (i == 0) ? [0, 0, 0] : [255 - i, 255 - i, 255];
            ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            ctx.fillRect(x, y, 1, 1);
        }
    }
});
