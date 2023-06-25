import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreens = () => {
  return (
    <View style={{
        flex: 1,
        backgroundColor: "yellow",
        justifyContent:"center"
      }}>
        <Text style={{
          fontSize:30,
          textAlign:"justify"
        }}>Lorenita y mi app de celu</Text>
      </View>
    )
}
