import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dataProduct from '../db.json'
import { themeContext } from '../App'
import axios from 'axios';
import useFetch from '../hooks/useFetch';

// const instance = axios.create({
//     baseURL: 'https://dummyjson.com/products/',
//     timeout: 1000,
// });

export const ProductDetail = () => {
    const theme = useContext(themeContext);
    const param = useParams();
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (param) {
    //         const fetchProduct = async () => {
    //             try {
    //                 // Gửi yêu cầu API để lấy chi tiết sản phẩm với id cụ thể
    //                 const response = await instance.get(`/${param.id}`);
    //                 setProductDetail(response.data);
    //             } catch (error) {
    //                 navigate('pageNotFound');
    //             }
    //         };
    //         fetchProduct();
    //     }
    // }, [])
    const { data: productDetail, loading, error } = useFetch(`https://dummyjson.com/products/${param.id}`)
    console.log(error)
    const handleAddCart = async () => {
        const isItemInList = (list, itemId) => list.some(item => item.id === itemId);

        if (!isItemInList(theme.cart, productDetail.id)) {
            await theme.setCart([productDetail, ...theme.cart]);
            alert('Đã thêm sản phẩm vào giỏ hàng');
        } else alert('Sản phẩm đã có trong giỏ hàng');

    }

    if (error) navigate('/pageNotFound');
    if (loading) return <div>loading....</div>

    return (
        <div className='detail-product'>
            {
                productDetail && (
                    <>
                        <figure>
                            <img src={productDetail.thumbnail} alt="" />
                        </figure>

                        <div className='description'>
                            <h3>{productDetail.title}</h3>
                            <p>{productDetail.description}</p>
                            <strong>{productDetail.price}$</strong>
                            {theme.user.isLogin && <button onClick={handleAddCart}>Thêm vào giỏ hàng</button>}
                        </div>
                    </>
                )
            }

        </div>
    )
}
