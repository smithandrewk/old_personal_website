let colors = ["#0040FF", "#FF0000", "#00B135"];
let thats = [
    ["z", "ask for ironic photos at restaurants with my friends"],
    ["gig", "play the keys"],
    ["mh", "play the keys"],
    ["waho", "love waffle house"]
];
const modal = document.querySelector(".modal")
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");


(function() {

    // setModeEventListener();
    setRandomLinkColor();
    setColorHoverListener();
    // setBioEventListener();
    // setRandomPhoto();

    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains('modal')) {
            modal.classList.remove('open');
            original.classList.remove("open");
        }
    })
    setRandomThat();
    setInterval(() => {
        setRandomPhoto();
        setRandomThat();
    }, 6000);

    setInterval(() => {
        setRandomLinkColor();
    }, 5000);
})();

/* Dark Mode */
// function setModeEventListener() {
//   let list = document.body.classList;
//   document.getElementById("toggler").addEventListener("change", event => {
//     event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
//   });
// }

/* Colors */
function setRandomThat() {
    that = thats[Math.floor(Math.random() * thats.length)]
    anchor = document.getElementById("that");
    anchor.innerHTML = that[1];
    original.src = "./img/" + that[0] + ".jpg"
    caption.textContent = "Did you know that I " + anchor.innerHTML + "?";
    anchor.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
    })

}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
    Array.from(document.getElementsByTagName("a")).forEach(e => {
        e.style.color = getRandomColor();
    });
}

function setColorHoverListener() {
    Array.from(document.querySelectorAll("a, button")).forEach(e => {
        e.addEventListener("mouseover", setRandomLinkColor);
    });
}

/* Photos */

function setRandomPhoto() {
    let num = Math.floor(Math.random() * 3) + 1;
    document.getElementById("propic").src = `./img/headshots/face${num}.png`;
}

/* Bio Toggles */

// function setBioEventListener() {
//   Array.from(document.getElementsByTagName("button")).forEach(e => {
//     e.addEventListener("click", bioToggle);
//   });
// }

// function bioToggle(e) {
//   let bioType = e.target;
//   let color = getRandomColor();
//   off(bioType);
//   bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
//   let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
//   if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
// }

// function off(bioType) {
//   Array.from(document.getElementsByTagName("button")).forEach(butt => {
//     butt.style.borderColor = "#96979c";
//     butt.style.color = "#96979c";
//   });
//   Array.from(document.getElementsByClassName("bio")).forEach(e => {
//     e.classList.remove("show");
//   });
// }

// fetch("https://api.github.com/repos/smithandrewk/thoughts/issues")
// .then(response => response.json())
// .then(data => {
//     let num_commits;
//     //last 10 commits
//     if (data.length>=10){
//         num_commits=10;
//     } else {
//         num_commits = data.length
//     }
//     for(i=0;i<num_commits;i++){
//         message = data[i].body
//         date = data[i].created_at
//         locT = date.indexOf("T")
//         locZ = date.indexOf("Z")
//         time = date.substring(locT+1,locZ)
//         date = date.substring(0,locT)
//         ymd = date.split("-")
//         // The important variables are time and ymd, which are time and year month day, respectively
//         var ul = document.getElementById("list");
//         var li = document.createElement("li");
//         var left = document.createElement("span");
//         left.className="alignleft"
//         var right = document.createElement("span");
//         right.className="alignright"
//         let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];
//         right.style="color:"+String(colors[Math.floor(Math.random() * colors.length)])
//         // Handle entirely-italicized messages
//         if(message[0]=="_"){ // if the first character of the message is the markdown italics character
//           message = message.replaceAll("_","") // remove all underscores
//           a = left.appendChild(document.createElement("i")); // create an italics node
//           a.appendChild(document.createTextNode(message)); // append message to italics node
//         } else { // if first character is not underscore
//           left.appendChild(document.createTextNode(message)); // just append message to span
//         }


//         right.appendChild(document.createTextNode(ymd[1]+"/"+ymd[2]+"/"+ymd[0]+" @ "+time+" UTC"));
//         li.appendChild(left)
//         li.appendChild(right)
//         ul.appendChild(li);
//         ul.appendChild(document.createElement("br"))
//     }
//     console.log(data)
// }
// )