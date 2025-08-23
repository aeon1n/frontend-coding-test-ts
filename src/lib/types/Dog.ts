export interface Dog {
  name: string
  group: string
  personalityTraits: string[]
  shortDesc: string
  longDesc: string
  height: number
  weight: number
  lifespan: number
  image: string
}

export interface ApiDog {
  id: string
  general: {
    name: string
    group: string
    personalityTraits: string[]
    shortDescription: string
    longDescription: string
    popularity: number
    height: number
    weight: number
    lifespan: number
  }
  physical: {
    size: number
    lifespan: number
    droolingFrequency: number
    coatStyle: string
    coatTexture: string
    coatLength: number
    doubleCoat: boolean
  }
  behavior: {
    familyAffection: number
    childFriendly: number
    dogSociability: number
    friendlinessToStrangers: number
    playfulness: number
    protectiveInstincts: number
    adaptability: number
    barkingFrequency: number
  }
  care: {
    sheddingAmount: number
    groomingFrequency: number
    exerciseNeeds: number
    mentalStimulationNeeds: number
    trainingDifficulty: number
  }
  images: {
    small: {
      indoors: string
      outdoors: string
      studio: string
    }
    large: {
      indoors: string
      outdoors: string
      studio: string
    }
  }
}

export interface ApiResponse {
  status: 'success' | 'error'
  data: ApiDog[]
}
