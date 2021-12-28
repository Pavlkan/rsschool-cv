


function changeUnderlineWidth(obj) {
    document.getElementById(obj.id + '_underline-stretched').style.width = '320px';
}

function rechangeUnderlineWidth(obj) {
    document.getElementById(obj.id + '_underline-stretched').style.width = '50px';
}

function changeCodeBackground(obj) {
    document.getElementById('code-example__content').style.transition = '0.5s'; 
    document.getElementById('code-example__content').style.background = 'rgb(40, 43, 46)';
    document.getElementById('code-example__content').style.color = 'rgb(224, 226, 228)';
    document.getElementById('code-example__content').style.borderRadius = '2%';
}

function rechangeCodeBackground(obj) {
    document.getElementById('code-example__content').style.background = '#F5FFFA';
    document.getElementById('code-example__content').style.color = 'black'
}