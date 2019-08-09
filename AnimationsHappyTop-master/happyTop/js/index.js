anime({
  targets: '#text-home .line circle',
  opacity: [ 1, 0 ],
  delay: anime.stagger( 75 ),
  direction: 'reverse',
});

anime({
  targets: '#text-home .letter circle',
  opacity: [ 0, 1 ],
  delay: anime.stagger( 75, { start: 5600 } )
});
