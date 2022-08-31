<script>
	export let time = "5:00";
	export let blueGoals = "0";
	export let orangeGoals = "0";

</script>
<div class = "scoreBg"></div>
<div class = "bg">
	<h1>{time}</h1>
	<h2>{blueGoals}</h2>
	<h3>{orangeGoals}</h3>
</div>


<style>
	.bg {
	width: 350px;
	height: 110px;
	background: linear-gradient(0deg, rgba(156,23,33,1) 0%, rgba(232,34,155,1) 3%, rgba(255,156,173,1) 67%, rgba(255,192,203,1) 100%);
	opacity: 70;
	display:grid;
	}
  	h1 {
		font-size: 100px;
		text-align: center;
		margin-left: -0px;
		margin-right: 0px;

		margin-top: 0px;
		margin-bottom: 0px;

		color:rgb(141, 96, 11);

		grid-column: 1;
		grid-row: 1;
	}
	h2 {
		font-size: 80px;
		text-align: center;
		margin-left: -130px;
		margin-right: 130px;

		margin-top: 42px;
		margin-bottom: -42px;

		color:rgb(10, 18, 108);

		grid-column: 1;
		grid-row: 1;
	}
	h3 {
		font-size: 80px;
		text-align: center;
		margin-left: 130px;
		margin-right: -130px;

		margin-top: 42px;
		margin-bottom: -42px;

		color:rgb(10, 18, 108);

		grid-column: 1;
		grid-row: 1;
	}
</style>


