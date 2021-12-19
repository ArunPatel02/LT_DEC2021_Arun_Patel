const card_containt = document.querySelector(".card_containt");
const rating_box = document.getElementById("rating")
const populariy = document.getElementById("populariy")
const topresult = document.getElementById("topresult")
const search = document.getElementById("search")
const search_icon = document.querySelector(".search_icon")
const right_headertoggle_btn = document.querySelector(".right_headertoggle_btn")
const header_option = document.querySelector(".header_option")

right_headertoggle_btn.addEventListener("click" , ()=>{
  header_option.classList.toggle("active")
})

const fetchingdata = (type)=>{
    console.log(type)
fetch("./product.json")
  .then((res) => res.json())
  .then((data) => {
      let result;
      if (type) {
          if(type==="rating"){
          result = data.sort((a , b)=>b.rating - a.rating)
          }
          else if(type==="popularity"){
            result = data.sort((a , b)=>b.votes - a.votes)
          }
          else{
              result = data.filter((item)=>item.company_name.toLowerCase().includes(type))
          }
      }else{
          result = data;
      }
      console.log(result)
      result.map((item) => {
    //   console.log(item);
      let rating = item.rating;
      let fullstar = parseInt(rating);
      let persent = parseInt((rating - fullstar) * 100);
      let remaining = 4 - fullstar;

      let element = ``;

      while (fullstar > 0) {
        element =
          element +
          `<div class="star1"><div class="colordiv"></div><i class="fas fa-star"></i></div>`;
        fullstar--;
      }

      element =
        element +
        `<div class="star1"><div class="colordiv" style="width : ${persent}%"></div><i class="fas fa-star"></i></div>`;

      while (remaining > 0) {
        element =
          element +
          `<div class="star1"><div></div><i class="fas fa-star"></i></div>`;
        remaining--;
      }

      const ele = document.createElement("div");
      ele.classList.add("card");

      ele.innerHTML = `<div class="cart">
<div class="left_cart">
    <div class="image">
        <i class="fas fa-thumbs-up"></i>
        <img src="${item.image}" alt="">
    </div>
    <div class="desc">
        <div class="cart_heading">
            ${item.company_name}
        </div>
        <div class="rating">
            <div class="number">${rating}</div>
            <div class="stars">
            ${element}
            </div>
            <div class="votes">${item.votes} votes</div>
        </div>
        <div class="contact">
            <i class="fas fa-phone-alt"></i>
            ${item.mobile}
        </div>
        <div class="address gray">
            <i class="fas fa-map-marked-alt"></i> ${item.address}</div>
        <div class="type gray"><i class="fas fa-greater-than"></i>${item.loan}
        </div>
        <div class="timing gray"><i class="fas fa-greater-than"></i>Open Now</div>
        <div class="verified"><img src="./images/jdvrsl_verified.svg" alt=""></div>
    </div>
</div>
<div class="right_cart flex_item">
    <div class="btn">
        <button>Best Deal</button>
        <span class="icon"> <i class="fas fa-greater-than"></i> </span>
    </div>
</div>
</div>
<hr style="margin-top: 12px;">
<sapn class="cart_foot">
<i class="fas fa-star"></i>
<p>Click here to view your </p>
<b>friends rating</b>
</sapn>`;

      // card_containt.appendChild(ele)
      card_containt.appendChild(ele);
    });
  });
}
  fetchingdata()

  topresult.addEventListener("click" , ()=>{
    rating_box.style.color = "black"
    populariy.style.color = "black"
    topresult.style.color = "blue"
    card_containt.innerHTML = ``;
    fetchingdata()
})

populariy.addEventListener("click" , ()=>{
    rating_box.style.color = "black"
    populariy.style.color = "red"
    topresult.style.color = "black"
    card_containt.innerHTML = ``;
    fetchingdata("popularity")
})

rating_box.addEventListener("click" , ()=>{
    rating_box.style.color = "red"
    populariy.style.color = "black"
    topresult.style.color = "black"
    card_containt.innerHTML = ``;
    fetchingdata("rating")
})

search_icon.addEventListener("click" , ()=>{
    rating_box.style.color = "black"
    populariy.style.color = "black"
    topresult.style.color = "black"
    card_containt.innerHTML = ``;
    const text = search.value;
    console.log(text);
    fetchingdata(text)
})