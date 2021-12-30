class Rule {
    constructor() {
       this.storyImg = createImg("story.png", "game story");
    }
    setElementsPosition() {
      this.storyImg.position(210, 280);
    }
    setElementsStyle() {
      this.storyImg.class("gamestory");}

    connectStates() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      updatestates(state) {
        database.ref("/").update({
          gameState: state
        });
      }
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
     
    }
}