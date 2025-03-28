import {AccordionReducer, StateType} from "./SelfControlledAccordion-reducer";


test("collapsed should be true", () => {
    const state: StateType = {
        collapsed: false
}

    const newState = AccordionReducer(state, {type: "TOGGLE-COLLAPSED" })

    expect(newState.collapsed).toBe(true);
})