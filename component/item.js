const item=(props)=>{
    var items;
       
    if (props.popup == 0) {
    item = [
        {
          image: "./images/Graphic/burger/1.png",
        },
        {
          image: "./images/Graphic/burger/2.png",
        },
        {
          image: "./images/Graphic/burger/3.png",
        },
        {
          image: "./images/Graphic/burger/5.png",
        },
        {
          image: "./images/Graphic/burger/6.png",
        },
        {
          image: "./images/Graphic/burger/7.jpg",
        },
      ];
    } else {
      item = [
        {
          image: "./images/Graphic/gen351/1.jpg",
        },
        {
          image: "./images/Graphic/gen351/2.jpg",
        },
        {
          image: "./images/Graphic/gen351/3.jpg",
        },
        {
          image: "./images/Graphic/gen351/4.jpg",
        },
        
      ];
    }
}
export default items;