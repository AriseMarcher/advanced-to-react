import { Category } from "./category"

export interface Product {
  _id: string
  name: string
  price: number
  description: string
  category: Category
  quantity: number
  sold: number
  photo: FormData
  shipping: boolean
  createdAt: string
}
