import { useSelector } from 'react-redux'
import React, { useEffect, useState, createContext } from 'react'


export const FilterCartDetials = createContext()


export default function FilterCardItem({ children }) {



    const [setRestaurantId, setSetRestaurantId] = useState('')
    const [mapsFil, setMapsFil] = useState('')
    const [idProduct, setIdProduct] = useState('')

    // view all orders from the restaurant....
    const [filterCartProduct, setFilterCartProduct] = useState([])


    // const [loading, setLoading] = useState(false)
    // cart info .... 
    const cart = useSelector((state) => state?.cart)
    const { cartItems } = cart


    // console.log('card',cartItems)



    useEffect(() => {
        // console.log('how')

        if (cartItems) {
            setFilterCartProduct(cartItems?.filter((x) => x?.cartinfo?.toString() === setRestaurantId?.toString()))
        }


        // eslint-disable-next-line

    }, [
        setRestaurantId,
        cartItems,
        setFilterCartProduct,

    ])



    return <FilterCartDetials.Provider value={{ setMapsFil, filterCartProduct, setSetRestaurantId, setIdProduct, mapsFil }}>
        {children}
    </FilterCartDetials.Provider>
}