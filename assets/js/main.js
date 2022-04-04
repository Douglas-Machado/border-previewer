const border = document.querySelector('.border')

document.addEventListener('mouseup', e => {
  const el = e.target
  if(el.className === "top-left") {
    border.style.borderTopLeftRadius = `${el.value}%`;
    document.querySelector('.top-left-display').innerHTML = `border-top-left-radius: ${border.style.borderTopLeftRadius};`;
  }
  if(el.className === "top-right") {
    border.style.borderTopRightRadius = `${el.value}%`;
    document.querySelector('.top-right-display').innerHTML = `border-top-right-radius: ${border.style.borderTopRightRadius};`;
  } 
  if(el.className === "bottom-right") {
    border.style.borderBottomRightRadius = `${el.value}%`;
    document.querySelector('.bottom-right-display').innerHTML = `border-bottom-right-radius: ${border.style.borderBottomRightRadius};`;
  } 
  if(el.className === "bottom-left") {
    border.style.borderBottomLeftRadius = `${el.value}%`;
    document.querySelector('.bottom-left-display').innerHTML = `border-bottom-left-radius: ${border.style.borderBottomLeftRadius};`;
  }
})