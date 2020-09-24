import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

//dispatch 方法从哪里来？被 connect 的 Component 会自动在 props 中拥有 dispatch 方法。
const Products = ({ dispatch, products }) => {
    function handleDelete(id) {
      dispatch(
            {
                type: 'products/delete',
                payload: id
            }
        );
    }
    return (
        <div>
            <h2>List of Products</h2>
            <ProductList onDelete={handleDelete} products={products}/>
        </div>

    )
}

function mapStateToProps(state) {
  // console.log(state.products)
  return {products:state.products}
}

// ({products})=>({products})


export default connect(mapStateToProps)(Products)
