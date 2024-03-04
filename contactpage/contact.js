import api from "../api/api.js";

// general selectors for all pages 
import { generalToggles } from "../generalToggle.js";
const switchBtn = document.querySelector('.switchbtn')
const switchBtnContainer = document.querySelector('.switchbtn_container')

const navImg = document.querySelector('.nav-img');
const contactTitle = document.querySelector('.contact_title');

// category selectors
const category = document.querySelector('#category')
// 
const toggleContact = () => {
  switchBtnContainer.addEventListener('click', () => {

    switchBtnContainer.classList.toggle('dark_mode')
    switchBtn.classList.toggle('dark_mode')
    generalToggles()

    if (switchBtn.classList.contains('dark_mode')) {
      navImg.src = '../assets/logo-white.svg'
      contactTitle.style.color = '#fff'
    } else {
      contactTitle.style.color = '#141624'
      navImg.src = '../assets/logo.svg'
    }

  })

}
toggleContact()
let getValue = 'Blog'
const updateValue = (value) => {
  getValue = value;
};
const getCategoryValue = () => getValue;

category.addEventListener('change', () => {
  updateValue(category.value)
})


// create post page 
const form = document.querySelector('.message_box');
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const img = document.querySelector('.bg_img').value
  const avatar = document.querySelector('.prof_img').value
  const firstname = document.querySelector('.input_firstname').value
  const lastname = document.querySelector('.input_lastname').value
  const title = document.querySelector('.input_title').value
  const description = document.querySelector('.input_description').value
  const name = document.querySelector('.input_firstname').value
  const surename = document.querySelector('.input_lastname').value
  let createData = { img, avatar, firstname, lastname, title, description, name, surename }
  console.log(getCategoryValue())
  getCategoryValue() == 'Blog' ? createBlog(createData) :
    profileCreate(createData)
})

async function createBlog(createData) {
  try {
    const response = await api.createPost(createData);
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

// create profile


export async function profileCreate(createData) {
  try {
    await api.createProfile(createData)

  } catch (error) {

  }
}
