import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { API_KEY } from '@env'
import { WEATHERSTATE, QUERYSTATE } from '../atoms'

export const useGetTemperature = () => {
  const [currentTemperature, setCurrentTemperature] =
    useRecoilState(WEATHERSTATE)
  const query = useRecoilValue(QUERYSTATE)

  useEffect(() => {
    const getTemperature = async () => {
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${
        query.length > 3 ? query : 'dallas'
      }`
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      }

      try {
        const response = await fetch(url, options)
        const result = await response.json()
        const { current, location } = result
        setCurrentTemperature(result)
      } catch (error) {
        console.error(error)
      }
    }

    getTemperature()
  }, [query, setCurrentTemperature])
}
