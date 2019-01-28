function setup() {
  noCanvas();
  // loadFile();
  pageLoaded();
}

function pageLoaded() {
  loadStrings("./../data-texts/coffee.txt", function(data) {
    document.getElementById("title").innerHTML = data[0];
    paragraph = document.getElementById("test");
    paragraph.innerHTML = "";

    for (let i = 1; i < data.length; i++) {
      if (data[i] != "") {
        let strLength = 750; // length of the sample text 
        let lastSpaceIndex = data[i].substring(0, strLength).lastIndexOf(" ");

        // add text
        paragraph.innerHTML += data[i].substring(0, lastSpaceIndex) + " ...";

        // add Button read
        paragraph.innerHTML += "\n<button type=\"button\" name=\"button\" style=\"float:right;\" id=\"read\">Read More</button>";
        document.getElementById("read").onclick = loadFile;

        break;
      }
    }
  });
}


function fileLoaded(data) {
  $(document).ready(function() {
    $("#read").hide();
  })

  paragraph = document.getElementById("test");

  for (let i = 1; i < data.length; i++) {
    if (data[i] != "")
      paragraph.innerHTML += data[i] + '\n<br/> <br/>\n';
  }

  paragraph.innerHTML += "\n<button type=\"button\" name=\"button\" style=\"float:right;\" id=\"hide\">Hide</button>";
  document.getElementById("hide").onclick = pageLoaded;
}

function loadFile() {
  // fileLoaded == callback function
  loadStrings("./../data-texts/coffee.txt", fileLoaded);
}
