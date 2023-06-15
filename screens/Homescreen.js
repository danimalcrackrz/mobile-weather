import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { WEATHERSTATE } from '../atoms'
import Temperature from '../components/Temperature'

const Homescreen = () => {
  const [currentWeather, setCurrentWeather] = useRecoilState(WEATHERSTATE)

  const query = 'dallas'

  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1bdf16303amsh20eda7b1f755003p1ed7f6jsncef45f53350d',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  }

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(url, options)
        const result = await response.json()
        console.log(result)
        setCurrentWeather(result)
      } catch (error) {
        console.error(error)
      }
    }
    getWeather()
  }, [])

  return (
    <View className='border-b-2 h-full p-2'>
      <Temperature />
    </View>
  )
}

export default Homescreen
