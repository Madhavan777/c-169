AFRAME.registerComponent("markerHandler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker Found")
            this.handlemarkerFound()
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("marker Lost")
            this.handlemarkerLost()
        });
    },

    handlemarkerFound: function(){
      var buttondiv=document.getElementById("button-div");
      buttondiv.style.display="flex";
      var ratingbutton=document.getElementById("rating-button")
      var orderbutton=document.getElementById("order-button")

      ratingbutton.addEventListener("click",function(){
        swal({
            icon:"warning",
            title:"rate dish",
            text:"work in progress"
        })
      });
      orderbutton.addEventListener("click",function(){
        swal({
            icon:"https://imgur.com/4NZ6uLY",
            title:"thanks for ordering",
            text:"your order will be served soon at your table"
        })
      });
    },
    handlemarkerLost: function(){
        var buttondiv=document.getElementById("button-div");
        buttondiv.style.display="none"
      }
    
})