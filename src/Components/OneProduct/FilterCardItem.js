import { useSelector } from 'react-redux'
import React ,{ useEffect, useState, createContext } from 'react'


export const FilterCartDetials = createContext()


export default function FilterCardItem({ children }) {



    const [setRestaurantId, setSetRestaurantId] = useState('')
    const [mapsFil, setMapsFil] = useState(null)
    const [idProduct, setIdProduct] = useState('')
    const [filterCartProduct, setFilterCartProduct] = useState([])
    const [loading, setLoading] = useState(false)
    // cart info .... 
    const cart = useSelector((state) => state?.cart)
    const { cartItems } = cart


    // console.log('card',cartItems)



    useEffect(() => {
        if (cartItems) {

            return setFilterCartProduct(cartItems?.filter((x) => x?.cartinfo?._id?.toString() === setRestaurantId?.toString()))

        }

        // eslint-disable-next-line

    }, [setRestaurantId, cartItems, setFilterCartProduct])






    useEffect(() => {

        if (idProduct) {
            setLoading(true)

            // testing ...  this is cart after thet filter console.log('run', filterCartProduct)
            setMapsFil(filterCartProduct?.find((x) => x?.product === idProduct))
            setLoading(false)
            return
        }

        return () => {
            setMapsFil(null)
            setLoading(false)

        }


        // eslint-disable-next-line
    }, [filterCartProduct, setMapsFil, idProduct, setLoading])









    console.log('cartItems',cartItems)




    // console.log('setRestaurantId',setRestaurantId)



    return <FilterCartDetials.Provider value={{ filterCartProduct, setSetRestaurantId, setIdProduct, mapsFil, loading }}>
        {children}
    </FilterCartDetials.Provider>
}