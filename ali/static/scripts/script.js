document.getElementById("house-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const familySize = document.getElementById("familySize").value;
    const area = document.getElementById("area").value;
    const rooms = document.getElementById("rooms").value;
    const budget = document.getElementById("budget").value;
    const requirements = document.getElementById("requirements").value;

    const responseBox = document.getElementById("ai-response");
    responseBox.innerText = "Анализирую...";

    setTimeout(() => {
        let score = 0;

        if (rooms >= familySize) score += 30;
        if (area / familySize >= 20) score += 30;
        if (budget > 15000000) score += 20;
        if (requirements.length > 5) score += 20;

        let verdict;
        if (score >= 80) {
            verdict = "Отличный вариант! Вы будете мурлыкать от уюта.";
        } else if (score >= 50) {
            verdict = "Можно жить. Но подумайте еще раз, чтобы без мучений.";
        } else {
            verdict = "Сомнительное гнездо. Вы заслуживаете лучшего.";
        }

        responseBox.innerText = verdict;
    }, 1000);
});я
