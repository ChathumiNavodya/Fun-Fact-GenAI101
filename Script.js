const facts = [
    { "fact": "Fruits are the mature ovary of a flowering plant, usually containing seeds." },
    { "fact": "Bananas are berries, while strawberries are not." },
    { "fact": "Apples float in water because they are 25% air." },
    { "fact": "Tomatoes are classified as fruits, specifically berries." },
    { "fact": "Citrus fruits are high in vitamin C, which helps boost the immune system." },
    { "fact": "Pineapples take about two years to grow and mature." },
    { "fact": "Avocados are unique fruits that contain healthy fats." },
    { "fact": "Cherries are a member of the rose family." },
    { "fact": "Watermelons are 92% water, making them a hydrating fruit." },
    { "fact": "Fruits can be classified into two categories: fleshy and dry." }
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.style.opacity = 0; // Fade out
    setTimeout(() => {
        factDisplay.textContent = facts[randomIndex].fact;
        factDisplay.style.opacity = 1; // Fade in
    }, 500);
});
