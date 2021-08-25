/**
 * Fancy Box Module Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to fancy box.
 *
 * @namespace fancybox
 * @params { btn } String
 * @params { wrapper } String
 */
 
export default function fancybox(btn = '[data-fancy-open]', wrapper = '[data-modal-container]') {

  const buttons = document.querySelectorAll(btn)
  const modal = document.querySelector(wrapper)
  const modalBackground = document.querySelector('.modal-background')

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const title = button.dataset.title
      const description = button.dataset.content

      modal.querySelector('.title').textContent = title
      modal.querySelector('.content').innerText = description

      modal.classList.add('open')
    })
  })

  modalBackground.addEventListener('click', (e) => {
    modal.classList.add('out')
  })
}
