import React from 'react'
import { Home } from './src/pages/Home'
import {StatusBar} from 'react-native';


export default function App(){
   return(
      <>
         <StatusBar backgroundColor={'#a370f7'}
         barStyle={'light-content'}
         />
         <Home/>
      </>
   )
}
