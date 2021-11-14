const topleft = document.querySelector('#tl');
const topright = document.querySelector('#tr');
const bottomleft = document.querySelector('#bl');
const bottomright = document.querySelector('#br');

const box = document.querySelector('#box');
const code = document.querySelector('#code');

code.value = '';

topleft.value = '';
topright.value = '';
bottomleft.value = '';
bottomright.value = '';



function observer() {
    requestAnimationFrame(observer);
    
    box.style.borderTopLeftRadius = topleft.value + 'px';
    box.style.borderTopRightRadius = topright.value + 'px';
    box.style.borderBottomLeftRadius = bottomleft.value + 'px';
    box.style.borderBottomRightRadius = bottomright.value + 'px';

    if(topleft.value == '') box.style.borderTopLeftRadius = 0 + 'px';
    if(topright.value == '') box.style.borderTopRightRadius = 0 + 'px';
    if(bottomleft.value == '') box.style.borderBottomLeftRadius = 0 + 'px';
    if(bottomright.value == '') box.style.borderBottomRightRadius = 0 + 'px';
}

function applyChanges() {
    code.style.opacity = 1;
    code.value =  'border-top-left-radius: ' + box.style.borderTopLeftRadius + ';';
    code.value += ' border-top-right-radius: ' + box.style.borderTopRightRadius + ';';
    code.value += ' border-bottom-left-radius: ' + box.style.borderBottomLeftRadius + ';';
    code.value += ' border-bottom-right-radius: ' + box.style.borderBottomRightRadius + ';';
}

function copy() {
    code.select();
    code.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(code.value);
}

observer();