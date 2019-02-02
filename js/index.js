// Your code goes here
const anchors = document.querySelectorAll('a');
console.log(anchors);

//   NEED to fix LESS file for hover effect to work
// will add   align-content: center;    to .nav
//         const nav = document.getElementsByTagName('nav');   // NOT NICE

// NOTE !!!   TARGETTING CSS  will not impact LESS compiler
// added class ignored !!!!          INTERESTING !!!!
/*const nav = document.querySelector('nav');

console.log('this is nav  ', nav);
console.log('this is navClassList ', nav.classList );
nav.classList.add('align-content');
nav.setAttribute('align-content', 'center');
*/

// hover effect
const header = document.querySelector('header');


// hover effect
// NOTE !!
// WOW, interesting behavior on how these fight with each other !!!


anchors.forEach(a => {
  a.addEventListener('mouseover',
    ev => {ev.target.style.color = 'dodgerblue';
      ev.target.style.fontSize = '3rem'
    }
  );

  a.addEventListener('focus',
      ev => {header.style.backgroundColor = 'deeppink'}
    );

  a.addEventListener('mouseleave',
    ev => {ev.target.style.color = '#212529';
      ev.target.style.fontSize = '1.6rem'
  }
  );

  a.addEventListener('blur',
    ev => {header.style.backgroundColor = 'grey'}
  );

});


// change background to random 'nice' color OR toggle this!!!
// NOTE !!!!   closure not working inside ev, going global ;(

/*
let toggleClosure = () => {
  let state = true;

  function toggleState () {
    state = !state;
    return `state is now ${state}`;
  }

  return toggleState;
};

let toggler = toggleClosure();
console.log('t first ', toggler());
console.log('t second', toggler());
*/
const body = document.querySelector('body');
console.log(body);

let state = true;


body.addEventListener('dblclick',
  ev => {
  console.log('dblclick on document invoked, here is event ', ev);
   state ? body.style.backgroundColor = 'yellow'
               : body.style.backgroundColor = 'pink';

   state = !state;
  }
);

// making resize happen
//const funBus_h1 = document.getElementsByTagName('h1');
let count_resize = 0;

const funBus_h1 = document.querySelector('h1');
const daWindow = document.querySelector('window');
console.log('this s funBus', daWindow );

window.addEventListener('resize', ev => {
  count_resize++;
  console.log(' resize on widow triggered ', daWindow );
  funBus_h1.textContent = `Fun Bus ${count_resize} resizes! `;
  // add setTimeOut to restore as extra STRETCH

});

////////////////////    NESTED BUBBLING
funBus_h1.addEventListener('dblclick', ev => {
  console.log('funBus_h1 clicked  ', funBus_h1);
  // YES,  this bubbles up ALL the WAY to document !!
  ev.stopPropagation();   // THIS Stops bubbling
} );


// making scroll happen
const welcome_h2 = document.querySelector('h2'); // should be first h2
let count_scroll = 0;
window.addEventListener('scroll', ev => {
  count_scroll++;
  console.log('welcome_h2 scolled ', count_scroll);
  welcome_h2.textContent = `Welcome to Fun Bus! ${count_scroll} scrolls`

});

// making wheel happen
const letsGo = document.querySelector('.text-content h2');
console.log('letsGo is ', letsGo);
window.addEventListener('wheel', ev => {
  count_scroll++;
  console.log('welcome_h2 scolled ', count_scroll);
  letsGo.textContent = `Welcome to Fun Bus! ${count_scroll} wheels`


});

//  background restore with a single click
// NOTE !!!    alert breaks this !!!
body.addEventListener('click', ev => {
  console.log('single click on page');
  // alert('back to normal, whew!! ');
  body.style.backgroundColor = 'white';
//  header.style.backgroundColor = 'white';   // interesting stuff here too!
  // alert('back to normal, whew!! ');
  });


// keydown
body.addEventListener('keypress', ev => alert('key was pressed'));


// STRETCH   Fix for ALL buttons

// funBus_h1.textContent += '';
const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', e => {
  console.log(`btn fired a click event!`);
  // ALL about stopping events from bubbling
  e.stopPropagation();
  TweenMax.to(e.currentTarget, 1, {
    width:150,
    ease:Bounce.easeOut
  });
});

btn.addEventListener('mouseout', e => {
  console.log(`Work button fired a click event!`);
  // ALL about stopping events from bubbling
  e.stopPropagation();
  TweenMax.to(e.currentTarget, 1, {
    width:200,
    ease:Bounce.easeOut
  });
});