type Meal = {
    id: number
    name: string
    description: string
    category: string
    tags: string[]
}

type Drink = {
    id: number
    name: string
    category: string
    options: string[]
}

type Info = {
    id: number
    title: string
    description: string
    icon: string
}

export type Services = {
    meals : Meal[]
    drinks: Drink[]
    info: Info[]
}