function toggleMode() {
 const html = document.documentElement
  html.classList.toggle("light")

// pegar image 
 const img = document.querySelector('#profile img')
 
 // substituir a image 
 if (html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar-light-mode.jpg")
  } else {
   img.setAttribute("src", "./assets/avatar-dark-mode.png")
 }

}