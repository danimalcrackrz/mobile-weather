import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { WEATHERSTATE, QUERYSTATE } from '../atoms'

export const useUpdateWeather = () => {
  const [currentWeather, setCurrentWeather] = useRecoilState(WEATHERSTATE)
  const query = useRecoilValue(QUERYSTATE)

  useEffect(() => {
    const getWeather = async () => {
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${
        query === '' ? 'dallas' : query
      }`
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '1bdf16303amsh20eda7b1f755003p1ed7f6jsncef45f53350d',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      }

      try {
        const response = await fetch(url, options)
        const result = await response.json()
        setCurrentWeather(result)
      } catch (error) {
        console.error(error)
      }
    }

    getWeather()
  }, [query, setCurrentWeather])
}
