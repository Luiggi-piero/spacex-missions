// https://api.spacexdata.com/v3/rockets/falcon9

const API_URL = 'https://api.spacexdata.com/v3/rockets'

export async function getRocketById(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}