import { View } from 'react-native'
import React from 'react'
import { useUpdateWeather } from '../utils/updateWeather'
import Temperature from '../components/Temperature'
import Search from '../components/Search'

const Homescreen = () => {
  useUpdateWeather()
  return (
    <View className='border-b-2 h-full p-2'>
      <Search />
      <Temperature />
    </View>
  )
}

export default Homescreen
