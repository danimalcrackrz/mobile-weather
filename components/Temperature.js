import { View, Text } from 'react-native'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { WEATHERSTATE } from '../atoms'

const Temperature = () => {
  const { location, current } = useRecoilValue(WEATHERSTATE)

  return (
    <View className=''>
      <View className='gap-2'>
        <View className='p-2 items-center gap-4'>
          <Text className='font-semibold text-3xl'>{location?.name}</Text>
          <View className='bg-black px-4 py-2 rounded-full'>
            <Text className='text-white'>
              {location?.localtime.split(' ')[0]}
            </Text>
          </View>
          <Text className='text-2xl font-semibold'>
            {current?.condition.text}
          </Text>
        </View>
        <View className='items-center'>
          <Text className='text-9xl ml-14'>
            {current?.temp_f.toFixed(0)}&deg;
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Temperature
