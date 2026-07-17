
const music = document.getElementById("bgmusic");

document.addEventListener("click", () => {
  music.play();
}, { once: true });

function nextPage()
{
document.querySelector(".container").innerHTML = `
<h1>My Dearest Dinesh ❤️‍🩹</h1>
<p>
Happy 24th Birthday, my love! 🎂✨
<br><br>
Thank you for being such a beautiful part of my life.
Every memory with you has become one of my favorite stories, and every day with you feels a little brighter.
<br><br>
I hope this year brings you endless happiness, success, and all the love you deserve.
May all your dreams come true, and may we continue creating wonderful memories together.
<br><br>
Thank you for being you. ❤️‍🩹
<br><br>
Forever cheering for you,
<br><br>
Nivetha 🤍🌷
</p>
<br>
<button onclick="lovePage()">
Continue ❤️‍🩹
</button>
`;
}
let slideIndex = 0;
showSlides();
function showSlides(){
let slides = document.getElementsByClassName("slides");
for(let i=0;i<slides.length;i++){
slides[i].style.display= "none";
}
slideIndex++;
if(slideIndex>slides.length){
slideIndex=1;
}
slides[slideIndex-1].style.display= "block";
setTimeout(showSlides,3000);
}
function lovePage(){

alert("Next page: 24 Things I Love About You ❤️‍🩹");

}
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(){
  slides.forEach(s => s.classList.remove("active"));

  slides[index].classList.add("active");

  index++;

  if(index === slides.length){
    index = 0;
  }
}
setInterval(showSlide, 2500);
music.loop = true;
music.volume = 1.5;
document.body.addEventListener("click", () => {
  document.getElementById("bgmusic").play();
}, { once: true });

function lovePage() {
  document.querySelector(".container").innerHTML = `
    <h1>❤️‍🩹 24 Things I Love About You ❤️‍🩹</h1>

    <ol>
      <li>Your eyes 👀</li>
      <li>Your beautiful smile 😊</li>
      <li>Your caring nature 💫</li>
      <li>Your kindness 🌸</li>
      <li>Your understanding 🤗</li>
      <li>Your sense of humor 😂</li>
      <li>Your patience 🫶</li>
      <li>Your support 🌷</li>
      <li>Your honesty 💎</li>
      <li>Your confidence ✨</li>
      <li>Your cute expressions 🥰</li>
      <li>Your voice 🎶</li>
      <li>Your hugs 🤍</li>
      <li>Your encouragement 🌟</li>
      <li>Your loyalty 💕</li>
      <li>Your hardworking nature 💪</li>
      <li>Your positivity ☀️</li>
      <li>Your respect for others 🌹</li>
      <li>Your little surprises 🎁</li>
      <li>Your love and affection 💖</li>
      <li>Your dreams and ambitions 🚀</li>
      <li>The way you make me smile 😊</li>
      <li>Your presence that makes everything better 🌈</li>
      <li>Simply because you're you ❤️‍🩹</li>
    </ol>

    <button onclick="showMemories()">
      Our Beautiful Memories 📸
    </button>
  `;
}    

function showMemories() {
  document.querySelector(".container").innerHTML = `
    <h1>📸 Our Beautiful Memories ♾️❤️‍🩹</h1>

    <div class="memory-card">
      <h2>😉 When I Secretly Admired You ❤️‍🩹</h2>

      <p>
        At that time, we had just gotten to know each other. I took this photo. You looked so handsome that day, and I was quietly admiring you without you even knowing. You've always looked especially handsome in this shirt. Back then, you looked like such an innocent boy… but now, I know you much better. 🤭❤️‍🩹
      </p>

      <button onclick="showPhoto1()">
        Shall we revisit this special day? 💕 
      </button>

      <div id="photoArea"></div>
    </div>
  `;
}
function showPhoto1() {

  document.getElementById("photoArea").innerHTML = `
    <img src="https://i.ibb.co/k21Zrs36/IMG-20251227-200448-559.jpg">
  `;

  setTimeout(showMemory2, 15000); // 30 seconds
}
function showMemory2() {

  document.querySelector(".container").innerHTML = `
    <h1>📸 Our Beautiful Memories ♾️❤️‍🩹</h1>

    <div class="memory-card">
      <h2>🤗 Our First Little Dates 💕</h2>

      <p>We had just started going out together little by little. We went to the mall, and this photo was taken that day. We also took pictures in the photo booth there. That photo means a lot to me, and it's one of my favorites. It always reminds me of those sweet moments we shared together. ❤️‍🩹💫
      </p>

      <button onclick="showPhoto2()">
        Can you guess which memory this photo holds? 🥰
      </button>

      <div id="photoArea"></div>
    </div>
  `;
}
function showPhoto2() {

  document.getElementById("photoArea").innerHTML = `
    <img src="https://i.ibb.co/XxjjVjG0/IMG-20260608-WA0002.jpg">
  `;

  setTimeout(showMemory3, 15000);
}
function showMemory3() {

  document.querySelector(".container").innerHTML = `
    <h1>📸 Our Beautiful Memories ♾️❤️‍🩹</h1>

    <div class="memory-card">
      <h2>🌙 Our First Little Getaway Together 💞</h2>

      <p>At that time, we had started going out together more often and even traveled a long distance by bike at night. It was the first time we stayed together for two days. Those days were really special and filled with beautiful memories. This photo was taken during that trip, and I know this picture is one of your favorites. ❤️‍🩹🌚
      </p>

      <button onclick="showPhoto3()">
        Ready to see the moment we cherished together? ✨
      </button>

      <div id="photoArea"></div>
    </div>
  `;
}
function showPhoto3() {

  document.getElementById("photoArea").innerHTML = `
    <img src="https://i.ibb.co/kspF5N2k/IMG-20251019-WA0102.jpg">
  `;

  setTimeout(showMemory4, 15000);
}
function showMemory4() {

  document.querySelector(".container").innerHTML = `
    <h1>📸 Our Beautiful Memories ♾️❤️‍🩹</h1>

    <div class="memory-card">
      <h2>✨ The First Day of the Year Together ☺️</h2>

      <p> On New Year's Eve, we had a little argument during the night. But when morning came, we went to the church together. This photo was taken there. After that, we went to watch a movie. Despite how the day began, it turned out to be a beautiful and memorable day. ❤️‍🩹🤗
      </p>

      <button onclick="showPhoto4()">
        Can we relive this beautiful chapter together? 🌹
      </button>

      <div id="photoArea"></div>
    </div>
  `;
}
function showPhoto4() {

  document.getElementById("photoArea").innerHTML = `
    <img src="https://i.ibb.co/xShpXvT7/your-image-link1.jpg">
  `;

  setTimeout(showMemory5, 15000);
}
function showMemory5() {

  document.querySelector(".container").innerHTML = `
    <h1>📸 Our Beautiful Memories ♾️❤️‍🩹</h1>

    <div class="memory-card">
      <h2>🫳🏻 My Special Birthday with You ❤️‍🩹</h2>

      <p>This photo was taken on my birthday. You wished me exactly at midnight, and when morning came, you came to see me. You gave me a mini photo album and a beautiful photo frame as gifts. You also bought flowers for me. We went out together, cut the birthday cake, and later went to watch Parimala & Co. Movie. Before dropping me off, you gave me a sweet kiss. It was such a beautiful day, and I will always cherish those memories. ❤️‍🩹💫
      </p>

      <button onclick="showPhoto5()">
        Want to take a look at this precious memory? 🥰
      </button>

      <div id="photoArea"></div>
    </div>
  `;
}
function showPhoto5() {

  document.getElementById("photoArea").innerHTML = `
    <img src="https://i.ibb.co/gZ6vCdpF/IMG-20260608-WA0033.jpg">
  `;

  setTimeout(showMemory6, 15000);
}
function showMemory6() {

  document.querySelector(".container").innerHTML = `
    <h1>📸 Our Beautiful Memories ❤️‍🩹</h1>

    <div class="memory-card">
      <h2>🫂 The Trip That Stole My Heart ❤️‍🩹👀</h2>

      <p>
        We went to Pondicherry together and traveled by bus. Throughout the journey, we sat facing each other, talking and enjoying every moment. It was such a beautiful trip.
The day before, we had a terrible fight. But the moment we met in person, we forgot everything. We went to Pondicherry Beach, and this photo was taken there.
We stayed overnight and spent hours talking about so many things. You looked so peaceful and handsome while you slept. I couldn't fall asleep because I was busy admiring you. When morning came, the first thing I did was look at your face.
I had once told you that I wanted to travel by train, so you lovingly booked the tickets for us. But unfortunately, we were assigned different compartments. I couldn't bear the thought of leaving you alone, and I stubbornly refused. Smiling, you said, "Alright, come with me," and took me on the bus instead.
Throughout the journey, I kept wondering why such beautiful moments had to end so quickly. It became one of the most unforgettable trips of my life, a memory that I will always cherish in my heart.❤️‍🩹🫂
      </p>

      <button onclick="showPhoto6()">
        ❤️‍🩹 Would you like to see a memory I'll never forget? 🌸
      </button>

      <div id="photoArea"></div>
    </div>
  `;
}
function showPhoto6() {

  document.getElementById("photoArea").innerHTML = `
    <img src="https://i.ibb.co/fdsN221g/IMG-20260615-WA0025.jpg">
  `;

  setTimeout(finalPage, 15000);
}

function finalPage(){

document.querySelector(".container").innerHTML = `
<h1>❤️‍🩹 Happy Birthday MaMa ❤️‍🩹</h1>

<p>
Thank you for being my happiness, my comfort and my beautiful blessing. 🌷

No matter how many birthdays come and go, I will always cherish every moment with you.

I love you endlessly. ❤️‍🩹♾️

— Your Wife ❤️‍🩹🫳🏻
</p>
`;
}