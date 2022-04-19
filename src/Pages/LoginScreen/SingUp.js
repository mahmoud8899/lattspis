import React,{ Fragment } from "react";
import { Text, View } from "react-native";
import FontsDefault from "../../Assistant/FontDefault";
import InputScreen from "../../Components/InputScreen/InputScreen";
import Styles from "./Style";

// sing up account 

export default function SingUp(){




    return <Fragment>
              <View style={[Styles.skapa, Styles.marginTopFirst]}>
        <Text style={[FontsDefault.TitleFont, FontsDefault.FontColor]}>Skapa Konto Eller Logga In</Text>
      </View>

      <View style={[Styles.skapa, Styles.marginTopFirst]}>
        <Text style={FontsDefault.fontDescription}>Logga in här nedan eller skapa ett nytt
          konto pù lätt Spis
        </Text>
      </View>


      <View style={[Styles.containerInput, Styles.marginTopFirst]}>
        <View style={Styles.input}>
          <InputScreen Title='Förnamn' />
        </View>
        <View style={Styles.input}>
          <InputScreen Title='Efternamn' />
        </View>
      </View>


      <InputScreen Title='Telefonnummer' />
      <View style={Styles.marginTopFirst}>
        <InputScreen Title='Ditt lösenord' />
      </View>


     
    </Fragment>
}