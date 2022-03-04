function Insertion() {
    c_delay = 0;
    for (var i = 1; i < arr_s; i++) {
        div_update(div[i], div_sz[i], "yellow");
        var t = div_sz[i];
        var j = i - 1;
        while (j >= 0 && t < div_sz[j]) {
            div_update(div[j], div_sz[j], "red");
            div_update(div[j + 1], div_sz[j + 1], "red");
            div_sz[j + 1] = div_sz[j];
            div_update(div[j], div_sz[j], "red");
            div_update(div[j + 1], div_sz[j + 1], "red");

            div_update(div[j], div_sz[j], "blue");
            if (j == (i - 1)) {
                div_update(div[j + 1], div_sz[j + 1], "yellow");//Color update
            }
            else {
                div_update(div[j + 1], div_sz[j + 1], "blue");//Color update
            }
            j--;
        }
        div_sz[++j] = t;
        for (var k = 0; k < i; k++) {
            div_update(div[k], div_sz[k], "green");//Color update
        }
    }
    div_update(div[arr_s - 1], div_sz[arr_s - 1], "green");
}