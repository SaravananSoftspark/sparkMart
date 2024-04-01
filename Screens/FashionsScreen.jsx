import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

const FashionsScreen = () => {
  return (
    <View>
      <Appbar.Header>
          <Appbar.Content title="Fashions" />
        </Appbar.Header>
      <Text>FashionsScreen</Text>
    </View>
  )
}

export default FashionsScreen

const styles = StyleSheet.create({})