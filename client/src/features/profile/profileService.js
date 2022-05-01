import axios from 'axios'

// Create user Profile
const create = async (userId,userData) => {
  const response = await axios.post(`http://localhost:5000/api/profile/${userId}`, userData)
  if (response.status===200) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}


const profileService = {
  create,
}

export default profileService
