function Bubble() {
    c_delay = 0;
    for (var i = 0; i < arr_s - 1; i++) {
        for (var j = 0; j < arr_s - 1 - i; j++) {
            div_update(div[j], div_sz[j], "yellow");
            if (div_sz[j] > div_sz[j + 1]) {
                div_update(div[j], div_sz[j], "red");//Color update
                div_update(div[j + 1], div_sz[j + 1], "red");//Color update

                var temp = div_sz[j];
                div_sz[j] = div_sz[j + 1];
                div_sz[j + 1] = temp;

                div_update(div[j], div_sz[j], "red");
                div_update(div[j + 1], div_sz[j + 1], "red");
            }
            div_update(div[j], div_sz[j], "blue");
        }
        div_update(div[j], div_sz[j], "green");
    }
    div_update(div[0], div_sz[0], "green");
}