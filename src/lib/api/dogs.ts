import { api } from '../utils'
import type { ApiResponse, Dog } from './../types/Dog'

const LOCAL_STORAGE_KEY = 'dogs_cache'

export async function getDogs(): Promise<Dog[]> {
  const cached = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (cached) {
    try {
      return JSON.parse(cached) as Dog[]
    } catch (err) {
      console.warn('invalid cache data')
    }
  }
  try {
    const res = await fetch(api)
    if (!res.ok) throw new Error('Network response was not ok')

    const apiResponse: ApiResponse = await res.json()

    if (apiResponse.status !== 'success') return []

    const dogs = apiResponse.data.map((apiDog) => ({
      name: apiDog.general.name,
      group: apiDog.general.group,
      personalityTraits: apiDog.general.personalityTraits,
      shortDesc: apiDog.general.shortDescription,
      longDesc: apiDog.general.longDescription,
      height: apiDog.general.height,
      weight: apiDog.general.weight,
      lifespan: apiDog.general.lifespan,
      image: apiDog.images.small.outdoors,
    }))

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dogs))
    return dogs
  } catch (error) {
    console.error('Error fetching dogs:', error)
    return []
  }
}
