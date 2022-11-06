export default class LivenessState {
    #state

    constructor(state = true) {
        this.#state = state
    }

    get value() {
        return this.#state
    }
}