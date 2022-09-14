let switches = document.getElementsByClassName('switch');

for (let i of switches) {
    i.addEventListener('click', function () {
      let theme = this.dataset.theme;
      console.log(theme);
   });
}