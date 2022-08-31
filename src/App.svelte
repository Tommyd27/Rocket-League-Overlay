<script>
import { each } from "svelte/internal";

	import Boost from "./lib/Boost.svelte";
	import { game, players } from "./lib/processor";
	import { socketMessageStore } from "./lib/socket";
	import Timer from "./lib/Timer.svelte";
	//$: console.log($socketMessageStore);
	//$: console.log($players);
  </script>
  
  <main>
	<!--{#if $targetPlayer?.name}
	<Boost percent="{$targetPlayer.boost}" />
	{/if}-->
	{#each $players as player}
	<Boost percent = "{player[1].boost}" 
		   name = "{player[1].name}" 
		   score = "{player[1].score}"
		   goals = "{player[1].goals}"
		   saves = "{player[1].saves}"
		   />
	{/each}

	<Timer time = "{$game.time_seconds}" blueGoals = "{$game.teams[0].score}" orangeGoals = "{$game.teams[1].score}"/>

	</main>