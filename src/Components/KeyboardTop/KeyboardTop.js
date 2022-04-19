
// import { useFocusEffect } from '@react-navigation/native';
// import {  AvoidSoftInput } from "react-native-avoid-softinput";
// import React, { Fragment, useCallback } from 'react';

// export default function KeyboardTop({children}){




//     const onFocusEffect = useCallback(() => {
//         AvoidSoftInput.setAdjustNothing(); // <---- Set windowSoftInputMode on Android to match iOS behavior
//         AvoidSoftInput.setEnabled(true); // <---- Enable module
//         return () => {
//           AvoidSoftInput.setEnabled(false);
//           AvoidSoftInput.setDefaultAppSoftInputMode();
//         };
//       }, []);
    
//       useFocusEffect(onFocusEffect);


//     return <Fragment>
//         {children}
//     </Fragment>
// }