let wrapper = document.getElementById("wrap");
let menurbar = document.querySelectorAll(".menurbar");
let currentProductImg = document.querySelector(".productimg")
let currentProductTitle = document.querySelector(".producttitle")
let currentProductPrice = document.querySelector(".productprice")
let currentProductColor = document.querySelectorAll(".color")
let currentProductSize = document.querySelectorAll(".size")
let productBtn = document.querySelector(".productbtn")
let payment = document.querySelector(".payment")
let close = document.querySelector(".close")
const product = [
    {
        id : 1,
        title: "air force",
        price: 119,
        colors:[
            {
                code: "black",
                img : "imgs/air.png"
            },
            {
                code: "darkblue",
                img : "imgs/air2.png"
            }
        ],
    },
    {
        id : 2,
        title: "AIR JORDAN",
        price: 149,
        colors:[
            {
                code: "lightgray",
                img : "imgs/jordan.png"
            },
            {
                code: "green",
                img : "imgs/jordan2.png"
            }
        ],
    },
    {
        id : 3,
        title: "BLAZER",
        price: 109,
        colors:[
            {
                code: "lightgray",
                img : "imgs/blazer.png"
            },
            {
                code: "green",
                img : "imgs/blazer2.png"
            }
        ],
    }, {
        id : 4,
        title: "CRATER",
        price: 129,
        colors:[
            {
                code: "black",
                img : "imgs/crater.png"
            },
            {
                code: "lightgray",
                img : "imgs/crater2.png"
            }
        ],
    },
    {
        id : 5,
        title: "Hippie",
        price: 99,
        colors:[
            {
                code: "gray",
                img : "imgs/hippie.png"
            },
            {
                code: "lightgray",
                img : "imgs/hippie2.png"
            }
        ],
    }
]
let choosenproduct = product[0]
menurbar.forEach((item, index) => {
  item.addEventListener("click", () => {
      // change current slider
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    // change the choosen product
    choosenproduct = product[index]
    // change text of current product 
    currentProductTitle.textContent = choosenproduct.title
    currentProductPrice.textContent = "$" + choosenproduct.price
    currentProductImg.src = choosenproduct.colors[0].img
    // assign new color
    currentProductColor.forEach((color , index)=>{
        color.style.backgroundColor = choosenproduct.colors[index].code
    })
  });
});


currentProductColor.forEach((color , index)=>{
    color.addEventListener('click', ()=>{
        currentProductImg.src = choosenproduct.colors[index].img
    })
})


currentProductSize.forEach((size , index)=>{
    size.addEventListener('click', ()=>{
        currentProductSize.forEach((size)=>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

productBtn.addEventListener('click', ()=>{
    payment.style.display = 'flex'
    
    let inputFoc = document.querySelector('.inputPay')

    inputFoc.focus()
})

close.addEventListener('click', ()=>{
    payment.style.display = 'none'
})