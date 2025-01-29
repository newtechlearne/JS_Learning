let p1 = new Promise(function (resolve, reject) {
    let data = "select image";
    setTimeout(function() {
        resolve(data);
    }, 4000);
});
let p2 = new Promise(function (resolve, reject) {
    let data = "apply filter";
    setTimeout(function() {
        resolve(data);
    }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
    let data = "add caption";
    setTimeout(function() {
        resolve(data);
    }, 5000);
});
let p4 = new Promise(function (resolve, reject) {
    let data = "upload post";
    setTimeout(function() {
        resolve(data);
    }, 1000);
});

p1.then(function(data) { console.log(data) })
  .then(function() { return p2.then(function(data) { console.log(data) }) })
  .then(function() { return p3.then(function(data) { console.log(data) }) })
  .then(function() { return p4.then(function(data) { console.log(data) }) });


  async function main() {
  let p1 = new Promise(function (resolve, reject) {
    let data = "select image";
    setTimeout(function() {
        resolve(data);
    }, 4000);
  });
  let p2 = new Promise(function (resolve, reject) {
    let data = "apply filter";
    setTimeout(function() {
        resolve(data);
    }, 2000);
  });
  let p3 = new Promise(function (resolve, reject) {
    let data = "add caption";
    setTimeout(function() {
        resolve(data);
    }, 5000);
  });
  let p4 = new Promise(function (resolve, reject) {
    let data = "upload post";
    setTimeout(function() {
        resolve(data);
    }, 1000);
  });

  let data1 = await p1;
  console.log(data1);
  let data2 = await p2;
  console.log(data2);
  let data3 = await p3;
  console.log(data3);
  let data4 = await p4;
  console.log(data4);
}

main();
function selectImage(callback) {
  let data = "select image";
  setTimeout(function() {
    callback(data);
  }, 4000);
}

function applyFilter(data, callback) {
  let filterData = "apply filter to " + data;
  setTimeout(function() {
    callback(filterData);
  }, 2000);
}

function addCaption(data, callback) {
  let captionData = "add caption to " + data;
  setTimeout(function() {
    callback(captionData);
  }, 5000);
}

function uploadPost(data, callback) {
  let postData = "upload post " + data;
  setTimeout(function() {
    callback(postData);
  }, 1000);
}

selectImage(function(data) {
  console.log(data);
  applyFilter(data, function(data) {
    console.log(data);
    addCaption(data, function(data) {
      console.log(data);
      uploadPost(data, function(data) {
        console.log(data);
      });
    });
  });
});