import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { Text, SafeAreaView } from 'react-native'
import Homescreen from './screens/Homescreen'

export default function App() {
  return (
    <SafeAreaView className=''>
      <Homescreen />
    </SafeAreaView>
  )
}
