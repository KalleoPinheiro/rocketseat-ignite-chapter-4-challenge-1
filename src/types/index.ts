export type Continent = {
  id: string
  name: string
  shortDescription: string
  description: string
  countriesQuantity: number
  languagesQuantity: number
  citiesQuantity: number
  image: Image
  cities: City[]
}

export type City = {
  id: string
  name: string
  country: string
  image: string
  countryFlag: string
}

export type Image = {
  alt: string
  src: string
}
