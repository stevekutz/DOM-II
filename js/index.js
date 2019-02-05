// Your code goes here
const anchors = document.querySelectorAll('a');
console.log(anchors);

//   NEED to fix LESS file for hover effect to work
// will add   align-content: center;    to .nav
//         const nav = document.getElementsByTagName('nav');   // NOT NICE

// NOTE !!!   TARGETING CSS  will not impact LESS compiler
// added class ignored !!!!          INTERESTING !!!!
//    had to manually fix LESS to make nav items stay center
/*
const nav = document.querySelector('nav');
console.log('this is nav  ', nav);
console.log('this is navClassList ', nav.classList );
nav.classList.add('align-content');
nav.setAttribute('align-content', 'center');
*/

/////////////////////////////////////////////////////////////////
// hover effect on nav
////////////////////////////////////////////////////////////////
const header = document.querySelector('header');

// NOTE !!
// WOW, interesting behavior on how these fight with each other !!!
anchors.forEach(a => {
  a.addEventListener('mouseover',
    ev => {
      ev.target.style.color = 'dodgerblue';
      ev.target.style.fontSize = '3rem';
    }
  );

  // NOTE !!!  see single click
  // interesting stuff here too when click off page!
  a.addEventListener('focus',
      ev => {header.style.backgroundColor = 'deeppink'}
  );

  a.addEventListener('mouseleave',
    ev => {
      ev.target.style.color = '#212529';
      ev.target.style.fontSize = '1.6rem';
    }
  );

  // NOTE !!!  see single click
  // interesting stuff here too when click off page!
  a.addEventListener('blur',
    ev => {header.style.backgroundColor = 'grey'}
  );

});

//////  !!!!!!!!!!!!!  ///////////////////////
// change background  via CLOSURE toggle   !!!

/////////////////////////////////////////////////
////            CLOSURES     START   /////////
/////////////////////////////////////////////////

// toggle  T F
let toggleClosure = () => {
  let state = true;

  function toggleState () {
    state = !state;   // MUST assign before return
    return state;
  }

  return toggleState;
};
let toggler = toggleClosure();

// count
let counterClosure = () => {
  let count = 0;

  function keepCount () {
    return count++;
  }

  return keepCount;

};
let counter = counterClosure();

/////////////////////////////////////////////////
////            CLOSURES     END   /////////
//////////////////////////////////////////////////


const body = document.querySelector('body');
console.log('body from querySelector', body);

// making dblclick happen with CLOSURE
// NOTE !!!  something interesting with how toggler()  works
body.addEventListener('dblclick',
  ev => {
    console.log('dblclick on document invoked, here is event ', ev);

    let currState = toggler();

    console.log('currState is', currState);

    /*   WORKS in console,
    if(toggler()) {    // if(toggler() === true) {  // this works     // if(toggler() == true) {
      console.log('MUST be TRUE');
    } else {
      console.log('is false');
    }
    */
   // toggler() ? body.style.backgroundColor = 'yellow'           // DOES not toggle
   // toggler() == true ? body.style.backgroundColor = 'yellow'   // DOES not toggle
   // toggler() == true ? body.style.backgroundColor = 'yellow'   // DOES not toggle

    currState ? body.style.backgroundColor = 'yellow'    // toggler WORKS !!!
      : body.style.backgroundColor = 'pink';

    console.log('currState at END is', currState);

  }
);

// making resize happen
//const funBus_h1 = document.getElementsByTagName('h1');
//let count_resize = 0;

const funBus_h1 = document.querySelector('h1');
const daWindow = document.querySelector('window');

window.addEventListener('resize', ev => {
//  count_resize++;    // now doing with counterClosure
  let count_resize = counter();

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


// making scroll happen with CLOSURE
const welcome_h2 = document.querySelector('h2'); // should be first h2
// let count_scroll = 0;
window.addEventListener('scroll', ev => {
//  count_scroll++;
  let count_scroll = counter();   // now doing with counterClosure
  console.log('welcome_h2 scrolled ', count_scroll);
  welcome_h2.textContent = `Welcome to Fun Bus! ${count_scroll} scrolls`;
  ev.stopPropagation();

});

// making wheel happen with CLOSURE
const letsGo = document.querySelector('.text-content h2');
console.log('letsGo is ', letsGo);
window.addEventListener('wheel', ev => {
//  count_scroll++;
  let count_wheel = counter();
  console.log(`welcome_h2 wheel ${count_wheel} times`);
  letsGo.textContent = `Welcome to Fun Bus! ${count_wheel} wheels`;
  ev.stopPropagation();
});

// making single click happen //
//  background color  restore with a single click
// NOTE !!!    alert breaks dblclick !!!
body.addEventListener('click', ev => {
  console.log('single click on page');
  // alert('back to normal, whew!! ');
  body.style.backgroundColor = 'white';
  header.style.backgroundColor = 'white';   // interesting stuff here too when click off page!
  // alert('back to normal, whew!! ');   // alert breaks doubleclick  !!!

  ev.stopPropagation(); // !!!!! single click ALWAYS shows up 2x when double clicking


  });


// making keypress happen - DEPRECATED
body.addEventListener('keypress', ev =>
  {
    console.log(`DEPRECATED keypress  ${ev.key}  was pressed`);
    alert(`DEPRECATED keypress is ${ev.key}  was pressed`);
  }
);


// making keydown happen - added info on which key pressed
body_1 =  document.querySelectorAll('body');
console.log('this is body_1 from querySelectorAll', body_1 );

console.log('body_1[0] is ', body_1[0]);

body_1[0].addEventListener('keydown', ev =>
  {
    console.log('this is keydown event currentTarget', ev.currentTarget);
    console.log(`keydown  key ${ev.key}  was pressed`);
    console.log('this is ev ', ev);
    alert(`keydown  key ${ev.key}  was pressed`);

  }

);

// STRETCH   Fix for ALL buttons done
// STRETCH extra - play with other kinds of animation
//   funny MOV of    GreenSock animation with console window   posted to _chat
const btn = document.querySelector('.btn');
const buttons = document.querySelectorAll('.btn');
buttons.forEach( button => {

  button.addEventListener('mouseover', e => {
    console.log(`button mouseOVER  fired a click event!`);
    // ALL about stopping events from bubbling
    e.stopPropagation();
    TweenMax.to(e.currentTarget, 1, {
      width:150,
      ease:Bounce.easeOut
    });
  });

  button.addEventListener('mouseout', e => {
    console.log(`button mouseOUT fired a click event!`);
    // ALL about stopping events from bubbling
    e.stopPropagation();
    TweenMax.to(e.currentTarget, 1, {
      width:200,
      ease:Bounce.easeOut
    });
  });


});
