import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ChoseLanguageDatilas = createContext()

export default function ChoseLanguage({ children }) {
   const [Language, setLanguage] = useState('ENLang')

   useEffect(() => {
      ;(async () => {
         //  AsyncStorage.clear()
         if (!(await AsyncStorage.getItem('lang'))) {
            AsyncStorage.setItem('lang', 'ENLang')
         }
         AsyncStorage.getItem('lang').then(val => {
            setLanguage(val === 'ENLang' ? 'EN' : 'SW')
         })
      })()
   }, [Language])

   return (
      <ChoseLanguageDatilas.Provider value={{ Language, setLanguage }}>
         {children}
      </ChoseLanguageDatilas.Provider>
   )
}
