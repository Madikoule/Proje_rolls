        class Game {
                // Le constructeur initialise les variables et configure les éléments DOM.
                constructor() {
                // Scores et scores temporaires des joueurs
                this.scores = [0, 0];
                this.currentScores = [0, 0];
        
                // Joueur actif (0 pour joueur 1, 1 pour joueur 2)
                this.activePlayer = 0;
        
                // Élément DOM pour l'image du dé
                this.diceImage = document.getElementById('dice-img');
        
                // Boutons et éléments DOM pour les joueurs
                this.newBtn = document.querySelector('.newBtn');
                this.btnRoll = document.querySelector('.btn_roll');
                this.btnHold = document.querySelector('.btn_hold');
        
                // Éléments DOM pour les joueurs
                this.playerElements = [
                document.getElementById('name1'),
                document.getElementById('score1'),
                document.getElementById('current1'),

                document.getElementById('name'),
                document.getElementById('score2'),
                document.getElementById('current2'),
                ];
        
                // Attachement des écouteurs d'événements
                this.setupEventListeners();
        
                // Initialisation du jeu
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
                // Générer une valeur aléatoire entre 1 et 6 pour le lancer du dé
                const diceValue = Math.floor(Math.random() * 6) + 1;
        
                // Mettre à jour l'image du dé avec le résultat obtenu
                this.diceImage.src = `assets/image/dice-${diceValue}.png`;
        
                // Mettre à jour le score actuel du joueur ou changer de joueur si le dé montre un 1
                if (diceValue !== 1) {
                this.currentScores[this.activePlayer] += diceValue;
                } else {
                this.switchPlayer();
                }
        
                // Mettre à jour l'interface utilisateur
                this.updateUI();
                }
        
                // Méthode pour conserver le score actuel
                hold = () => {
                // Ajouter le score actuel au score global du joueur
                this.scores[this.activePlayer] += this.currentScores[this.activePlayer];
                this.currentScores[this.activePlayer] = 0;
        
                // Vérifier si le joueur a gagné la partie ou passer au joueur suivant
                if (this.scores[this.activePlayer] >= 100) {
                        const victoryMessage = document.getElementById('victory-message');
                        victoryMessage.textContent = `Joueur ${this.activePlayer + 1} a gagné !`;
                        victoryMessage.classList.add('show'); 
                        this.newGame();
                }
        
                // Mettre à jour l'interface utilisateur
                this.updateUI();
                }
        
                // Méthode pour changer de joueur actif
                switchPlayer = () => {
                this.currentScores[this.activePlayer] = 0;
                this.activePlayer = 1 - this.activePlayer; // Alterner entre 0 et 1
                }
        
                // Méthode pour mettre à jour l'interface utilisateur
                updateUI = () => {
                // Mettre à jour l'interface utilisateur pour le joueur actif
                this.playerElements.forEach((element, index) => {
                if (index % 3 === 0) {
                        element.textContent = `Joueur ${Math.floor(index / 3) + 1}`;
                } else if (index % 3 === 1) {
                        element.textContent = this.scores[Math.floor(index / 3)];
                } else {
                        element.textContent = this.currentScores[Math.floor(index / 3)];
                }
                });
        
                // Mettre à jour l'interface utilisateur pour le joueur non actif
                const inactivePlayer = 1 - this.activePlayer;
                this.player2Elements.forEach((element, index) => {
                if (index % 3 === 0) {
                        element.textContent = `Joueur ${Math.floor(index / 3) + 1}`;
                } else if (index % 3 === 1) {
                        element.textContent = this.scores[inactivePlayer];
                } else {
                        lement.textContent = this.currentScores[inactivePlayer];
                }
                });
                }
        
                // Méthode pour configurer les écouteurs d'événements
                setupEventListeners = () => {
                this.btnRoll.addEventListener('click', this.rollDice);
                this.btnHold.addEventListener('click', () => this.hold());
                this.newBtn.addEventListener('click', this.newGame);
                }
        }
        
        // Instanciation de la classe Game
        const game = new Game();
        