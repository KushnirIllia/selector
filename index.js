class Dropdown {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.items = options.items

    this.$el.querySelector('.dropdown__label').textContent = this.items[0].label

    this.$el.addEventListener('click', e => {
      if (e.target.classList.contains('dropdown__label')) {
        if (this.$el.classList.contains('open')) {
          this.close()
        } else this.open()
      } else if (e.target.tagName.toLowerCase() === 'li') {
        // label.textContent = e.target.label
        this.select(e.target.dataset.id)
      }
    })
    const itemsHTML = this.items.map(i => {
      return `<li data-id="${i.id}">${i.label}</li>`
    }).join(' ')

    this.$el.querySelector('ul').insertAdjacentHTML('afterbegin', itemsHTML)
  }
  open() {
    this.$el.classList.add('open')
  }
  close() {
    this.$el.classList.remove('open')
  }
  select(id) {
    const item = this.items.find(i => i.id === id)
    console.log(item.label)
    this.$el.querySelector('.dropdown__label').textContent = item.label;
    this.close()
  }
}
const dropdown = new Dropdown('#dropdown', {
  items: [{
      label: 'Москва',
      id: 'msk'
    },
    {
      label: 'Санкт-Петербург',
      id: 'spb'
    },
    {
      label: 'Новосибирск',
      id: 'nsk'
    },
    {
      label: 'Краснодар',
      id: 'krdr'
    }
  ]
})