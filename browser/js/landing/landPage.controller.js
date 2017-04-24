app.controller('landingController', function ($scope, $window , $timeout) {

	let game = 0,
		random = Math.random(),
    	choice = Math.round(random),
    	whosTurnIsIt = !!choice,
    	winner = function(){
				window.alert( $scope.currentPlayer + " has won!!!");
				window.alert("Ready for the next game!");
				$route.reload();	
			}

	if(whosTurnIsIt){
		$scope.currentPlayer = 'Player 1';
	}else {
		$scope.currentPlayer = 'Player 2';
	} 

	function Tile(id){
		this.id = id || "";
		this.player = "";
		this.touched = false;
	}

	function Board(){
		var cleanBoard = [[[{}],[{}],[{}]],[[{}],[{}],[{}]],[[{}],[{}],[{}]]],
			currentID = "";
			for( let x = 0; x <= 2 ; x++ ){
				for ( let y = 0 ; y <= 2 ; y++ ){
					currentID = ""+x+""+y;
					let currentTile = new Tile( currentID );
					cleanBoard[x][y] = currentTile 
				}
			}

		game++;
		this.game = game;	
		this.board = cleanBoard

		return cleanBoard
	}

	function alternatePlayer(){
		if($scope.currentPlayer === 'Player 1'){
			$scope.currentPlayer = 'Player 2';
		}else {
			$scope.currentPlayer = 'Player 1';
		} 
	}

	let currentBoard = new Board;

	let checkForWinner = () => {

		let checkBoard = [[[{}],[{}],[{}]],[[{}],[{}],[{}]],[[{}],[{}],[{}]]];

		for( var x = 0; x <= 2 ; x++ ){
			for ( var y = 0 ; y <= 2 ; y++ ){
				checkBoard[x][y] = false;
				}
			}

		var splitting = function(array){
			return array.id.split("")
		}

		currentBoard.forEach( row => {
			row.forEach((tile)=>{
				let positions = splitting(tile);
				checkBoard[parseInt(positions[0])][parseInt(positions[1])] = ($scope.currentPlayer===tile.player) && tile.touched;
			})
		})

		let checkRows = function(board) {
			for(let x = 0; x <= 2 ; x++){
				if(board[x][0]&&board[x][1]&&board[x][2]){
					return winner();
				}
			}
			return false;
		},checkColumns = function(board){
			for(let y = 0; y <= 2 ; y++){
				if(board[0][y]&&board[1][y]&&board[2][y]){
					return winner();
				}
				return false;
			}
		},checkDiagnols = function(board){
				if( board[0][0]&&board[1][1]&&board[2][2]||board[0][2]&&board[1][1]&&board[2][0] ){
					return winner();
				}
				return false;
		}

		checkColumns(checkBoard);
		checkDiagnols(checkBoard);
		checkRows(checkBoard);
	}

	$scope.clickedBlock = function(event){
	  let checkStatus = function(blockID){
	  	let positions = blockID.split("");

	  if ($(event.target).is(':empty')){
  		if ($scope.currentPlayer==='Player 1') {
  			$(event.target).html('X');	  			
  			currentBoard[parseInt(positions[0])] [parseInt(positions[1])].touched = true; 
  			checkForWinner();
  			alternatePlayer();
  		}else{
  			$(event.target).html('O')
  			currentBoard[parseInt(positions[0])] [parseInt(positions[1])].touched = true; 
  			checkForWinner();
  			alternatePlayer();
  		}
		}
	  }
	  checkStatus($(event.target).attr("data-id"));
	}
})