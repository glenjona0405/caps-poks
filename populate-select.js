async function loadPlayers() {
try {
    const res = await fetch('https://caps-poks-production.up.railway.app/players');
    /*const res = await fetch('https://caps-poks-production.up.railway.app/players'"http://localhost:5000/players");*/
    const data = await res.json();
    const select = document.getElementById('playerSelect');

    data.forEach(player => {
    const option = document.createElement('option');
    option.value = player.id;
    option.textContent = player.player_name;
    select.appendChild(option);
    });
} catch (err) {
    console.error('Gagal fetch data:', err);
}
};

loadPlayers();

async function loadTrxGames() {
try {
    const res = await fetch('https://caps-poks-production.up.railway.app/trx/allTrxGames');
    /*const res = await fetch('https://caps-poks-production.up.railway.app/trx/allTrxGames'"http://localhost:5000/trx/allTrxGames");*/
    const data = await res.json();
    const select = document.getElementById('trxSelect');

    data.forEach(game => {
    const option = document.createElement('option');
    option.value = game.game;
    option.textContent = game.game;
    select.appendChild(option);
    });
} catch (err) {
    console.error('Gagal fetch data:', err);
}
};

loadTrxGames();