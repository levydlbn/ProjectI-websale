 const initialState = {
     listProduct: [],
     product: {}
 }


 const productReducer = (state = initialState, action) => {
     switch (action.type) {
         case 'ADD_PRODUCT':
             {
                 break
             }

         case 'DELETE_PRODUCT':
             {
                 break
             }

         case 'EDIT_PRODUCT':
             {
                 break
             }

         default:
             return state
     }
 }

 export default productReducer