// edit contain 1

const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const project = document.querySelector('#project')
const html = document.querySelector('#html_logo')
const css = document.querySelector('#css_logo')
const js = document.querySelector('#js_logo')
const python = document.querySelector('#python_logo')

//edit contain 2
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const projectContent = document.querySelector('#project-content')
const htmlContent = document.querySelector('#html-content')
const cssContent = document.querySelector('#css-content')
const jsContent = document.querySelector('#js-content')
const pythonContent = document.querySelector('#python-content')

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
    top: 80,
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
    top: 110,
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

html.addEventListener('click', () => {
  const htmlBox = new WinBox({
    title: 'HTML',
    width: '400px',
    height: '400px',
    top: 140,
    right: 50,
    bottom: 50,
    left: 50,
    mount: htmlContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

css.addEventListener('click', () => {
  const cssBox = new WinBox({
    title: 'CSS',
    width: '400px',
    height: '400px',
    top: 170,
    right: 50,
    bottom: 50,
    left: 50,
    mount: cssContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

js.addEventListener('click', () => {
  const jsBox = new WinBox({
    title: 'JavaScript',
    width: '400px',
    height: '400px',
    top: 200,
    right: 50,
    bottom: 50,
    left: 50,
    mount: jsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

python.addEventListener('click', () => {
  const jsBox = new WinBox({
    title: 'Python',
    width: '400px',
    height: '400px',
    top: 230,
    right: 50,
    bottom: 50,
    left: 50,
    mount: pythonContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

