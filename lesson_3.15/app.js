let booksArray = [
  {
    id: 1,
    name: "Mehrobdan chayon",
    type: "Badiy",
    author: "Abdulla Qodiriy"
  },
  {
    id: 2,
    name: "O'zbegim",
    type: "She'r",
    author: "Erkin Vohidov"
  },
  {
    id: 3,
    name: "Fizikaning asoslari",
    type: "Ilmiy",
    author: "Isaac Newton"
  },
  {
    id: 4,
    name: "Qur'on tafsiri",
    type: "Diniy",
    author: "Imom Buxoriy"
  },
  {
    id: 5,
    name: "O'tgan kunlar",
    type: "Badiy",
    author: "Abdulla Qodiriy"
  },
  {
    id: 6,
    name: "Erk",
    type: "She'r",
    author: "Cho'lpon"
  },
  {
    id: 7,
    name: "Tibbiyot qonunlari",
    type: "Ilmiy",
    author: "Abu Ali Ibn Sino"
  },
  {
    id: 8,
    name: "Hadislar to'plami",
    type: "Diniy",
    author: "Imom Muslim"
  },
  {
    id: 9,
    name: "Yulduzli tunlar",
    type: "Badiy",
    author: "Pirimqul Qodirov"
  },
  {
    id: 10,
    name: "Jimjitlik",
    type: "She'r",
    author: "Abdulla Oripov"
  },
  {
    id: 11,
    name: "Kimyo asoslari",
    type: "Ilmiy",
    author: "Dmitriy Mendeleyev"
  },
  {
    id: 12,
    name: "Risolat va Sunnat",
    type: "Diniy",
    author: "Imom Termiziy"
  },
  {
    id: 13,
    name: "Kecha va kunduz",
    type: "Badiy",
    author: "Abdulla Qodiriy"
  },
  {
    id: 14,
    name: "Yozganlarim",
    type: "She'r",
    author: "Mirtemir"
  },
  {
    id: 15,
    name: "Matematika prinsiplari",
    type: "Ilmiy",
    author: "Euclid"
  },
  {
    id: 16,
    name: "Fiqh asoslari",
    type: "Diniy",
    author: "Imom Shofeiy"
  },
  {
    id: 17,
    name: "Temir xotin",
    type: "Badiy",
    author: "Said Ahmad"
  },
  {
    id: 18,
    name: "Tong nafasi",
    type: "She'r",
    author: "Zulfiya"
  },
  {
    id: 19,
    name: "Astronomiya asoslari",
    type: "Ilmiy",
    author: "Ulug'bek"
  },
  {
    id: 20,
    name: "Zikr ahlining so'zlari",
    type: "Diniy",
    author: "Abdulqodir G'iloniy"
  }
];

let tbody = document.getElementById("tbody");


function getBookStre (books){
  tbody.innerHTML = ""

  for ( let i = 0 ; i < books.length ; i++){
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <tr>
    <th scope="row">${books[i].id}</th>
    <td>${books[i].name}</td>
    <td><span class="btn btn-info">${books[i].type}</span></td>
    <td>${books[i].author}</td>
    <td><button class="btn btn-danger" onclick="deletBookStore(${books[i].id})"  >X</button></td>
    </tr>
    `
    tbody.appendChild(tr)
  }
}

getBookStre(booksArray)

let form = document.getElementById("form");
let exampleInputName = document.getElementById("exampleInputName")
let exampleInputType = document.getElementById("exampleInputType")
let exampleInputAuthor = document.getElementById("exampleInputAuthor")



form.addEventListener("submit", addBookStore )

function addBookStore (e) {
  e.preventDefault();
  let newObj = {
    id : booksArray[booksArray.length - 1].id + 1,
    name : exampleInputName.value,
    type : exampleInputType.value,
    author : exampleInputAuthor.value,
  }
  booksArray.push(newObj)
  getBookStre(booksArray)


  exampleInputName.value = ""
  exampleInputType.value = ""
  exampleInputAuthor.value = ""
}

function deletBookStore(id) {
  if (confirm("O'chirishni istaysizmi?")) {
    let newArray = [];
    for (let i = 0; i < booksArray.length; i++) {
      if (booksArray[i].id !== id) {
        newArray.push(booksArray[i]);
      }
    }
    booksArray = newArray;
    getBookStre(booksArray);
  }
}




let select = document.getElementById("select");
let orgBooksArr = booksArray

select.addEventListener("change", (e) => {
  let sel = e.target.value;

  function filterBooks(index) {
    if (index === "Hammasi") {
      return orgBooksArr; // Asl nusxani qaytarish
    } else {
      return orgBooksArr.filter((item) => {
        return item.type === index;
      });
    }
  }

  let result = filterBooks(sel); 
  booksArray = result; 
  getBookStre(result); 
});
