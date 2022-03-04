function Merge() {
    c_delay = 0;

    merge_partition(0, arr_s - 1);

    // enable_buttons();
}

function merge_sort(start, mid, end) {
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = div_sz[q++];
            div_update(div[q - 1], div_sz[q - 1], "red");//Color update
        }
        else if (q > end) {
            Arr[k++] = div_sz[p++];
            div_update(div[p - 1], div_sz[p - 1], "red");//Color update
        }
        else if (div_sz[p] < div_sz[q]) {
            Arr[k++] = div_sz[p++];
            div_update(div[p - 1], div_sz[p - 1], "red");//Color update
        }
        else {
            Arr[k++] = div_sz[q++];
            div_update(div[q - 1], div_sz[q - 1], "red");//Color update
        }
    }

    for (var t = 0; t < k; t++) {
        div_sz[start++] = Arr[t];
        div_update(div[start - 1], div_sz[start - 1], "green");//Color update
    }
}

function merge_partition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        div_update(div[mid], div_sz[mid], "yellow");//Color update

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        merge_sort(start, mid, end);
    }
}