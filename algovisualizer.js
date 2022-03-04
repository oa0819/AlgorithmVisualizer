var inp_sz = document.getElementById("a_size");
var inp_gen = document.getElementById("btn2");
var arr_s = inp_sz.value;
var target = document.getElementById("bars");
var spd = document.getElementById("algo_speed");
var speed = 1000;

spd.addEventListener("input", change_spd);
target.style = "flex-direction:row";

inp_gen.addEventListener("click", gen_arr);
inp_sz.addEventListener("input", update_arr_sz);

var div = [];
var div_sz = [];

function change_spd() {
    var arr_spd = spd.value;
    switch (parseInt(arr_spd)) {
        case 1: speed = 1;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 100;
            break;
        case 4: speed = 1000;
            break;
        case 5: speed = 10000;
            break;
    }
    delaytime = 10000 / (Math.floor(arr_s / 10) * speed);
}

function gen_arr() {
    target.innerHTML = "";
    for (var i = 0; i < arr_s; i++) {
        div[i] = document.createElement("div");
        div_sz[i] = Math.floor(Math.random() * 1 * (inp_sz.max * 2 - inp_sz.min * 2)) + 10;
        target.appendChild(div[i]);
        div[i].style = "border:1px solid black;margin:1px;background-color:green;width:5px;height:" + (div_sz[i]) + "px";
    }
}

function update_arr_sz() {
    arr_s = inp_sz.value;
    gen_arr();
}

var btn_algos = document.querySelectorAll(".algos");
for (var i = 0; i < btn_algos.length; i++) {
    btn_algos[i].addEventListener("click", runalgo);
}

function runalgo() {
    switch (this.innerHTML) {
        case "Bubble": Bubble();
            break;
        case "Selection": Selection();
            break;
        case "Insertion": Insertion();
            break;
        case "Merge": Merge();
            break;
        case "Quick": Quick();
            break;
        case "Heap": Heap();
            break;
    }
}

var delaytime = 10000 / (Math.floor(arr_s / 10) * speed);
var c_delay = 0;
function div_update(target, height, color) {
    window.setTimeout(function () {
        target.style = "border:1px solid black;margin:1px;background-color:" + color + ";width:5px;height:" + height + "px";
    }, c_delay += delaytime);
}

