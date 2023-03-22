// edit contain 1

const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const project = document.querySelector('#project')

//edit contain 2
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectContent = document.querySelector('#project-content')

about.addEventListener('click', () => {  //have to change this one 
  const aboutBox = new WinBox({  //have to change this one 
    title: 'Sobre Mim',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent, //have to change this one 
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {  //have to change this one 
  const contactBox = new WinBox({  //have to change this one 
    title: 'Contato',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 90,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contactContent, //have to change this one 
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

project.addEventListener('click', () => { //have to change this one 
  const ProjectBox = new WinBox({ //have to change this one 
    title: 'Meus projetos',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 50,
    mount: projectContent, //have to change this one 
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

