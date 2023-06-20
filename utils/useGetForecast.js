import { useRecoilState } from 'recoil'
import { FORECASTSTATE } from '../atoms'
import { useEffect } from 'react'
import { API_KEY } from '@env'

export const useGetForecast = () => {
  const [forecast, setForecast] = useRecoilState(FORECASTSTATE)

  useEffect(() => {
    const getForecast = async () => {
      const url =
        //TODO: query should not be hardcoded as dallas
        'https://weatherapi-com.p.rapidapi.com/forecast.json?q=dallas&days=3'
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
        const {
          forecast: { forecastday },
        } = result
        setForecast(forecastday)
      } catch (error) {
        console.error(error)
      }
    }

    getForecast()
  }, []) // Empty dependency array to run only once

  return forecast
}
