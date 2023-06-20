import { View, Text } from 'react-native'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { WEATHERSTATE } from '../atoms'

const Temperature = () => {
  const weather = useRecoilValue(WEATHERSTATE)

  return (
    <View className='border-2 h-1/5'>
      <View className='p-2 border-2 items-center'>
        <Text className='text-8xl'>{weather.current?.temp_f}&deg;</Text>
        <Text className=''>
          {weather.location?.name}, {weather.location?.region}
        </Text>
      </View>
      <View className='p-2'>
        <Text>{weather.current?.condition.text}</Text>
      </View>
    </View>
  )
}

export default Temperature
