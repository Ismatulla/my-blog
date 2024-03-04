import api from "../api/api.js";

// getProfile
const profilePage = document.querySelector('.hero_card');

export const getProfileData = async () => {
  try {
    const response = await api.getProfile()
    console.log(response)
    const html = ` <div style="text-align:center">${response?.title}</div>
    <h1 >${response?.description}</h1>
    <div class="profile_info">
      <img src=${response?.avatar} style='width:32px;height:32px;border-radius:50%'>
      <p>${response?.firstname}</p>
      <p>${response?.lastname}</p>
      <p>August 20,2022</p>
    </div>`
    profilePage.innerHTML = html
  } catch (error) {
    console.log(error)
  }
}
