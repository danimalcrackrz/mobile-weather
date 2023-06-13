import { View, Text } from 'react-native'
import React from 'react'
import Temperature from '../components/Temperature'

const Homescreen = () => {
  const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=dallas'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1bdf16303amsh20eda7b1f755003p1ed7f6jsncef45f53350d',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  }

  // useEffect(() => {
  //   const getdata = async () => {
  //     try {
  //       const response = await fetch(url, options)
  //       const result = await response.text()
  //       console.log(result)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   getdata()
  // }, [])

  return (
    <View className='border-2 h-full'>
      <Temperature />
    </View>
  )
}

export default Homescreen
