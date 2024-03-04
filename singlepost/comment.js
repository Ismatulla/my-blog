import api from "../api/api.js";

const commentContainer = document.querySelector('.comment_container')
const input = document.querySelector('.comment_input');
const button = document.querySelector('.comment_btn');


const postComment = async (comments) => {
  try {
    const response = await api.postComment(comments)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

let comment = { text: "" }
let id
input.addEventListener('change', (e) => {
  comment = { text: e.target.value }
})

export const postComments = () => {
  button.addEventListener('click', (e) => {
    e.preventDefault()
    postComment(comment)
  })
}

// get all comments 
export const getComments = async () => {
  try {
    const response = await api.getComment()
    console.log(response)
    const html = response?.map(data => (
      `<li class="single_comment">${data?.text} 
      <span>
      
       <button data-id=${data?.id} class="delete">delete</i>
      </button>
     
      <button data-id=${data?.id} class="edit">edit</button>
      </span>

      </li>`
    )).join('')
    commentContainer.innerHTML = html
  } catch (error) {
    console.log(error)
  }
}

// update single comment 
const editComment = async () => {
  try {
    await api.updateComment(id, comment)
  } catch (error) {
    console.log(error)
  }
}
// delete single comment
const deleteComment = async () => {
  try {
    await api.deleteComment(id)
  } catch (error) {
    console.log(error)
  }
}
// we use event delegation here to catch the delete or edit btn 
commentContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit')) {
    id = e.target.dataset.id

    e.target.insertAdjacentHTML('afterend', `<div><input type="text" placeholder="Edit  the  post" class="comment_input update_input"  style='border:none;'>
    <button  class="comment_btn" >update</button></div>`)

    e.target.style = "display:none"
  }
  if (e.target.classList.contains('delete')) {
    id = e.target.dataset.id
    deleteComment(id)
  }
  if (e.target.classList.contains('comment_btn')) {
    editComment(id, comment)
    console.log(id, comment)
  }
})

// getting input value change event
commentContainer.addEventListener('change', (e) => {
  if (e.target.classList.contains('update_input')) {
    comment = { text: e.target.value }
    console.log(comment)
  }
})