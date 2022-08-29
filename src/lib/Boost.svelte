<script>
	export let percent = 80;

	$: console.log(percent);
</script>

<div class="boost bg">
	<div class="boost" style="width: {percent}%" />
  </div>
  
  <style>
	.boost {
	  position: relative;
	  height: 50px;
	  border-radius: 25px;
	  background-color: pink;
	}
	.bg {
	  width: 300px;
	  border-radius: 25px;
	  background-color: #000;
	}
  </style>