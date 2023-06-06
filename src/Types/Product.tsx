export type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  tags: Array<string>
  type: string
  brand: string
  slug: string
  rating: number | null
}
