import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getDogs } from '@/lib/api/dogs.ts'

const mockApiResponse = {
  status: 'success',
  data: [
    {
      general: {
        name: 'Pug',
        group: 'Toy',
        personalityTraits: ['Charming', 'Happy', 'Playful'],
        shortDescription: 'A small, wrinkly, and playful dog.',
        longDescription: 'Long description...',
        height: '30 cm',
        weight: '6-8 kg',
        lifespan: '12-15 years',
      },
      images: { small: { outdoors: 'https://api.mock/pug.jpg' } },
    },
  ],
}

const mockMappedDogs = mockApiResponse.data.map((apiDog: any) => ({
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

describe('getDogs', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubGlobal('fetch', vi.fn())
  })

  it('returns data correctly on success', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockApiResponse),
    } as Response)

    const dogs = await getDogs()
    expect(dogs).toEqual(mockMappedDogs)
  })

  it('returns empty array on fetch error', async () => {
    vi.mocked(fetch).mockRejectedValue(new Error('Network error'))

    const dogs = await getDogs()
    expect(dogs).toEqual([])
  })
})
