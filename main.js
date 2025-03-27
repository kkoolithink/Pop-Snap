function pop_snap() {
    const user_input = document.querySelector("#user_input").value;
    const divisible_by_4 = user_input % 4 == 0;
    const divisible_by_6 = user_input % 6 == 0;
    let response_string = "";

    if (!divisible_by_4 && !divisible_by_6) {
        document.querySelector("#response").textContent = `Response: ${user_input}`;
    }
    else {
        if (divisible_by_4) {
        response_string += "Pop";
        }
        if (divisible_by_6) {
            response_string += "Snap";
        }

        document.querySelector("#response").textContent = `Response: ${response_string}`;
    }
}