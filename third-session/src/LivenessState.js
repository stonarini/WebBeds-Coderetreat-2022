export default class LivenessState {

    static ALIVE = new LivenessState()
    static DEAD = new LivenessState(false)
    #state

    constructor(state = true) {
        this.#state = state
    }
}