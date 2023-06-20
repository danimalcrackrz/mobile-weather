import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useGetForecast } from '../utils/useGetForecast'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { FORECASTSTATE } from '../atoms'

const Forecast = () => {
  useGetForecast()
  const weekForecast = useRecoilValue(FORECASTSTATE)

  return (
    <View className='border-2 h-1/5'>
      <ScrollView className='border-2 border-red-400' horizontal>
        {weekForecast?.map((day, i) => (
          <View key={i} className='border-2 h-10 w-10'>
            <Text>{day.date}</Text>
            <Text></Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Forecast
