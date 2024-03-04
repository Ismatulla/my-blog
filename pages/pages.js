// general selectors for all pages 
import { generalToggles } from "../generalToggle.js";
const authorInfocard = document.querySelector('.authro_info_card')
const authorName = document.querySelector('h2')
const navImg = document.querySelector('.nav-img');

const switchBtnContainer = document.querySelector('.switchbtn_container')
const switchBtn = document.querySelector('.switchbtn')

const togglePage = () => {
  switchBtnContainer.addEventListener('click', () => {
    switchBtnContainer.classList.toggle('dark_mode')
    switchBtn.classList.toggle('dark_mode')
    generalToggles()
    if (switchBtn.classList.contains('dark_mode')) {
      authorInfocard.style.background = "#242535";
      authorInfocard.style.color = "#bababf";
      authorName.style.color = '#fff'
      navImg.src = '../assets/logo-white.svg'
    } else {
      authorInfocard.style.background = "#fff";
      authorInfocard.style.color = "#bababf"
      authorName.style.color = '#242535'
      navImg.src = '../assets/logo.svg'
    }
  })

}
togglePage()