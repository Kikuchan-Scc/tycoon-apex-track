
export function getAllAccount() {
    const user = localStorage.getItem('user')
    if (!user) {
      console.error('Account not found')
      return null
    }
    const obj = JSON.parse(user)
    return obj
  }