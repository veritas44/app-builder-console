import React, {createContext, useContext} from 'react';
import {
  IProductInfoDefaultObj,
  productInfoDefaultObj,
} from '../constants/productInfoDefaults';

interface ProductInfoContext {
  status: 'pending' | 'inProgress' | 'complete';
  error: string | null;
  storedProductInfo: IProductInfoDefaultObj;
  productInfo: IProductInfoDefaultObj;
  dispatch: () => void;
}
const AuthContext = React.createContext({
  user: {username: 'jakiechan', tagline: '', bio: ''},
});
AuthContext.displayName = 'AuthContext';
const AuthProvider = ({user, ...props}) => (
  <AuthContext.Provider value={user} {...props} />
);

function useAuth() {
  return React.useContext(AuthContext);
}

export {AuthProvider, useAuth};

export const ProductInfoContext = createContext(
  null as unknown as ProductInfoContext,
);

ProductInfoContext.displayName = 'ProductInfoContext';

function userReducer(state, action) {
  switch (action.type) {
    case 'start update': {
      return {
        ...state,
        productInfo: {...state.productInfo, ...action.updates},
        status: 'pending',
        storedProductInfo: state.productInfo,
      };
    }
    case 'finish update': {
      return {
        ...state,
        productInfo: action.updatedUser,
        status: 'complete',
        storedProductInfo: null,
        error: null,
      };
    }
    case 'fail update': {
      return {
        ...state,
        status: 'rejected',
        error: action.error,
        productInfo: state.storedProductInfo,
        storedProductInfo: null,
      };
    }
    case 'inprogress update': {
      return {
        ...state,
        status: 'inProgress',
        error: null,
      };
    }
    case 'reset': {
      return {
        ...state,
        status: null,
        error: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function ProductInfoProvider({children}) {
  const {user} = useAuth();
  const [state, dispatch] = React.useReducer(userReducer, {
    status: 'complete',
    error: null,
    storedProductInfo: productInfoDefaultObj,
    productInfo: productInfoDefaultObj,
  });
  // const [productInfo, setProductInfo] = React.useState<IProductInfoDefaultObj>(productInfoDefaultObj);
  const {status, error, storedProductInfo, productInfo} = state;

  return (
    <ProductInfoContext.Provider
      value={{
        status,
        error,
        storedProductInfo,
        productInfo,
        dispatch,
      }}>
      {children}
    </ProductInfoContext.Provider>
  );
}

export function useProductInfo() {
  const context = useContext(ProductInfoContext);
  if (context === undefined) {
    throw new Error(`useProductInfo must be used within a ProductInfoProvider`);
  }
  return context;
}

export async function updateProductInfo(dispatch, updates) {
  dispatch({type: 'start update', updates});
  // try {
  //     // const updatedUser = await userClient.updateUser(user, updates)
  //     const updatedUser = {}
  //     dispatch({type: 'finish update', updatedUser})
  //   return updatedUser
  // } catch (error) {
  //   dispatch({type: 'fail update', error})
  //   return Promise.reject(error)
  // }
}
export async function productInfoUpdateComplete(dispatch, updatedUser) {
  dispatch({type: 'finish update', updatedUser});
}
export async function productInfoUpdateInProgress(dispatch) {
  dispatch({type: 'inprogress update'});
}
