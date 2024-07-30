redux gom
store = creatStore(rootReducer)
rootReducer (state, action) => kiem tra bang switch case
action la mot object thuong thi duoc tao ra bang mot function return {
    type: "",
    payload: data,
} => action creators

tu ui se kich hoat mot action bang dispatch
dispatch = useDispatch ()

dispatch(action)

lay du lieu cua state thi ta su dung useSelector
useSelector(function)
=> tao ra mot function de gan do useSelector
khi co qua nhieu selector long nhau ta nen su dung reselector

createSelector (selector1, selector2, (return selector1, return selector2) => {
    // todo
})

hay cat cac reducer cho tung chuc nang de code de bao tri va cap nhat

