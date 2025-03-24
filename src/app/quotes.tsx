const generateRandom = () => {
  const i = Math.floor(Math.random() * quotes.length - 1);
  return quotes[i];
};

const quotes = [
  {
    author: 'Francis Bacon',
    statement: 'Truth is the daughter of time, not of authority.',
  },
  {
    author: 'Blaise Pascal',
    statement:
      'Justice without force is powerless; force without justice is tyrannical.',
  },
  {
    author: 'Jean-Paul Sartre',
    statement:
      'If a victory is told in detail, one can no longer distinguish it from a defeat.',
  },
  {
    author: 'Jean-Jacques Rousseau',
    statement:
      'People who know little are usually great talkers, while men who know much say little.',
  },
  {
    author: 'William James',
    statement: "I don't sing because I'm happy; I'm happy because I sing.",
  },
  {
    author: 'Mortimer Adler',
    statement:
      'Unless we love and are loved, each of us is alone, each of us is deeply lonely.',
  },
  {
    author: 'Martin Heidegger',
    statement: 'Transcendence constitutes selfhood.',
  },
  {
    author: 'Georg Wilhelm Friedrich Hegel',
    statement:
      'Once the state has been founded, there can no longer be any heroes. They come on the scene only in uncivilized conditions.',
  },
  {
    author: 'Zhuangzi',
    statement:
      'I do not know whether I was then a man dreaming I was a butterfly, or whether I am now a butterfly dreaming I am a man.',
  },
  {
    author: 'Jean de la Bruyere',
    statement:
      'There is no road too long to the man who advances deliberately and without undue haste; there are no honors too distant to the man who prepares himself for them with patience.',
  },
  {
    author: 'Friedrich Engels',
    statement:
      'All history has been a history of class struggles between dominated classes at various stages of social development.',
  },
  {
    author: 'Han Fei',
    statement:
      'A filial son to his father can be a traitorous subject to his ruler.',
  },
  {
    author: 'Herbert Spencer',
    statement:
      "When a man's knowledge is not in order, the more of it he has the greater will be his confusion.",
  },
  {
    author: 'Theodor W. Adorno',
    statement:
      'Work while you work, play while you play - this is a basic rule of repressive self-discipline.',
  },
  {
    author: 'Soren Kierkegaard',
    statement: 'Our life always expresses the result of our dominant thoughts.',
  },
  { author: 'John Locke', statement: 'What worries you, masters you.' },
  {
    author: 'Jiddu Krishnamurti',
    statement:
      'Tradition becomes our security, and when the mind is secure it is in decay.',
  },
  {
    author: 'Baruch Spinoza',
    statement:
      'The world would be happier if men had the same capacity to be silent that they have to speak.',
  },
  {
    author: 'Simone Weil',
    statement:
      'The intelligent man who is proud of his intelligence is like the condemned man who is proud of his large cell.',
  },
  {
    author: 'Desiderius Erasmus',
    statement: 'Prevention is better than cure.',
  },
  {
    author: 'David Hume',
    statement: 'A wise man proportions his belief to the evidence.',
  },
  {
    author: 'Rudolf Steiner',
    statement:
      'In raising children, we need to continuously keep in mind how we can best create the most favorable environment for their imitative behavior. Everything done in the past regarding imitation must become more and more conscious and more and more consciously connected with the future.',
  },
  {
    author: 'Baltasar Gracian',
    statement: 'Friendship multiplies the good of life and divides the evil.',
  },
  {
    author: 'Maimonides',
    statement:
      'No disease that can be treated by diet should be treated with any other means.',
  },
  {
    author: 'Abraham Joshua Heschel',
    statement:
      "Man's sin is in his failure to live what he is. Being the master of the earth, man forgets that he is the servant of God.",
  },
  {
    author: 'Judith Butler',
    statement:
      'To say that gender is performative is a little different because for something to be performative means that it produces a series of effects. We act and walk and speak and talk in ways that consolidate an impression of being a man or being a woman.',
  },
  {
    author: 'Max Stirner',
    statement:
      'If the child has not an object that it can occupy itself with, it feels ennui; for it does not yet know how to occupy itself with itself.',
  },
  {
    author: 'Karl Popper',
    statement:
      'We have become makers of our fate when we have ceased to pose as its prophets.',
  },
  {
    author: 'Jan Hus',
    statement:
      'O God and Lord, now the council condemns even Your own act and Your own law as heresy, since You Yourself did lay Your cause before Your Father as the just judge, as an example for us, whenever we are sorely oppressed.',
  },
  {
    author: 'Ramana Maharshi',
    statement:
      'Every moment there is creation, every moment destruction. There is no absolute creation, no absolute destruction. Both are movement, and that is eternal.',
  },
  { author: 'Heraclitus', statement: 'Nothing endures but change.' },
  {
    author: 'Epicurus',
    statement:
      'The misfortune of the wise is better than the prosperity of the fool.',
  },
  {
    author: 'Emil Cioran',
    statement:
      'It is not worth the bother of killing yourself, since you always kill yourself too late.',
  },
  { author: 'Thomas Hobbes', statement: 'Words are the money of fools.' },
  {
    author: 'Ludwig Wittgenstein',
    statement:
      'If people never did silly things nothing intelligent would ever get done.',
  },
  {
    author: 'Swami Sivananda',
    statement:
      'Life is a pilgrimage. The wise man does not rest by the roadside inns. He marches direct to the illimitable domain of eternal bliss, his ultimate destination.',
  },
  {
    author: 'Guru Nanak',
    statement:
      'There is but One God. His name is Truth; He is the Creator. He fears none; he is without hate. He never dies; He is beyond the cycle of births and death. He is self-illuminated. He is realized by the kindness of the True Guru. He was True in the beginning; He was True when the ages commenced and has ever been True. He is also True now.',
  },
  {
    author: 'John Dewey',
    statement:
      'Every great advance in science has issued from a new audacity of imagination.',
  },
  {
    author: 'Democritus',
    statement:
      'I would rather discover one true cause than gain the kingdom of Persia.',
  },
  {
    author: 'Sri Aurobindo',
    statement:
      'The Gita is the greatest gospel of spiritual works ever yet given to the race.',
  },
  {
    author: 'Thales',
    statement: 'God is the most ancient of all things, for he had no birth.',
  },
  {
    author: 'Annie Besant',
    statement:
      'Liberty is a great celestial Goddess, strong, beneficent, and austere, and she can never descend upon a nation by the shouting of crowds, nor by arguments of unbridled passion, nor by the hatred of class against class.',
  },
  {
    author: 'Nagarjuna',
    statement:
      "So, to praise others for their virtues can but encourage one's own efforts.",
  },
  {
    author: 'Slavoj Zizek',
    statement:
      'Without the communist oppression, I am absolutely sure I would now be a local stupid professor of philosophy in Ljubljana.',
  },
  {
    author: 'Bernard Williams',
    statement:
      'We may pass violets looking for roses. We may pass contentment looking for victory.',
  },
  {
    author: 'Michel de Montaigne',
    statement:
      'The value of life lies not in the length of days, but in the use we make of them... Whether you find satisfaction in life depends not on your tale of years, but on your will.',
  },
];

export default generateRandom;
