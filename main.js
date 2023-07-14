/* drinkItem */

const pinkItem = document.querySelector('.fruit_flavour4');
const chocoItem = document.querySelector('.fruit_flavour1');
const redItem = document.querySelector('.fruit_flavour2');
const greenItem = document.querySelector('.fruit_flavour3');

/*text Elements */
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');
const imageDiv = document.querySelector('.image_container');

/* Rotator slide */
const rotator = document.querySelector('.rotator');

/* Preferred Item backgrounds*/

ground= [
    

    {
        backgroundpic: "linear-gradient(to top ,rgb(195, 129, 84), rgb(136, 74, 57,0.5)),url('./images/pngegg\ \(6\).png')",
        h1: 'Caramel Frapuccino',
        h3: 'Blended Beverage'
    },


    {
        backgroundpic: "linear-gradient(to bottom right,rgb(254, 0, 0,0.5),rgb(226, 24, 24,0.5)),url('./images/pngegg\ \(13\).png'), url('./images/pngegg\ \(14\).png')",
        h1: 'Strawberry Acai',
        h3: 'StarBucks Refresher Drink'
    },

    
    {
        backgroundpic: "linear-gradient(to bottom right,rgb(68, 106, 70), rgb(83, 145, 101,0.6)),url('./images/pngegg\ \(11\).png')",
        h1: 'Iced Green Matcha',
        h3: 'Refresher Drink'
    },


    {
        backgroundpic: "linear-gradient(to bottom right,rgb(255, 171, 171,0.7),rgb(209, 77, 114)),url('./images/pngegg\ \(7\).png')",
        h1: 'Pink Coconut',
        h3: ' Refresher Drink'
    },



];

chocoItem.addEventListener('mouseover', () => {
  
    rotator.style.transform = 'rotate(-45deg)';
      h1.style.opacity = 0;
      h3.style.opacity = 0;
      imageDiv.style.background = ground[0].backgroundpic;
      setTimeout(function() {
        h1.textContent = ground[0].h1; 
        h3.textContent = ground[0].h3;
        h1.style.opacity = 1;
        h3.style.opacity = 1;
        
      }, 300); 
    
});
redItem.addEventListener('mouseover', () => {
  
    rotator.style.transform = 'rotate(-135deg)';
      h1.style.opacity = 0;
      h3.style.opacity = 0;
      imageDiv.style.background = ground[1].backgroundpic;
      setTimeout(function() {
        h1.textContent = ground[1].h1; 
        h3.textContent = ground[1].h3;
        h1.style.opacity = 1;
        h3.style.opacity = 1;
        
      }, 300); 
    
});
greenItem.addEventListener('mouseover', () => {
  
    rotator.style.transform = 'rotate(130deg)';
      h1.style.opacity = 0;
      h3.style.opacity = 0;
      imageDiv.style.background = ground[2].backgroundpic;
      setTimeout(function() {
        h1.textContent = ground[2].h1; 
        h3.textContent = ground[2].h3;
        h1.style.opacity = 1;
        h3.style.opacity = 1;
        
      }, 300); 
    
});
pinkItem.addEventListener('mouseover', () => {
  
    rotator.style.transform = 'rotate(45deg)';
      h1.style.opacity = 0;
      h3.style.opacity = 0;
      imageDiv.style.background = ground[3].backgroundpic;
      setTimeout(function() {
        h1.textContent = ground[3].h1; 
        h3.textContent = ground[3].h3;
        h1.style.opacity = 1;
        h3.style.opacity = 1;
        
      }, 300); 
    
});

