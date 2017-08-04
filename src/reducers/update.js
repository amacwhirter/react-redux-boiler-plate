/**
 * Created by ea375w on 7/26/2017.
 */


const hw = (state = [], action) =>{
    switch(action.type){
        case 'USER_SELECTED':
            return [
                ...state,
                {
                    firstname:"Patrick"
                }
            ]
            break;

        default:
            return state;
    }
}

export default hw;