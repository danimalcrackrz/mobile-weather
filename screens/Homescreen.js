import { View } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import Temperature from '../components/Temperature'
import Forecast from '../components/Forecast'
import { useGetTemperature } from '../utils/useGetTemperature'

const Homescreen = () => {
  useGetTemperature()
  return (
    <View className='border-b-2 h-full'>
      <Temperature />
      <Forecast />
      <Search />
    </View>
  )
}

export default Homescreen
