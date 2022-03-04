function Selection() {
    c_delay = 0;
    for (var i = 0; i < arr_s; i++) {
        div_update(div[i], div_sz[i], "red");
        var min = i;
        var j = i + 1;
        while (j < arr_s) {
            div_update(div[j], div_sz[j], "yellow");
            if (div_sz[j] < div_sz[min]) {
                if (min != i) {
                    div_update(div[min], div_sz[min], "blue");
                }
                min = j;
                div_update(div[min], div_sz[min], "red");
            }
            else {
                div_update(div[j], div_sz[j], "blue");
            }
            j++;
        }
        if (min != i) {
            var temp = div_sz[i];
            div_sz[i] = div_sz[min];
            div_sz[min] = temp;

            div_update(div[i], div_sz[i], "red");
            div_update(div[min], div_sz[min], "red");
            div_update(div[min], div_sz[min], "blue");
        }
        div_update(div[i], div_sz[i], "green");
    }
    // div_update(div[0], div_sz[0], "green");
}