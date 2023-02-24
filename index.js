const store=require("./app/store")
const cakeActions=require('./features/cake/cakeSlice').cakeActions;
const icecreamActions=require("./features/icecream/icecreamSlice").icecreamActions

console.log('initialState', store.getState())

const unsubscribe=store.subscribe(()=>console.log("updatedState",store.getState()))
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.reStocked(5))

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.reStocked(5))

unsubscribe()