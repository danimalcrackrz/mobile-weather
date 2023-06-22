import { View } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import Temperature from '../components/Temperature'
import Forecast from '../components/Forecast'
import { useGetTemperature } from '../utils/useGetTemperature'
import Summary from '../components/Summary'

const Homescreen = () => {
  useGetTemperature()
  return (
    <View className='h-full p-2'>
      <Search />
      <Temperature />
      <Summary />
      <Forecast />
    </View>
  )
}

export default Homescreen
