function triangleCalculations() {
    const triangleBaseInput = document.getElementById("triangle-base").value;

    const triangleHeightInput =
        document.getElementById("triangle-height").value;

    const area = 0.5 * triangleBaseInput * triangleHeightInput;
    console.log("🚀 ~ area of Triangle :", area);

    // display triangle area
    const triangleAreaSpan = document.getElementById("triangle-area");
    // triangleAreaSpan.textContent = area;
    triangleAreaSpan.innerText = area;
}
