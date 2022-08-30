<script>
import { each } from "svelte/internal";

	import Boost from "./lib/Boost.svelte";
	import { targetPlayer, players } from "./lib/processor";
	import { socketMessageStore } from "./lib/socket";
  
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
	<span></span>
	{/each}
	
  </main>