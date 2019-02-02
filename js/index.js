// Your code goes here
const anchors = document.querySelectorAll('a');
console.log(anchors);


// hover effect
anchors.forEach(a => {
  a.addEventListener('mouseover',
      ev => {ev.target.style.color = 'dodgerblue';
             ev.target.style.fontSize = '3rem'
                                                  }
  );
  a.addEventListener('mouseleave',
        ev => {ev.target.style.color = '#212529';
               ev.target.style.fontSize = '1.6rem'}
  );
});


// change background to random 'nice' color OR toggle this!!!

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

const body = document.querySelector('body');
console.log(body);

let state = true;

body.addEventListener('dblclick',
  ev => {
   state ? body.style.backgroundColor = 'yellow'
               : body.style.backgroundColor = 'pink';

   state = !state;

  }
);
