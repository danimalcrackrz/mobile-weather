import { View, Text } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { useRecoilValue } from 'recoil'
import { WEATHERSTATE, FORECASTSTATE } from '../atoms'

const Summary = () => {
  const { current } = useRecoilValue(WEATHERSTATE)
  const weekForecast = useRecoilValue(FORECASTSTATE)[0]

  return (
    <View className='p-2'>
      <Text className='text-2xl font-semibold'>Daily Summary</Text>
      <View className='p-2'>
        <Text className='text-lg'>
          Currently it feels like {current?.feelslike_f.toFixed(0)}&deg;.
        </Text>
        <Text className='text-lg'>
          The high for today is currently{' '}
          {weekForecast?.day?.maxtemp_f.toFixed(0)}&deg;.
        </Text>
      </View>
      <View className='bg-black flex-row justify-around p-6 rounded-3xl'>
        <View className='p-2 items-center gap-2'>
          <Fontisto name='blood-drop' size={30} color='white' />
          <Text className='text-white text-xl'>{current?.humidity} %</Text>
          <Text className='text-white text-base'>Humidity</Text>
        </View>
        <View className='p-2 items-center gap-2'>
          <Fontisto name='wind' size={30} color='white' />
          <Text className='text-white text-xl'>{current?.wind_mph} MPH</Text>
          <Text className='text-white text-base'>Wind</Text>
        </View>
        <View className='p-2 items-center gap-2'>
          <Fontisto name='eye' size={30} color='white' />
          <Text className='text-white text-xl'>{current?.vis_miles} Miles</Text>
          <Text className='text-white text-base'>Visibility</Text>
        </View>
      </View>
    </View>
  )
}

export default Summary
