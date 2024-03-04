const paragraph = document.querySelector('p')
const container = document.querySelector('body')
const footer = document.querySelector('footer')
const lists = document.querySelectorAll('ul')
const allCards = document.querySelectorAll('article')
const switchBtn = document.querySelector('.switchbtn')

export const generalToggles = () => {
  if (switchBtn.classList.contains('dark_mode')) {
    container.style.background = "#181A2A"
    paragraph.style.color = "#97989F"
    footer.style.background = "#141624"
    lists.forEach(ul => {
      ul.style.color = "#97989F"
    })
    allCards.forEach(card => {
      card.style.background = "#141624"
      card.style.color = "#fff"
    })
  } else {
    container.style.background = "unset"
    paragraph.style.color = "unset"
    footer.style.background = "unset"
    lists.forEach(ul => {
      ul.style.color = "unset"
    })
    allCards.forEach(card => {
      card.style.background = "#fff"
      card.style.color = "#141624"
    })

  }
}