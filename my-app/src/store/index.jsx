import {createStore} from 'redux';



const INITIAL_VALUE={
    isLogin:true,
    showCategory:"",
    serchTerm:""
}

const reducer=(store=INITIAL_VALUE,action)=>{
 
    if(action.type=="LOGIN")
    {
        return {...store,isLogin:true}
    }
    else   if(action.type=="CHANGE_CATEGORY")
    {
        return {...store,showCategory:action.payload.category}
    }
    else   if(action.type=="SET_SERCHTERM")
    {
        
        return {...store,serchTerm:action.payload.serchTerm}
    }
    console.log(store);
    return store;
}

 const store=createStore(reducer);



// const storeProvider=({children})=>{
// <Provider store={store}>{children}</Provider>

// }
export default store;


