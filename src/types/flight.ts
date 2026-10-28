type Airport = {
    city: string
    airport: string
    code: string
    time: string
    terminal: string
}

export type Flight = {
    flightNumber: string
    airline: string
    date: string
    departure: Airport
    arrival: Airport
    duration: string
    remainingTime: string
    progress: number
    aircraft: string
    seat: string
    class: string
    captain: string
    altitude: number
    speed: number
    remainingDistance: string
    weather: {
        destination: string
        temperature: number
        humidity: number
    }
}

