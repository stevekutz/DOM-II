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


// change background to random 'nice' color

