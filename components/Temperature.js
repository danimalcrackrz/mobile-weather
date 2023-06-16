import { View, Text, Image } from 'react-native'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { WEATHERSTATE } from '../atoms'

const Temperature = () => {
  const weather = useRecoilValue(WEATHERSTATE)

  const temp_f = weather.current?.temp_f
  const cityCondition = weather.current?.condition.text
  const cityName = weather.location?.name
  const cityRegion = weather.location?.region

  return (
    <View className='border-2 h-1/5'>
      <View className='p-2 border-2'>
        <Text>
          {cityName}, {cityRegion}
        </Text>
        <Text className='text-8xl'>{temp_f}&deg;</Text>
      </View>
      <View className='p-2'>
        <Text>{cityCondition}</Text>
      </View>
    </View>
  )
}

export default Temperature
