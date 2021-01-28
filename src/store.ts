import Vue from "vue";
import Vuex from "vuex";
import { GetterTree, MutationTree } from "vuex";
import GameState from "@/enums/GameState.ts";

Vue.use(Vuex);

class State {
    public gamestate: GameState = GameState.Playing;
}

const getters: GetterTree<State, any> = {
    isPlaying: (state) => {
        return state.gamestate === GameState.Playing;
    },
    isSuccess: (state) => {
        return state.gamestate === GameState.Success;
    },
    isFailure: (state) => {
        return state.gamestate === GameState.Failure;
    }
};

const mutations: MutationTree<State> = {
    setGameState(state, payload) {
        state.gamestate = payload;
    }
};

export default new Vuex.Store({
    state: new State(),
    getters,
    mutations
});
