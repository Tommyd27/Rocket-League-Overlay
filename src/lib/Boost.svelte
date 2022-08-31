<script>
	export let percent = 80;
	export let name = "Default";
	export let score = 0;
	export let goals = 0;
	export let assists = 0;
	export let saves = 0;

	//$: console.log(percent);
</script>

<div class="boost bg">
	
	<div class="boost" style="width: {percent}%"/>
	<h1>{name}</h1>

	<div class = "iconContainer1">
		<img src = "assets/points.webp" alt = "Points" width = 9%/>
		<h2>{score}</h2>
	</div>

	<div class = "iconContainer2">
		<img src = "assets/goals.webp" alt = "Goals" width = 9%/>
		<h2>{goals}</h2>
	</div>

	<div class = "iconContainer3">
		<img src = "assets/assists.webp" alt = "Assists" width = 9%/>
		<h2>{assists}</h2>
	</div>

	<div class = "iconContainer4">
		<img src = "assets/saves.webp" alt = "Saves" width = 9%/>
		<h2>{saves}</h2>
	</div>
  </div>
  
  <style>
	.boost {
	  grid-column: 1;
	  grid-row: 1;
	  height: 50px;
	  background-color: pink;
	}
	.bg {
	  width: 300px;
	  background-color: #000;
	  display : grid;
	  margin-bottom: 10px;
	}
	h1 {
		grid-column: 1;
		grid-row: 1;
		padding-left: 20px;
		font-size: 18px;
		text-align: left;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
		margin-top: 1px;
		margin-bottom: -1px;

	}
	h2 {
		font-size: 20px;
		text-align: left;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
		margin-top: -32px;
		margin-bottom: 32px;
		margin-left: 165px;
		margin-right: -165px;
	}

	.iconContainer1 {
		grid-column: 1;
		grid-row: 1;
		margin-top: 20px;
		margin-bottom: -20px;
		margin-left: -105px;
		margin-right: 105px;
	}
	.iconContainer2 {
		grid-column: 1;
		grid-row: 1;
		margin-top: 20px;
		margin-bottom: -20px;
		margin-left: -40px;
		margin-right: 40px;
	}
	.iconContainer3 {
		grid-column: 1;
		grid-row: 1;
		margin-top: 20px;
		margin-bottom: -20px;
		margin-left: 5px;
		margin-right: -5px;
	}
	.iconContainer4 {
		grid-column: 1;
		grid-row: 1;
		margin-top: 20px;
		margin-bottom: -20px;
		margin-left: 50px;
		margin-right: -50px;
	}


  </style>