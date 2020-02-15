const initialState = {
    code: null
};

const setCode = (state=initialState, action) => {
    switch (action.type) {
        case "GET_CODE":
            return {
                code: action.payload
            };
        default:
            return state

    }
};

export default setCode
