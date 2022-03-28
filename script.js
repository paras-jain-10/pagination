//alert("Hello");
//  let state={
//      querySet: students,
//      currentPage: 1,
//      rows: 5,
// };

// let p1={

// }
// p1.nm='Paras';
// console.log(p1.name);

const List = function (element, listItems) {
  console.log(element);
  // console.log(listItems)
  // console.log(listItems);
  //this.pageSize = document.getElementsByClassName('sel').value;
  this.pageSize = listItems.length;
  this.currentPage = 1;

  this.render = function () {
    //Empty previous entries
    let htmlContent =
      '<table class="tab"><tr><th>rollno</th><th>Name</th><th>Email</th></tr><tbody id="tableBody"></tbody></table>';
    $(element).html(htmlContent);
    let html1 = document.getElementById("tableBody");
    console.log(html1, this.pageSize);

    for (let i = 0; i < this.pageSize; i++) {
      html1.innerHTML += `<tr><td>${listItems[i].rollno}</td> <td>${listItems[i].name}</td><td>${listItems[i].email}</td></tr>`;
    }
    //let htmlContent1=`<button class='first'>first</button><button class='prev'>prev</button>${this.currentPage}<button class='next'>next</button><button class='last'>last</button>`;

    //element.innerHTML+=(htmlContent1);
  };

  this.navigateFirst = function () {
    this.currentPage = 1;
    this.render();
  };
  this.navigateLast = function () {
    this.currentPage = this.pages;
    //builtTable();
    this.render();
  };
  this.navigatePrev = function () {
    this.currentPage = this.currentPage - 1;
    //builtTable();
    this.render();
  };
  this.navigateNext = function () {
    this.currentPage = this.currentPage + 1;
    //builtTable();
    this.render();
  };
  this.changeShow = function () {
    this.pageSize = document.getElementsByClassName("sel");
    //builtTable();
    this.render();
  };
  $(".first").on("click", this.navigateFirst);
  $(".prev").on("click", this.navigateLast);
  $(".next").on("click", this.navigatePage);
  $(".last").on("click", this.navigateNext);
  $(".sel").on("change", this.changeShow);
};

// List.prototype.render=function(){

// };

// }

// List();

// const listObj = new List(document.getElementById('elementId'), students);

// listObj.render();

// let rowelement = document.createElement('tr');
// rowelement.innerHTML = "<td>1</td><td>Paras</td><td>paras.jain@unthinkable.co</td>"
// document.getElementById("tableBody").append(rowelement);
// document.getElementById("tablefoot").append()
//console.log(document.querySelector('#top').textContent);
// console.log(document.querySelector('#top').textContent);;
