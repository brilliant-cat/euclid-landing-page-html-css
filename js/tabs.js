document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.section-work__item-btn').forEach(function (itemBtn) {
    itemBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.section-work__content').forEach(function(sectionWorkContent) {
        sectionWorkContent.classList.remove('content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('content-active')

      document.querySelectorAll('.section-work__item-btn').forEach(function(itemBtn) {
        itemBtn.classList.remove('section-work__item-btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('section-work__item-btn-active')
    })
  })
})
