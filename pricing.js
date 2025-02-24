document.addEventListener("DOMContentLoaded", () => {
    const togglePricing = document.getElementById("togglePricing");
    const prices = document.querySelectorAll(".price");

    const weeklyPrice = "$5.99 / week";
    const yearlyPrice = "$199.99 / year";

    togglePricing.addEventListener("change", () => {
        if (togglePricing.checked) {
            prices[0].textContent = yearlyPrice;
            prices[2].textContent = weeklyPrice;
        } else {
            prices[0].textContent = weeklyPrice;
            prices[2].textContent = yearlyPrice;
        }
    });

    document.querySelectorAll(".select-plan").forEach(button => {
        button.addEventListener("click", () => {
            alert("Plan Selected! Thank you for choosing Wondoura.");
        });
    });
});
