const SERVER_ID = '1302625079661821963'; // Твой ID сервера
const PROXY_URL = 'https://api.allorigins.win/get?url='; // Альтернативный прокси

async function fetchMemberCount() {
    try {
        const response = await fetch(`${PROXY_URL}https://discord.com/api/guilds/${SERVER_ID}/widget.json`);
        if (!response.ok) throw new Error("Ошибка получения данных");

        const data = await response.json();
        console.log('Полученные данные:', data); // Логируем полученные данные

        const memberCount = data.presence_count || "N/A";
        document.getElementById('memberCount').innerText = memberCount;
    } catch (error) {
        document.getElementById('memberCount').innerText = "Ошибка!";
        console.error("Ошибка загрузки данных:", error);
    }
}

// Вызываем сразу и обновляем каждую минуту
fetchMemberCount();
setInterval(fetchMemberCount, 60000);
