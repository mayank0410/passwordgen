'use strict';
const upper1 = 'ABCDEFGHIJKLMabcdefghijklmnNOPQRSTUopqrstuvwxyzVWXYZ';
const lower1 = 'abcdefghijklmnopqrstuvwxyz';
const number1 = '12345abcdefghijklm67890nopqrstuvwxyz';
const special1 = '!@#$abcdefghijklm%^&nopqrstuvwxyz*';
const allinone = 'ABCDEFGHIJKLMNOPQRSTUVWX!@#$%^&*YZabcdefghij1234567890klmnopqrstuvwxyz';
const upnum = 'ABCDEFGabcdefghijklmnHIJKL1234567890MNOopqrstuvwxyzPQRSTUVWXYZ';
const upsp = 'ABCDEFG!@#$HIJKLMNOP%^&*QRSTUVWXYZ';
const numsplo = '12345abcdef!@#$%ghijklm678^&*90nopqrstuvwxyz';

let val2 = document.getElementById('up');
let val3 = document.getElementById('nu');
let val4 = document.getElementById('sp');
let val1 = 8;

document.getElementById('lent').addEventListener('change',function(){
    val1 = document.getElementById('lent').value;
})

val2.addEventListener('change',function(){
    val2.checked;
})
val3.addEventListener('change',function(){
    val3.checked;
})
val4.addEventListener('change',function(){
    val4.checked;
})

function pG(){
    let pass1 = '';
    if (val2.checked==true && val3.checked==true && val4.checked==true) {
        for(let i=0;pass1.length!=val1;i++) {
            var indi_all = Math.trunc(Math.random()*allinone.length)
            pass1 = pass1 + allinone[indi_all];
        }
        return pass1;
    } else if (val2.checked==false && val3.checked==false && val4.checked==false) {
        for(let i=0;pass1.length<val1;i++) {
            let indi_lo = Math.trunc(Math.random()*lower1.length);
            pass1 = pass1 + lower1[indi_lo];
        }
        return pass1
    } else if (val2.checked==true && val3.checked==true && val4.checked==false) {
        for(let i=0;pass1.length!=val1;i++) {
            var indi_upnumlo = Math.trunc(Math.random()*upnum.length)
            pass1 = pass1 + upnum[indi_upnumlo];
        }
        return pass1;
    } else if (val2.checked==true && val3.checked==false && val4.checked==true) {
        for(let i=0;pass1.length!=val1;i++) {
            var indi_upsplo = Math.trunc(Math.random()*upsp.length)
            pass1 = pass1 + upsp[indi_upsplo];
        }
        return pass1;
    } else if (val2.checked==true && val3.checked==false && val4.checked==false) {
        for(let i=0;pass1.length!=val1;i++) {
            var indi_upp1 = Math.trunc(Math.random()*upper1.length)
            pass1 = pass1 + upper1[indi_upp1];
        }
        return pass1;
    } else if (val2.checked==false && val3.checked==true && val4.checked==true) {
        for(let i=0;pass1.length!=val1;i++) {
            var indi_numsp = Math.trunc(Math.random()*numsplo.length)
            pass1 = pass1 + numsplo[indi_numsp];
        }
        return pass1;
    } else if (val2.checked==false && val3.checked==true && val4.checked==false) {
        for(let i=0;pass1.length!=val1;i++) {
            var indi_numonly = Math.trunc(Math.random()*number1.length)
            pass1 = pass1 + number1[indi_numonly];
        }
        return pass1;
    } else if (val2.checked==false && val3.checked==false && val4.checked==true) {
        for(let i=0;pass1.length!=val1;i++) {
            var indi_sponly = Math.trunc(Math.random()*special1.length)
            pass1 = pass1 + special1[indi_sponly];
        }
        return pass1;
    }
}

document.querySelector('.btn1').addEventListener('click',function(){
    document.querySelector('.form').classList.toggle('hide1');
    document.querySelector('.one').classList.toggle('hide1');
    if (document.querySelector('.form').classList.contains('hide1')) {
        document.querySelector('.form').reset();
        document.querySelector('h4').textContent = '';
    }

    if (!document.querySelector('.form').classList.contains('hide1')) {
        document.querySelector('.btn2').addEventListener('click',function(){
            let showpass = pG();
            document.querySelector('h4').textContent = showpass;
        })
    }
})




