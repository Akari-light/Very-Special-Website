
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('送给我最爱的女人 林嘉宜 我爱你').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        // Insert a line break before "我爱你"
        if (titles[index] === '我' && titles.slice(index, index + 3).join('') === '我爱你') {
          titleElement.innerHTML += '<br>';
        }
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 300ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};