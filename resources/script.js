
new TypeIt("#type-code", {
  loop: false,
  cursor: false,
  lifeLike: true,
  afterComplete: (instance) => {
    new TypeIt("#stack", {
    loop: false,
    cursor:true,
    lifeLike: true
  })
  .type("Full Stack Web Designer")
  .pause(500)
  .delete(7)
  .type("eveloper <br>")
  .type("Sotfwa") 
  .pause(500)
  .delete(4)
  .type("ftware Engineer")
  .go();
  
  }
})
.type("title")
.go();



