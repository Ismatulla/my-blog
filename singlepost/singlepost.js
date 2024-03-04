import { generalToggles } from "../generalToggle.js";
import api from "../api/api.js";
import { postComments, getComments } from "./comment.js";
const postCardsContainer = document.querySelector('.single_post_container');
const switchBtn = document.querySelector('.switchbtn')
const switchBtnContainer = document.querySelector('.switchbtn_container')


const h1 = document.querySelector('.single_post_card h1')
const singlePostParagraph = document.querySelector('.single_post_description')
const navImg = document.querySelector('.nav-img');
const updateModal = document.querySelector('.update_single_modal_form')
const closeModal = document.querySelector('.close_window')
const submitModal = document.querySelector('.update_single_btn')

const url = new URLSearchParams(window.location.search)
let id = url.get('id')
let data = {}


// get single post 
const getSingleData = async () => {
  const response = await api.getSinglePost(id)
  data = response
}

await getSingleData()




// rendering all data 
const postCards = () => {

  const html = ` <article class="post_single_card">
      <img src=${data?.img} alt="post card" width=100% style="border-radius:8px"/>
      <div class="title_container">
      <div class="post_card_profile_title">${data?.title}</div>
      <div class="icon_container"> 
      <span class='edit_single_card_icon'> <i class="fa-regular fa-pen-to-square"></i></span>
      <span  class="edit_single_card_icon delete_icon"><i class="fa-regular fa-trash-can"></i></span>
      </div>
      </div>
      <h1>${data?.description}</h1>
      <div class="profile_info">
        <img src=${data?.avatar} alt="profile" style='width:36px;height:36px;border-radius:50%'/>
        <p>${data?.name}</p>
        <p>${data?.surename}</p>
      </div>
    </article>`
  const info = '<h1 style="display:flex;justify-content:center;align-items:center;height:40vh">Item deleted!</h1>'
  const toggle = data == undefined ? info : html

  postCardsContainer.insertAdjacentHTML('afterbegin', toggle);
}
postCards()

const toggleSinglePost = () => {

  switchBtnContainer.addEventListener('click', () => {
    switchBtnContainer.classList.toggle('dark_mode')
    switchBtn.classList.toggle('dark_mode')
    generalToggles()
    if (switchBtn.classList.contains('dark_mode')) {
      h1.style.color = '#fff'
      postCardsContainer.style.background = 'transparent';
      singlePostParagraph.style.color = '#97989F'

      navImg.src = '../assets/logo-white.svg'
    } else {
      h1.style.color = "#141624"
      singlePostParagraph.style.color = "#141624"
      navImg.src = '../assets/logo.svg'
    }
  })
}
toggleSinglePost()

// modal window for update 

const editBtn = document.querySelector('.edit_single_card_icon');
const deleteBtn = document.querySelector('.delete_icon')
let updateSinglePostData
let imgInput = document.querySelector('.bg_img')
let avatarInpt = document.querySelector('.prof_img')
let nameInput = document.querySelector('.input_firstname')
let surenameInput = document.querySelector('.input_lastname')
let titleInput = document.querySelector('.input_title')
let descriptionInput = document.querySelector('.message_area')
function handleOpenModal() {
  updateModal.classList.add('active')
  imgInput.value = data?.img
  avatarInpt.value = data?.avatar
  nameInput.value = data?.name
  surenameInput.value = data?.surename
  titleInput.value = data?.title
  descriptionInput.value = data?.description
}
editBtn?.addEventListener('click', () => {
  handleOpenModal()
})

updateModal.addEventListener('submit', (e) => {
  e.preventDefault()
  let img = imgInput.value
  let avatar = avatarInpt.value
  let name = nameInput.value
  let surename = surenameInput.value
  let title = titleInput.value
  let description = descriptionInput.value
  updateSinglePostData = { img, avatar, name, surename, title, description };

  updateSinglePost(updateSinglePostData)
  getSingleData()
})
closeModal.addEventListener('click', () => {
  updateModal.classList.remove('active')
})

// update single post
async function updateSinglePost(data) {
  await api.updateSinglePost(id, data)
}

// deleting single post by id 
async function deletePost() {
  await api.deleteSinglePost(id)
}
deleteBtn?.addEventListener('click', () => {
  deletePost()
  getSingleData()
})

postComments()

await getComments()