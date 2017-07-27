var rrData = {
    'top': '50%',
    'left': '800px',
    'margin-top': '-0.5px',
    'width': '250px',
	'height': '1px',
    'opacity': '0',
    'z-index': '0'
}

var leftData = {
    'top': '50%',
    'left': '0px',
    'margin-top': '-90px',
    'margin-left': '0px',
    'width': '250px',
	'height': '180px',
    'opacity': '0.4',
    'z-index': '1'
}

var rightData = {
    'top': '50%',
    'left': '550px',
    'margin-top': '-90px',
    'margin-left': '0px',
    'width': '250px',
	'height': '180px',
    'opacity': '0.4',
    'z-index': '1'
}

var middleData = {
    'top': '0px',
    'left': '50%',
    'margin-top': '0px',
    'margin-left': '-250px',
    'width': '500px',
	'height': '300px',
    'opacity': '1',
    'z-index': '1000'
}

var llData = {
    'top': '50%',
    'left': '-250px',
    'margin-top': '-0.5px',
    'width': '250px',
	'height': '1',
    'opacity': '0',
    'z-index': '0'
}

let index = 0;
let lock = true;
let timer;

function init() {
    $('.item').css(rrData);
    $('.item').eq(0).css(leftData);
    $('.item').eq(1).css(middleData);
    $('.item').eq(2).css(rightData);
    autoMove();
}


window.onload = init;

function leftMove() {
    if(lock) {
        lock = false;
        $('.item').eq(index % 6).animate(llData);
        $('.item').eq((index + 1) % 6).animate(leftData);
        $('.item').eq((index + 2) % 6).animate(middleData);
        $('.item').eq((index + 3) % 6).animate(rightData);
        $('.item').eq((index + 4) % 6).animate(rrData, function() {
            index++           
            lock = true;
        });
    }
}

function rightMove() {
    if(lock) {
        lock = false;
        $('.item').eq(index % 6).animate(middleData);
        $('.item').eq((index + 1) % 6).animate(rightData);
        $('.item').eq((index + 2) % 6).animate(rrData);
        $('.item').eq((index - 1) % 6).css(llData);
        $('.item').eq((index - 1) % 6).animate(leftData);
        $('.item').eq((index - 2) % 6).animate(llData, function () {
            index--;
            lock = true;
        });
    }
}

function autoMove() {
    timer = setInterval(leftMove, 2000);
}

$('.btnL').click(rightMove)
$('.btnR').click(leftMove)

$('.wrapper').mouseenter(function () {
    clearInterval(timer);
})
$('.wrapper').mouseleave(function () {
    autoMove();
})




