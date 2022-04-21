import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ChoseLanguageDatilas = createContext()



export default function ChoseLanguage({ children }) {

    const [Language, setLanguage] = useState('')



    useEffect(() => {
        ;(async () => {
           // AsyncStorage.clear()
           if (!(await AsyncStorage.getItem('lang'))) {
              AsyncStorage.setItem('lang', 'ENLang')
           }
        //    AsyncStorage.getItem('lang').then(val =>
        //      console.log('the lang is '),
        //    )
        })()
     }, [])


    // select language
    useEffect(() => {
        ; (async () => {
            AsyncStorage.getItem('lang').then(val => {
                setLanguage(val === 'ENLang' ? 'EN' : 'SW')
                // console.log('this is val ' + val)
            })
        })()
    }, [Language])









    return <ChoseLanguageDatilas.Provider value={{ Language, setLanguage }} >
        {children}
    </ChoseLanguageDatilas.Provider>
}