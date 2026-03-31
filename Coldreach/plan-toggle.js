document.addEventListener("DOMContentLoaded", () => {
    const monthlyBtn = document.querySelector(".plan-section .monthly");
    const quarterlyBtn = document.querySelector(".plan-section .quarterly");
    const prices = document.querySelectorAll(".plan-section .price");

    function setMonthly() {
        monthlyBtn.classList.add("active-toggle");
        quarterlyBtn.classList.remove("active-toggle");

        prices.forEach((price) => {
            const monthly = price.getAttribute("data-monthly");
            price.innerHTML = `$${monthly} <span>/month</span>`;
        })
    }

    function setQuarterly() {
        quarterlyBtn.classList.add("active-toggle");
        monthlyBtn.classList.remove("active-toggle");

        prices.forEach((price) => {
            const quarterly = price.getAttribute("data-quarterly");
            price.innerHTML = `$${quarterly} <span>/month</span>`;
        })
    }

    monthlyBtn.addEventListener("click", setMonthly);
    quarterlyBtn.addEventListener("click", setQuarterly);

    setMonthly();
})