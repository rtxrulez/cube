'use strict';

var itemClass = 'slide-control__item';
var $btn = document.querySelectorAll('.' + itemClass);
var $cube = document.querySelector('.cube');

for (var i = 0; i < $btn.length; i++) {
    $btn[i].addEventListener('click', function (event) {
        console.log('test');
        $cube.classList.value = 'cube';
        if (this.classList.contains('slide-control__item_back')) {
            $cube.classList.add('cube_back');
        } else if (this.classList.contains('slide-control__item_top')) {
            $cube.classList.add('cube_top');
        } else if (this.classList.contains('slide-control__item_bottom')) {
            $cube.classList.add('cube_bottom');
        } else if (this.classList.contains('slide-control__item_front')) {
            $cube.classList.add('cube_front');
        }
        return false;
    });
}
//# sourceMappingURL=app.js.map
