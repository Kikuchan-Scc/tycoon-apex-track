const baseUrl = 'http://localhost:3001'

export default async function login(url: string, init: object) {
    return fetch(baseUrl + url, init)
        .then(async (res) => {
            if (res.ok) {
                return res
            }
            throw res
        })
        .catch((err) => {
            throw err
        })
}