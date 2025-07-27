async function simpanData(data/*game, waktu, isWinner, profitLoss*/) {
      /*const playerId = document.getElementById("playerSelect").value;*/
      
      try {
        console.log("Data yang dikirim:", data);
        const response = await fetch("https://caps-poks-production.up.railway.app/trx", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            data
            /*
            datetime: waktu,
            game: game,
            is_winner: isWinner,
            profit_loss: profitLoss,
            player_id: document.getElementById("playerId").value,
            */
          )
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        alert("Data berhasil disimpan!");
        console.log("Respon dari API:", responseData);

      } catch (error) {
        console.log(error);
        alert("Gagal menyimpan data!");
        console.error("Error:", error);
        
      }
    };

async function checkWinner (games) {
  
}