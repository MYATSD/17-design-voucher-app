import React from 'react'
import ProductListPage from '../Features/product/pages/ProductListPage'
import ProductCreatePage from '../Features/product/pages/ProductCreatePage'
import ProductEditPage from '../Features/product/pages/ProductEditPage'

const productRoute = [
    {
        path: "product",
        element: <ProductListPage/>
        
    },
    {
        path: "product-create",
        element: <ProductCreatePage/>
    },

    {
        path: "product-edit/:id",
        element: <ProductEditPage/>
    }
]

export default productRoute