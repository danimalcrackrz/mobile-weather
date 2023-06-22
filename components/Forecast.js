import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useGetForecast } from '../utils/useGetForecast'
import { useRecoilValue } from 'recoil'
import { MaterialIcons } from '@expo/vector-icons'
import { FORECASTSTATE } from '../atoms'

const Forecast = () => {
  useGetForecast()
  const weekForecast = useRecoilValue(FORECASTSTATE)

  return (
    <View className='h-1/5 p-2'>
      <View className='flex-row items-center justify-between'>
        <Text className='text-2xl font-semibold'>Weekly Forecast</Text>
        <MaterialIcons name='keyboard-arrow-right' size={40} color='black' />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-around',
          padding: 10,
        }}>
        {weekForecast?.map(({ day, date }, i) => (
          <View
            key={i}
            className='border-2 items-center p-2 rounded-2xl w-28 justify-center'>
            <View className='items-center'>
              <Text className='text-3xl font-semibold'>
                {day.maxtemp_f.toFixed(0)}&deg;
              </Text>
              <Text className='text-lg'>
                {new Date(date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Forecast
