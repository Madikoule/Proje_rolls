class Game {
                // Le constructeur initialise les variables et configure les éléments DOM
                constructor() {
                this.scores = [0, 0];
                this.currentScores = [0, 0];
                this.activePlayer = 0;
                this.diceImage = document.querySelector('.dice-1');
                this.newBtn = document.querySelector('.newBtn');
                this.btnRoll = document.querySelector('.btn_roll');
                this.btnHold = document.querySelector('.btn_hold');
        
                this.playerElements = [
                document.getElementById('name1'),
                document.getElementById('score1'),
                document.getElementById('current1'),
                ];
        
                this.player2Elements = [
                document.getElementById('name2'),
                document.getElementById('score2'),
                document.getElementById('current2'),
                ];
        
                // Attachement des écouteurs d'événements
                this.setupEventListeners();
        
                // Initialiser le jeu
                this.newGame();
                }
        
                // Méthode pour démarrer une nouvelle partie
                newGame = () => {
                this.scores = [0, 0];
                this.currentScores = [0, 0];
                this.activePlayer = 0;
                this.updateUI();
                }
        
                // Méthode pour lancer le dé
                rollDice = () => {
                const diceValue = Math.floor(Math.random() * 6) + 1;
                this.diceImage.src = `assets/image/dice-${diceValue}.png`;
        
                if (diceValue !== 1) {
                this.currentScores[this.activePlayer] += diceValue;
                } else {
                this.switchPlayer();
                }
        
                this.updateUI();
                }
        
                // Méthode pour conserver le score actuel
                hold = () => {
                this.scores[this.activePlayer] += this.currentScores[this.activePlayer];
                this.currentScores[this.activePlayer] = 0;
        
                // Vérifier si le joueur a gagné
                if (this.scores[this.activePlayer] >= 100) {
                alert(`Joueur ${this.activePlayer + 1} a gagné !`);
                this.newGame();
                } else {
                this.switchPlayer();
                }

        }}