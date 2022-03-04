function Heap() {
    c_delay = 0;
    heapsort();
}
function heapify(n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    if (l < n && div_sz[l] > div_sz[largest])
        largest = l;
    if (r < n && div_sz[r] > div_sz[largest])
        largest = r;
    if (largest != i) {
        div_update(div[i], div_sz[i], "red");
        div_update(div[largest], div_sz[largest], "red");
        var tmp = div_sz[largest];
        div_sz[largest] = div_sz[i];
        div_sz[i] = tmp;
        div_update(div[i], div_sz[i], "green");
        div_update(div[largest], div_sz[largest], "green");
        heapify(n,largest);
    }
}
function heapsort() {
    for (var i = Math.floor(arr_s / 2) - 1; i >= 0; i--) {
        heapify(arr_s, i);
    }
    for (var i = arr_s - 1; i > 0; i--) {
        div_update(div[i], div_sz[i], "red");
        div_update(div[0], div_sz[0], "red");
        var tmp = div_sz[0];
        div_sz[0] = div_sz[i];
        div_sz[i] = tmp;
        div_update(div[i], div_sz[i], "green");
        div_update(div[0], div_sz[0], "green");
        heapify(i, 0);
    }
}