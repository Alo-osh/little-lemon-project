const updateTimes = (state, action) => {
           switch (action.type) {
             case "reserve_time":
               return {
                 ...state,
                 e: state.e.filter(
                   (t) => t !== action.payload
                 ),
               };
             default:
               return state;
           }
         };
         export default updateTimes;