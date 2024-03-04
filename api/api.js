import { baseUrl } from "./baseUrl.js"

const api = {
  getAllPosts: async () => {
    const response = await fetch(`${baseUrl}/posts`)
    const data = await response.json()
    return data
  },
  getSinglePost: async (id) => {
    const response = await fetch(`${baseUrl}/posts/${id}`)
    const data = await response.json()
    return data
  },
  updateSinglePost: async (id, updateSinglePostData) => {

    await fetch(`${baseUrl}/posts/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(updateSinglePostData)
    })

  },
  deleteSinglePost: async (id) => {
    const response = await fetch(`${baseUrl}/posts/${id}`, { method: "DELETE" })
    console.log(response)
  },
  createPost: async (createData) => {

    await fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(createData)
    })

  },
  createProfile: async (createData) => {
    await fetch(`${baseUrl}/profile`, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(createData)
    })
  },
  getProfile: async () => {

    const response = await fetch(`${baseUrl}/profile`)
    const data = response.json()
    console.log(data)
    return data

  },

  //  comments
  postComment: async (comment) => {

    await fetch(`${baseUrl}/comments`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(comment)
    })

  },
  getComment: async () => {
    const response = await fetch(`${baseUrl}/comments`)
    const data = await response.json();
    return data
  },
  updateComment: async (id, comment) => {

    await fetch(`${baseUrl}/comments/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(comment)
    })

  },
  deleteComment: async (id) => {
    await fetch(`${baseUrl}/comments/${id}`, { method: "DELETE" })
  },

}

export default api