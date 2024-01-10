const initialState = {
      placedata: null
}

const reducer = (state = initialState, action) => {
      switch (action.type) {
            case  'SET_DATA':
                  {
                        console.log("action fired")
                        return { placedata: { ...action.payload } }
                  }

            default: return state;
      }
}

export default reducer;
