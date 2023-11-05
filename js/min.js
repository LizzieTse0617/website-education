const table = [
  /* AP */
  {
    topic: 'AP',
    tableHead: ['students', 'result', 'subject', 'school'],
    table: ['Lo', '5', 'Chemistry', 'ICS'],
  },
  /* IB */
  {
    topic: 'IB',
    tableHead: ['students', 'result', 'subject', 'school'],
    table: [
      ['Chung', 'Lv6/IB SL', 'Mathematics', 'Island School'],
      ['Kotkar', 'Lv6/IB HL', 'Chemistry', 'Island School'],
      [
        'Cheung',
        'Lv7/IB SL',
        'Mathematics',
        'German Swiss International School',
      ],
      ['Wan', 'Lv6/IB SL', 'Mathematics', 'Island School'],
    ],
  },
  /* IGCSE(cambridge)*/
  {
    topic: 'IB',
    tableHead: ['students', 'result', 'subject', 'school'],
    table: [
      ['Cheung', 'A*', 'Chemistry', 'German Swiss International School'],
      ['Sashill', 'A', 'All sciences', 'Korean International School'],
      [
        'Anuj',
        '7A*',
        'Science & Mathematics',
        'German Swiss International School',
      ],
    ],
  },

  /* CIE*/
  {
    topic: 'CIE',
    tableHead: ['students', 'result', 'subject', 'school'],
    table: ['Giuliano', 'A*', 'Physic, Chemistry & Biology', 'Shatin College'],
  },

  /* GCE*/
  {
    topic: 'GCE',
    tableHead: ['students', 'result', 'subject', 'school'],
    table: [
      ['Chow', 'A* (GCE edexcel)', 'Chemistry', 'Brighton college'],
      ['Jim', 'A*(GCE)', 'Chemistry', 'Headington college'],
    ],
  },
];
export { table };

/* let newArr_topic = table.map((element) => {
  return `${element.topic}`;
});

let newArr_tableHead = table[0].tableHead
  .map((element) => {
    return `<th>${element}</th>`;
  })
  .join('');
console.log(newArr_tableHead);
let [table1, table2, table3, table4] = [
  table[0].table,
  table[1].table,
  table[2].table,
  table[3].table,
];
let tableContent = { table1, table2, table3, table4 };

let arr1 = tableContent.table1.join(',').split(',');
let arr2 = tableContent.table2.join(',').split(',');
let arr3 = tableContent.table3.join(',').split(',');
let arr4 = tableContent.table4.join(',').split(',');

let newArr_tableContent_table2 = arr2.map((element) => {
    return `<td>${element}</td>`;
  }),
  chunk;

while (newArr_tableContent_table2.length > 0) {
  let chunk = newArr_tableContent_table2.splice(0, 4);
  console.log(chunk);
} */

/* let newArr_tableContent_table3 = tableContent.table3
  .map((element) => {
    return `<td>${element}</td>`;
  })
  .join('');
let newArr_tableContent_table4 = tableContent.table4
  .map((element) => {
    return `<td>${element}</td>`;
  })
  .join(''); */

/* let newArr_tableContent_all = {
  newArr_tableContent_table1,
  newArr_tableContent_table2,
  newArr_tableContent_table3,
  newArr_tableContent_table4,
};
console.log(newArr_tableContent_all); 
 */

/* tableData.innerHTML = newArr_topic
  .map((element) => {
    return `<h2>${element}</h2>
    <table><tr>${newArr_tableHead}</tr>
    <tr>${chunk}</tr>
    </table>`;
  })
  .join('');
 */
/* let arr = table[0].tableHead;
arr.forEach((element) => {
  return `<th>${element}</th>`;
}); */

/* function studentResult(TABLE) { */
/*   let table = document.getElementById('table');
  let data = TABLE[0]; */
/* console.log('12'); */
/* return `<div class="13">${element[0]}</div>` */
/* } */
/* for (let step = 2019; step < 2023; step++) {
  let AP = `AP` + `${step}`;
  let data = `data` + `${step}`;} */
/*   if (result[0].year === '2021') { //2022
    console.log('yes');
  } else if (result[1].year === '2021') { //2021
    console.log('no');
  }
 */

//using map method,

//structure HTML =
//{}{}{}{}
//function AP_22(data22, data21, data20, data19) {
//change = ${div class="AP2022__all"}

// }
