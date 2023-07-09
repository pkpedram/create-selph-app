
const initialState = {
    selectedFilters:[
       {
        param: '',
        value:'',
       }
    ],
    generatedParams: {

    },
    sideBarItems: {
        categories: {
            isShowing: false,
            items: []
        },
        search: {
            isShowing: true,
            value: '',
        },
        prices: {
            isShowing: false
        },
        cities: {
            isShowing: false,
            paramKey: 'related_city'
        }
    }
};

export default function filterState(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    
  case 'GENERATE_PARAMS': 
    return {
        ...state,
        generatedParams: {
            ...state.generatedParams,
            ...payload
        }
    }
    case 'SET_SIDEBAR_ITEMS': 
        return{
            ...state,
           sideBarItems: {
            ...state.sideBarItems,
            [payload.key]: {
                ...state.sideBarItems[payload.key],
                isShowing: payload.hasOwnProperty('isShowing') ? payload.isShowing : true,
                items: payload?.items ,
                paramKey: payload?.paramKey
            }
           }
        }


    default:
      return state;
  }
}
