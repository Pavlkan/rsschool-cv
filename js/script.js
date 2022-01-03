


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

let slides = document.getElementsByClassName('progect-container');
    for (let i=0; i < slides.length; ++i) {
        slides[i].onclick = function () {
            let child = this.childNodes;
            for (let cI in child) {
                // console.log(child[cI])
                if (child[cI].className == 'progects__content') {
                    let d = child[cI].style.display;
                    child[cI].style.display = d === 'block' ? 'none' : 'block';
                }
            }
        }
    }

