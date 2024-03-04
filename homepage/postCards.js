import api from "../api/api.js";
const postCardsContainer = document.querySelector('.post_cards');
const loadAllCardsBtn = document.querySelector('.card_load_btn');


let data = []
let isExpanded = false
const getAllPosts = async () => {
  const response = await api.getAllPosts()
  data = response;
  postCards(data)
}
await getAllPosts()

loadAllCardsBtn?.addEventListener('click', async () => {
  isExpanded = !isExpanded

  if (isExpanded) {
    postCards(data)
  }
  if (!isExpanded) {
    let sliceData = data.slice(0, 3)
    postCards(sliceData)
  }

})

export function postCards(cards = data) {
  postCardsContainer.innerHTML = ''
  const html = cards.length == 0 ? '<h1 style="display:flex;justify-content:center;align-items:center;width:100%;font-size:2rem">No items to show here !</h1>' : cards?.map((dts, idx) => (
    `<a href="../singlepost/singlepost.html?id=${dts?.id}"
    <article class="post_single_card">
      <img src=${dts?.img} alt="post card" width=100%/>
      <div class="post_card_profile_title">${dts?.title}</div>
      <h1>${dts?.description}</h1>
      <div class="profile_info">
        <img src=${dts?.avatar} alt="profile" style='width:36px;height:36px;border-radius:50%'/>
        <p>${dts?.name}</p>
        <p>${dts?.surename}</p>
      </div>
    </article></a>`
  )).join('');

  postCardsContainer.insertAdjacentHTML('afterbegin', html);
}


console.log(data)