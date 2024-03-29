import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useContext } from 'react'
import MyButton from '../Components/Button'
import {auth,firebase} from '@react-native-firebase/auth'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <MyButton  title={"LogOut"} onPress={()=>{
        firebase.auth().signOut();
      }}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})