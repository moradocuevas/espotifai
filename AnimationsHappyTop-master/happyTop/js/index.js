anime({
  targets: '#text-home .line circle',
  opacity: [ 1, 0 ],
  delay: anime.stagger( 12 ),
  direction: 'reverse',
});

anime({
  targets: '#text-home .letter circle',
  opacity: [ 0, 1 ],
  delay: anime.stagger( 40, { start: 2000 } )
});
