function getStorage(id, a) {
  let intialStorage = { id: id, title: a };
  localStorage.setItem("product", JSON.stringify(intialStorage));

  //document.getElementById("lastname").innerHTML = localStorage.getItem("name");
}

function parseStorage() {
  let name = JSON.parse(localStorage.getItem("product"));

  console.log(name);
}
