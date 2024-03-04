// general selectors for all pages 
import { generalToggles } from "../generalToggle.js";
import { postCards } from "./postCards.js";
import { getProfileData } from "./singleprofile.js";
const switchBtn = document.querySelector('.switchbtn')
const switchBtnContainer = document.querySelector('.switchbtn_container')

const navImg = document.querySelector('.nav-img');
const title = document.querySelector('.post_card_title')



const toggleHome = () => {
  switchBtnContainer.addEventListener('click', () => {

    switchBtnContainer.classList.toggle('dark_mode')
    switchBtn.classList.toggle('dark_mode')

    generalToggles()

    if (switchBtn.classList.contains('dark_mode')) {
      navImg.src = '../assets/logo-white.svg'
      title.style.color = "#fff"
    } else {
      navImg.src = '../assets/logo.svg'
      title.style.color = "#141624"
    }

  })

}
toggleHome()

// rendering all posts dynamically
postCards()

//rendering profileDatra
await getProfileData()
