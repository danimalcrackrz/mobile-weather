import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useGetForecast } from '../utils/useGetForecast'
import { useRecoilValue } from 'recoil'
import { FORECASTSTATE } from '../atoms'

const Forecast = () => {
  useGetForecast()
  const weekForecast = useRecoilValue(FORECASTSTATE)

  return (
    <View className='border-2 h-1/5'>
      <ScrollView
        className=''
        horizontal
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-around',
          padding: 10,
        }}>
        {weekForecast?.map(({ date, day }, i) => (
          <View
            key={i}
            className='border-2 items-center p-2 rounded-2xl w-28 justify-center'>
            <Text className='text-3xl'>{day.maxtemp_f.toFixed(0)}&deg;</Text>
            <Text>
              {new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Forecast
