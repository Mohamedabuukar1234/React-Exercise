export const initialState = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
};
 export  const FormReducer  = (state,action)=>{
    switch(action.type ){
        case "Update":
            return {...state,[action.field]: action.value}


        case "nextStep":
            return{...state ,step : state.step+1}

        case "preve":
            return {...state , step : state.step-1} 
            
        case "Reset":
            return initialState  
            
        default :
        return state    

    }

 }