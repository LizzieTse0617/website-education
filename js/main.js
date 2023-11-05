import { result } from './data.js';

document.getElementById('myBtn').addEventListener('click', () => {
  window.scrollTo(0, 0);
});

function init() {
  collapseBox();

  // Array of different class names to handle
  const classList = [
    '.AP2023__all',
    '.AP2022__all',
    '.AP2021__all',
    '.AP2020__all',
    '.AP2019__all',
    '.StudentPage2023__all',
  ]; // Add any additional class names

  const data = [
    result[0].ap,
    result[1].ap,
    result[2].ap,
    result[3].ap,
    result[4].ap.concat(result[4].sat),
  ];

  const elements = classList.map((className) =>
    document.querySelector(className)
  );

  const div = `<div class="AP2022" id="AP2022_bio"><h3 id="subject">`;
  const h3 = `</h3><h3 id="heading">`;
  const h3_lv5 = `</h3><h4 id="level"><img id="lv5" src="./images/lv5.svg" width="40px" />`;
  const h3_lv4 = ` students<br /><img id="lv4" src="./images/lv4.svg" width="40px" />`;
  const h4 = ` students</h4><p id="students">ICS students:`;
  const end = `</p></div></div>`;

  elements.forEach((element, index) => {
    if (element) {
      element.innerHTML = data[index]
        .map((dataElement) => {
          return `<div>${div}${dataElement.subject}${h3}${dataElement.heading}${h3_lv5}${dataElement.level5}${h3_lv4}${dataElement.level4}${h4}${dataElement.students_ICS}${end}`;
        })
        .join('');
    }
  });
}

function collapseBox() {
  const accordions = document.getElementsByClassName('accordion');
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].onclick = function () {
      this.classList.toggle('is-open');

      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        // accordion is currently open, so close it
        content.style.maxHeight = null;
      } else {
        // accordion is currently closed, so open it
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    };
  }
  accordions[0].click();
}

document.addEventListener('DOMContentLoaded', init);
