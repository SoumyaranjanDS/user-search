let users = [
  {
    name: "shahrukh khan",
    pic: "https://imgs.search.brave.com/DrKy7E3usqOkyQrD7VJQ0JyKPLOjU4h0qIHmX9PMNWg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTc2/NjEwOTY1L3Bob3Rv/L25ldy1kZWxoaS1p/bmRpYS1ib2xseXdv/b2QtYWN0b3Itc2hh/aHJ1a2gta2hhbi1w/b3Nlcy1mb3ItYS1w/cm9maWxlLXNob290/LWF0LWhvdGVsLWNy/b3duZS1wbGF6YS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/T28xdTZhOTRxZjAw/OGJabGhFOTlIMTk1/UVhCNm1qb1cyOWJ2/RGZsRG0yVT0",
    bio: "Charming king of romance who steals hearts and overpriced popcorn. ❤️👑😂",
  },
  {
    name: "salman khan",
    pic: "https://imgs.search.brave.com/tx1d0khoD359ke9evMiS-uy2y1rv1iBn9Zlu0ESqyfE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/MTIxMzAzNy9waG90/by9tdW1iYWktaW5k/aWEtc2FsbWFuLWto/YW4tYXR0ZW5kcy10/aGUtdHJhaWxlci1s/YXVuY2gtb2YtZmls/bS1raXNpLWthLWJo/YWkta2lzaS1raS1q/YWFuLW9uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1yUk51/ZjdFYmVjWmdhMEVj/V2ZPS2RKZElfVzR5/c2V5V2NiUk5JUy1x/VVZVPQ",
    bio: "Muscles, swag, and shirts disappear faster than box-office records. 💥😎💪",
  },
  {
    name: "prabhas",
    pic: "https://imgs.search.brave.com/kiX0pkKJkmOnu1w6az8JOB-08BOvhPpnn60wO75zXdI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjLzE5/LzQ2LzNjMTk0NmU2/YTI2YjBhNzIzYjU0/YWVmM2FkZGVlNTA0/LmpwZw",
    bio: "Baahubali legend who lifts mountains—and audience expectations—effortlessly. 🗻💪😄",
},
{
    name: "amitabh bachan",
    pic: "https://imgs.search.brave.com/r75Z9t3-gqpZ2lDFYujQXlebDFvrf3maLfJw4u0socI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU3/Mzk5Nzk1L3Bob3Rv/L25ldy1kZWxoaS1p/bmRpYS1pbmRpYW4t/Ym9sbHl3b29kLWFj/dG9yLWFtaXRhYmgt/YmFjaGNoYW4tcG9z/ZXMtZm9yLXByb2Zp/bGUtc2hvb3QtYXQt/aG90ZWwtdGFqLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1Z/c0p0UU5rXzFuMUVq/cmNsNVJQZVloLThE/OFJsWEc4VEdJc0hQ/cWozTmJZPQ",
    bio: "Baritone so deep even submarines feel insecure around him. 🎤😄🛳️",
  },
  {
    name: "priyanka chopra",
    pic: "https://imgs.search.brave.com/dr7OsYa-ASIg-quzlETsznMC4vgj1JGro6Q9okBxdQU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE4/OTU2MDYxOS9waG90/by9qZWRkYWgtc2F1/ZGktYXJhYmlhLXBy/aXlhbmthLWNob3By/YS1qb25hcy1wb3Nl/cy1pbi10aGUtcG9y/dHJhaXQtc3R1ZGlv/LWR1cmluZy10aGUt/cmVkLXNlYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9aGlk/cjFQT29mc1ViWlY0/ZEthUFU1TmVEVUlN/TTFyQUhzdzhBbU9l/Z2Ntcz0",
    bio: "Global queen juggling Hollywood, Bollywood, and fabulous hairstyles. 🌟✈️😂",
  },
  {
    name: "madhuri dixit",
    pic: "https://imgs.search.brave.com/pr_xDcBBrQtXF18MqzfcPMA-e3U7OW8j7XOqAhmlmBk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDcw/ODA0MzY2L3Bob3Rv/L2luZGlhbi1ib2xs/eXdvb2QtYWN0cmVz/cy1tYWRodXJpLWRp/eGl0LWxvb2tzLW9u/LWR1cmluZy1hLXBy/b210aW9uYWwtZXZl/bnQtZm9yLWEtZGFu/Y2UtZXZlbnQtaW4u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWZUZWFGLTY1bWRH/M085SnRuTG1QQm5H/VGZwSjc4YWJDWFEx/SllNbVRoYWc9",
    bio: "Smile and dance moves powerful enough to melt glaciers instantly. 😊💃❄️",
  },
  {
    name: "rekha",
    pic: "https://imgs.search.brave.com/P6vdxg0TeV0i_kiBLU4_SQp98pPVC_xQmWzaf7G-l6k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI0/ODk1MzgzMi9waG90/by9tdW1iYWktaW5k/aWEtcmVraGEtYXR0/ZW5kcy10aGUtcHJl/bWllcmUtc2hvdy1v/Zi1maWxtLWd1c3Rh/YWtoLWlzaHEtb24t/bm92ZW1iZXItMjgt/MjAyNS1pbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dmhJ/MU10aDJhN2xjYVV2/SWZLX1MtU1hXanRQ/T3d3NzF3cGNYd1dj/UV9abz0",
    bio: "Timeless diva with eyeliner sharper than your Wi-Fi signal. 😏✨📶",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    // Create outer card div
    let card = document.createElement("div");
    card.classList.add("card");

    // Create image
    let img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // Create blurred-layer div
    let blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    // Create content div
    let content = document.createElement("div");
    content.classList.add("content");

    // Create h3 and paragraph
    let heading = document.createElement("h3");
    heading.textContent = user.name;

    let para = document.createElement("p");
    para.textContent = user.bio;

    // Append heading and paragraph to content
    content.appendChild(heading);
    content.appendChild(para);

    // Append all to card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Finally, append card to the body
    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });

  document.querySelector(".cards").innerHTML = "";
  showUsers(newUsers);
});
