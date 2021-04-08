class Game{
    constructor(){

    }
    getState(){
        var dbref=database.ref('gameState')
        dbRef.on("value", function(data){
            gameState = data.val();
            
        });
    }
    updateState(state){
        var dbRef = database.ref('');
        dbRef.update({
           gameState: state
        });
       
    }
    display(){
        
    }
    
}

