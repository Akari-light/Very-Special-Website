const title = document.querySelector('.title');

// Text content
const text = '我刚才确实做错了，没有考虑到你的感受，让你难过了，对不起。我不应该在没有提前告诉你的情况下和异性打游戏，我理解你的感受，以后一定会注意，不让你有这种不舒服的感觉。'.split('');

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`; // Fixed closing tag
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'>&nbsp;</span>`; // Add a non-breaking space
  }
}

// Apply animation delay
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Generate random delay between 0 to 3 seconds
  element.style.animationDelay = `${randomDelay}s`;
});
