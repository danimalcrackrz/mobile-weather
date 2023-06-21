import { View, Text } from 'react-native'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { WEATHERSTATE, FORECASTSTATE } from '../atoms'

const Summary = () => {
  const { current } = useRecoilValue(WEATHERSTATE)
  const weekForecast = useRecoilValue(FORECASTSTATE)[0]

  return (
    <View className='p-2'>
      <Text className='text-2xl font-semibold'>Daily Summary</Text>
      <Text className='text-lg'>
        Currently it feels like {current?.feelslike_f.toFixed(0)}&deg;.
      </Text>
      <Text className='text-lg'>
        The high for today is currently{' '}
        {weekForecast?.day?.maxtemp_f.toFixed(0)}&deg;.
      </Text>
    </View>
  )
}

export default Summary
