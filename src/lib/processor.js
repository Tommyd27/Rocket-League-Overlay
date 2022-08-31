import { derived } from "svelte/store";
import { socketMessageStore } from "./socket";

export const updateState = derived(socketMessageStore, ($msg, set) => {
  if (!$msg) return;

  if ($msg.event === "game:update_state") {
    set($msg.data);
  }
});



export const game = derived(updateState, ($update, set) => {
  	if (!$update) return;
	const game = $update.game;
    set(game);
  }
);

export const players = derived(updateState, ($update, set) => {
	if ($update)
	{
		const allPlayers = $update.players
		//console.log(Object.entries(allPlayers));
		set(Object.entries(allPlayers))
	}
	else
	{
		set([]);
	}
	
  });



