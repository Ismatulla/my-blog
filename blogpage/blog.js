import { generalToggles } from "../generalToggle.js"
import { getProfileData } from '../homepage/singleprofile.js'
import { postCards } from "../homepage/postCards.js"
// general selectors for all pages 
const switchBtnContainer = document.querySelector('.switchbtn_container')
const switchBtn = document.querySelector('.switchbtn')

const navImg = document.querySelector('.nav-img');
const blogListCard = document.querySelector('.blog_list_card');

const toggleBlog = () => {
  switchBtnContainer.addEventListener('click', () => {
    switchBtnContainer.classList.toggle('dark_mode')
    switchBtn.classList.toggle('dark_mode')
    generalToggles()
    if (switchBtn.classList.contains('dark_mode')) {
      blogListCard.style.background = 'transparent';
      navImg.src = '../assets/logo-white.svg'
    } else {
      blogListCard.style.background = 'transparent';
      navImg.src = '../assets/logo.svg'
    }
  })
}
toggleBlog()
await getProfileData()

 postCards()