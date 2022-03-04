function Quick() {
    c_delay = 0;
    quicksort(0, arr_s - 1);
}
function quicksort(l, r) {
    if (l < r) {
        var pivot = partition(l, r);
        quicksort(l, pivot - 1);
        quicksort(pivot + 1, r);
    }
}
function partition(l, r) {
    var s = l, tmp;
    var e = r;
    var pivot = div_sz[l];

    while (s < e) {
        while (div_sz[s] <= pivot) {
            s++;
        }
        while (div_sz[e] > pivot) {
            e--;
        }
        if (s < e) {
            div_update(div[s], div_sz[s], "red");
            div_update(div[e], div_sz[e], "red");
            tmp = div_sz[s];
            div_sz[s] = div_sz[e];
            div_sz[e] = tmp;
            div_update(div[s], div_sz[s], "green");
            div_update(div[e], div_sz[e], "green");
        }
    }
    tmp = div_sz[e];
    div_sz[e] = div_sz[l];
    div_sz[l] = tmp;
    div_update(div[e], div_sz[e], "green");
    div_update(div[l], div_sz[l], "green");
    return e;
}