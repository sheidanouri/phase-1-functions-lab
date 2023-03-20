// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(location){ 
    const distance=Math.abs(location-42)
     return distance ; 
 }
 //pickup location for a passenger
 // returns the number of blocks from Scuber headquarters on 42nd Street
 function distanceFromHqInFeet (location){
     return distanceFromHqInBlocks(location) * 264 ;
 }
 // translates the number of blocks from headquarters to the distance in feet
 //Each block in Manhattan is 264 feet long.
 function distanceTravelledInFeet(start ,destination ){
     return Math.abs(destination-start)*264 ;
     }
 // NEXT  calculate the number of feet travelled based on the distance
 
 
 function calculatesFarePrice(start, destination) {
      const FeetTravelled = Math.abs(distanceTravelledInFeet(start ,destination ));
     if(FeetTravelled<=400){
         return 0 ;
     }
     else if (400<FeetTravelled && FeetTravelled<2000){
        return  ( FeetTravelled-400)*2/100;
     }
     else if (2000<=FeetTravelled && FeetTravelled<2500){
         return 25 ;
     }
     else {
         return 'cannot travel that far' ;
     }
   }
 
 