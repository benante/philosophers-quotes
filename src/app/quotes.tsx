const generateRandom: () => { author: string; statement: string } = () => {
  const i = Math.floor(Math.random() * statements.length - 1);
  return statements[i];
};

const statements: { author: string; statement: string }[] = [
  {
    author: 'Confucius',
    statement:
      'It does not matter how slowly you go as long as you do not stop.',
  },
  {
    author: 'Socrates',
    statement: 'The only true wisdom is in knowing you know nothing.',
  },
  {
    author: 'Ralph Waldo Emerson',
    statement:
      'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.',
  },
  {
    author: 'Immanuel Kant',
    statement:
      'Experience without theory is blind, but theory without experience is mere intellectual play.',
  },
  {
    author: 'Bertrand Russell',
    statement:
      'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
  },
  {
    author: 'Heraclitus',
    statement:
      "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
  },
  {
    author: 'Francis Bacon',
    statement: 'The best part of beauty is that which no picture can express.',
  },
  {
    author: 'Montesquieu',
    statement:
      'There is no greater tyranny than that which is perpetrated under the shield of the law and in the name of justice.',
  },
  {
    author: 'William James',
    statement:
      'The greatest weapon against stress is our ability to choose one thought over another.',
  },
  {
    author: 'Baruch Spinoza',
    statement: 'All things excellent are as difficult as they are rare.',
  },
  {
    author: 'Emil Cioran',
    statement: 'Skepticism is the sadism of embittered souls.',
  },
  {
    author: 'Ludwig Wittgenstein',
    statement: 'The limits of my language means the limits of my world.',
  },
  {
    author: 'Friedrich Engels',
    statement:
      'The state is nothing but an instrument of oppression of one class by another - no less so in a democratic republic than in a monarchy.',
  },
  {
    author: 'Rudolf Steiner',
    statement:
      'A healthy social life is found only when, in the mirror of each soul, the whole community finds its reflection, and when, in the whole community, the virtue of each one is living.',
  },
  {
    author: 'Sun Tzu',
    statement:
      'Know thy self, know thy enemy. A thousand battles, a thousand victories.',
  },
  {
    author: 'Aristotle',
    statement: 'Love is composed of a single soul inhabiting two bodies.',
  },
  {
    author: 'Diogenes',
    statement: "In a rich man's house there is no place to spit but his face.",
  },
  {
    author: 'Albert Camus',
    statement:
      'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.',
  },
  {
    author: 'Epictetus',
    statement:
      'We have two ears and one mouth so that we can listen twice as much as we speak.',
  },
  {
    author: 'Jean-Paul Sartre',
    statement: 'Everything has been figured out, except how to live.',
  },
  {
    author: 'Epicurus',
    statement:
      'Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.',
  },
  {
    author: 'Jiddu Krishnamurti',
    statement:
      'It is no measure of health to be well adjusted to a profoundly sick society.',
  },
  {
    author: 'David Hume',
    statement:
      'That the sun will not rise tomorrow is no less intelligible a proposition, and implies no more contradiction, than the affirmation, that it will rise.',
  },
  {
    author: 'Michel de Montaigne',
    statement:
      'A man who fears suffering is already suffering from what he fears.',
  },
  {
    author: 'Maimonides',
    statement:
      'Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.',
  },
  {
    author: 'Martin Heidegger',
    statement: 'Every man is born as many men and dies as a single one.',
  },
  {
    author: 'Mencius',
    statement: 'Friends are the siblings God never gave us.',
  },
  {
    author: 'Georg Wilhelm Friedrich Hegel',
    statement:
      'Nothing great in the world has ever been accomplished without passion.',
  },
  {
    author: 'Abraham Joshua Heschel',
    statement:
      'Self-respect is the fruit of discipline; the sense of dignity grows with the ability to say no to oneself.',
  },
  {
    author: 'Friedrich Nietzsche',
    statement:
      'To live is to suffer, to survive is to find some meaning in the suffering.',
  },
  {
    author: 'Lao Tzu',
    statement:
      'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
  },
  {
    author: 'John Locke',
    statement: 'The discipline of desire is the background of character.',
  },
  {
    author: 'Arthur Schopenhauer',
    statement:
      'Talent hits a target no one else can hit; Genius hits a target no one else can see.',
  },
  {
    author: 'Han Fei',
    statement: 'I believe it is impossible to be sure of anything.',
  },
  {
    author: 'Hypatia',
    statement:
      'Reserve your right to think, for even to think wrongly is better than not to think at all.',
  },
  {
    author: 'Desiderius Erasmus',
    statement: 'In the kingdom of the blind, the one-eyed man is king.',
  },
  {
    author: 'Ramana Maharshi',
    statement: 'Let come what comes, let go what goes. See what remains.',
  },
  {
    author: 'John Dewey',
    statement:
      'Education is not preparation for life; education is life itself.',
  },
  {
    author: 'Zhuangzi',
    statement:
      'I dreamed I was a butterfly, flitting around in the sky; then I awoke. Now I wonder: Am I a man who dreamt of being a butterfly, or am I a butterfly dreaming that I am a man?',
  },
  { author: 'Simone Weil', statement: 'I can, therefore I am.' },
  {
    author: 'Thomas Carlyle',
    statement:
      'Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.',
  },
  {
    author: 'George Santayana',
    statement:
      'The passions grafted on wounded pride are the most inveterate; they are green and vigorous in old age.',
  },
  {
    author: 'Jeremy Bentham',
    statement: 'The power of the lawyer is in the uncertainty of the law.',
  },
  {
    author: 'Swami Sivananda',
    statement:
      'Put your heart, mind, and soul into even your smallest acts. This is the secret of success.',
  },
  {
    author: 'Jean de la Bruyere',
    statement: 'Out of difficulties grow miracles.',
  },
  {
    author: 'John Stuart Mill',
    statement:
      'A man who has nothing for which he is willing to fight, nothing which is more important than his own personal safety, is a miserable creature and has no chance of being free unless made and kept so by the exertions of better men than himself.',
  },
  {
    author: 'Karl Marx',
    statement: 'History repeats itself, first as tragedy, second as farce.',
  },
  {
    author: 'Plato',
    statement:
      'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
  },
  {
    author: 'Soren Kierkegaard',
    statement:
      'Life can only be understood backwards; but it must be lived forwards.',
  },
  {
    author: 'Blaise Pascal',
    statement:
      "I would rather live my life as if there is a God and die to find out there isn't, than live as if there isn't and to die to find out that there is.",
  },
  {
    author: 'Alan Watts',
    statement:
      'The only way to make sense out of change is to plunge into it, move with it, and join the dance.',
  },
  {
    author: 'Jean-Jacques Rousseau',
    statement:
      'The world of reality has its limits; the world of imagination is boundless.',
  },
  {
    author: 'Thomas Hobbes',
    statement: 'It is not wisdom but Authority that makes a law.',
  },

  {
    author: 'Annie Besant',
    statement:
      'Better remain silent, better not even think, if you are not prepared to act.',
  },
  {
    author: 'Avicenna',
    statement:
      'The world is divided into men who have wit and no religion and men who have religion and no wit.',
  },
  {
    author: 'Karl Popper',
    statement:
      'It is impossible to speak in such a way that you cannot be misunderstood.',
  },
  {
    author: 'Manly Hall',
    statement: 'Words are potent weapons for all causes, good or bad.',
  },
  {
    author: 'Democritus',
    statement:
      'Happiness resides not in possessions, and not in gold, happiness dwells in the soul.',
  },
  {
    author: 'Theodor W. Adorno',
    statement: 'Love is the power to see similarity in the dissimilar.',
  },
  {
    author: 'Giordano Bruno',
    statement: 'Time is the father of truth, its mother is our mind.',
  },
  {
    author: 'Peter Singer',
    statement:
      'It was wrong to capture wild animals and confine them in captivity for people to go and gawk at them.',
  },
  {
    author: 'Mortimer Adler',
    statement:
      'The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.',
  },
  { author: 'Nagarjuna', statement: 'If you desire ease, forsake learning.' },
  {
    author: 'Boethius',
    statement:
      'If there is a God, whence proceed so many evils? If there is no God, whence cometh any good?',
  },
  {
    author: 'Roger Scruton',
    statement:
      'Conservatism is about freedom, yes. But it is also about the institutions and attitudes that shape the responsible citizen.',
  },
  {
    author: 'Raymond Aron',
    statement:
      'What passes for optimism is most often the effect of an intellectual error.',
  },
  {
    author: 'Chrysippus',
    statement:
      'Fate is a sempiternal and unchangeable series and chain of things, rolling and unraveling itself through eternal sequences of cause and effect.',
  },
  {
    author: 'J. L. Austin',
    statement:
      'Infelicity is an ill to which all acts are heir which have the general character of ritual or ceremonial, all conventional acts.',
  },
  {
    author: 'Herbert Spencer',
    statement: 'The great aim of education is not knowledge but action.',
  },
  { author: 'Max Stirner', statement: 'Atheists are pious people.' },
  {
    author: 'George Gurdjieff',
    statement:
      'Without struggle, no progress and no result. Every breaking of habit produces a change in the machine.',
  },
  {
    author: 'Xun Kuang',
    statement:
      'The petty man is eager to make boasts, yet desires that others should believe in him.',
  },
  {
    author: 'Raoul Vaneigem',
    statement:
      'People who talk about revolution and class struggle without referring explicitly to everyday life have a corpse in their mouth.',
  },
  {
    author: 'Jan Hus',
    statement: 'It is better to die well than to live badly.',
  },
  {
    author: 'Jose Ortega y Gasset',
    statement:
      "An 'unemployed' existence is a worse negation of life than death itself.",
  },
  {
    author: 'Daniel Dennett',
    statement:
      'The secret of happiness is: Find something more important than you are and dedicate your life to it.',
  },
  {
    author: 'Gaston Bachelard',
    statement:
      'Reverie is not a mind vacuum. It is rather the gift of an hour which knows the plenitude of the soul.',
  },
  {
    author: 'Allan Bloom',
    statement: 'Education is the movement from darkness to light.',
  },
  {
    author: 'Charles Sanders Peirce',
    statement:
      'Bad reasoning as well as good reasoning is possible; and this fact is the foundation of the practical side of logic.',
  },
  {
    author: 'Jacques Derrida',
    statement:
      'To pretend, I actually do the thing: I have therefore only pretended to pretend.',
  },
  {
    author: 'Timothy Morton',
    statement: "We're all human beings, in the end, despite our differences.",
  },
  {
    author: 'Theophrastus',
    statement: 'Time is the most valuable thing a man can spend.',
  },
  {
    author: 'Jurgen Habermas',
    statement: "One never really knows who one's enemy is.",
  },
  {
    author: 'Michael Sandel',
    statement: "You can't go wrong with fish and chips.",
  },
  {
    author: 'Maharishi Mahesh Yogi',
    statement:
      'Happiness radiates like the fragrance from a flower and draws all good things towards you.',
  },
  {
    author: 'Nikolai Berdyaev',
    statement:
      'Bread for myself is a material question. Bread for my neighbor is a spiritual one.',
  },
  { author: 'Martha Nussbaum', statement: 'Fear is ubiquitous in human life.' },
  {
    author: 'Dallas Willard',
    statement:
      "Spiritual formation in a Christian tradition answers a specific human question: 'What kind of person am I going to be?'",
  },
  {
    author: 'Hu Shih',
    statement:
      'India conquered and dominated China culturally for 20 centuries without ever having to send a single soldier across her border.',
  },
  {
    author: 'Sri Aurobindo',
    statement:
      'That which we call the Hindu religion is really the Eternal religion because it embraces all others.',
  },
  {
    author: 'Sri Chinmoy',
    statement:
      'Listen to the inner light; it will guide you. Listen to inner peace; it will feed you.',
  },
  {
    author: 'Robert M. Pirsig',
    statement:
      'The only Zen you can find on the tops of mountains is the Zen you bring up there.',
  },
  {
    author: 'Henri Bergson',
    statement:
      'To exist is to change, to change is to mature, to mature is to go on creating oneself endlessly.',
  },
  {
    author: 'Citium Zeno',
    statement:
      'Wellbeing is attained by little and little, and nevertheless is no little thing itself.',
  },
  {
    author: 'George Herbert Mead',
    statement: 'Society is unity in diversity.',
  },
  {
    author: 'Matthew Stewart',
    statement:
      'For me, the only sources of moral values are the pursuit of understanding and the pursuit of happiness.',
  },
  {
    author: 'Empedocles',
    statement:
      'The nature of God is a circle of which the center is everywhere and the circumference is nowhere.',
  },
  {
    author: 'Ernest Renan',
    statement: 'God, if there is a God, take my soul, if I have a soul.',
  },
  {
    author: 'Maurice Merleau-Ponty',
    statement:
      'The world is... the natural setting of, and field for, all my thoughts and all my explicit perceptions.',
  },
  {
    author: 'Slavoj Zizek',
    statement:
      'When I really love someone, I can only show it by making aggressive and bad-taste remarks.',
  },
  {
    author: 'Lysander Spooner',
    statement:
      'But whether the Constitution really be one thing, or another, this much is certain - that it has either authorized such a government as we have had, or has been powerless to prevent it.',
  },
  {
    statement: 'If you are not happy here and now, you never will be.',
    author: 'Taisen Deshimaru',
  },
  {
    statement:
      'Properly speaking, history is nothing but the crimes and misfortunes of the human race.',
    author: 'Pierre Bayle',
  },
  {
    statement:
      "I am obliged to believe certain opinions myself. No man's belief will save me except my own.",
    author: 'Anthony Collins',
  },
  {
    statement:
      'The hours I spend with you I look upon as sort of a perfumed garden, a dim twilight, and a fountain singing to it...',
    author: 'George Edward Moore',
  },
  {
    statement:
      'And we owe science to the combined energies of individual men of genius, rather than to any tendency to progress inherent in civilization.',
    author: 'Chauncey Wright',
  },
  {
    statement: 'Worry is spiritual short sight. Its cure is intelligent faith.',
    author: 'Paul Brunton',
  },
  {
    statement:
      'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.',
    author: 'Sun Tzu',
  },
  { statement: 'Quality is not an act, it is a habit.', author: 'Aristotle' },
  {
    statement: 'The foundation of every state is the education of its youth.',
    author: 'Diogenes',
  },
  {
    statement:
      'In the depth of winter I finally learned that there was in me an invincible summer.',
    author: 'Albert Camus',
  },
  {
    statement:
      'All truth passes through three stages. First, it is ridiculed. Second, it is violently opposed. Third, it is accepted as being self-evident.',
    author: 'Arthur Schopenhauer',
  },
  {
    statement: "If you are lonely when you're alone, you are in bad company.",
    author: 'Jean-Paul Sartre',
  },
  {
    statement: "Women, can't live with them, can't live without them.",
    author: 'Desiderius Erasmus',
  },
  {
    statement: 'Enjoy your own life without comparing it with that of another.',
    author: 'Marquis de Condorcet',
  },
  {
    statement: 'The journey of a thousand miles begins with one step.',
    author: 'Lao Tzu',
  },
  {
    statement:
      'One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors.',
    author: 'Plato',
  },
  {
    statement:
      "To have faith is to trust yourself to the water. When you swim you don't grab hold of the water, because if you do you will sink and drown. Instead you relax, and float.",
    author: 'Alan Watts',
  },
  {
    statement: 'Patience is bitter, but its fruit is sweet.',
    author: 'Jean-Jacques Rousseau',
  },
  {
    statement: 'What we achieve inwardly will change outer reality.',
    author: 'Plutarch',
  },
  {
    statement: 'Gratitude is the most exquisite form of courtesy.',
    author: 'Jacques Maritain',
  },
  {
    statement: 'The only antidote to mental suffering is physical pain.',
    author: 'Karl Marx',
  },
  {
    statement: 'Science is organized knowledge. Wisdom is organized life.',
    author: 'Immanuel Kant',
  },
  {
    statement: 'There is nothing permanent except change.',
    author: 'Heraclitus',
  },
  {
    statement:
      'The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.',
    author: 'William James',
  },
  {
    statement:
      'Peace is not an absence of war, it is a virtue, a state of mind, a disposition for benevolence, confidence, justice.',
    author: 'Baruch Spinoza',
  },
  {
    statement:
      "My mission is to kill time, and time's to kill me in its turn. How comfortable one is among murderers.",
    author: 'Emil Cioran',
  },
  {
    statement:
      "Time and memory are true artists; they remould reality nearer to the heart's desire.",
    author: 'John Dewey',
  },
  {
    statement: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
  },
  {
    statement:
      'I am the wisest man alive, for I know one thing, and that is that I know nothing.',
    author: 'Socrates',
  },
  {
    statement: 'The only way to have a friend is to be one.',
    author: 'Ralph Waldo Emerson',
  },
  {
    statement: 'The time you enjoy wasting is not wasted time.',
    author: 'Bertrand Russell',
  },
  {
    statement:
      "It's not what happens to you, but how you react to it that matters.",
    author: 'Epictetus',
  },
  {
    statement:
      'In order for the light to shine so brightly, the darkness must be present.',
    author: 'Francis Bacon',
  },
  {
    statement:
      'One is never afraid of the unknown; one is afraid of the known coming to an end.',
    author: 'Jiddu Krishnamurti',
  },
  {
    statement: 'Beauty in things exists in the mind which contemplates them.',
    author: 'David Hume',
  },
  {
    statement:
      'My life has been full of terrible misfortunes most of which never happened.',
    author: 'Michel de Montaigne',
  },
  {
    author: 'Anacharsis',
    statement:
      "Written laws are like spiders' webs, and will, like them, only entangle and hold the poor and weak, while the rich and powerful will easily break through them.",
  },
  {
    author: 'Apollonius of Tyana',
    statement:
      'A man must fortify himself and understand that a wise man who yields to laziness or anger...',
  },
  {
    author: 'Protagoras',
    statement:
      'Let us hold our discussion together in our own persons, making trial of the truth and of ourselves.',
  },
  {
    author: 'Jacques Ellul',
    statement:
      'The goal of modern propaganda is no longer to transform opinion but to arouse an active and mythical belief.',
  },
  {
    author: 'Andrew Bernstein',
    statement:
      'A hero has faced it all: he need not be undefeated, but he must be undaunted.',
  },
  {
    author: 'Claude Adrien Helvetius',
    statement:
      'Truth is the torch that gleams through the fog without dispelling it.',
  },
  {
    author: 'Amartya Sen',
    statement:
      "The curriculum of the school did not neglect India's cultural, analytical and scientific heritage...",
  },
  {
    author: 'Pir Vilayat Khan',
    statement:
      'In dream consciousness... we make things happen by wishing them, because we are not only the observer...',
  },
  {
    author: 'Philo',
    statement: 'Be kind, for everyone you meet is fighting a hard battle.',
  },
  {
    author: 'Nicolas Malebranche',
    statement: 'We are made to know and love God.',
  },
  {
    author: 'Hans-Georg Gadamer',
    statement: 'The focus of subjectivity is a distorting mirror.',
  },
  {
    author: 'Sidney Hook',
    statement:
      'Tolerance always has limits - it cannot tolerate what is itself actively intolerant.',
  },
  {
    author: 'Paul Ricoeur',
    statement:
      'The logic of validation allows us to move between the two limits of dogmatism and skepticism.',
  },
  {
    author: 'David Chalmers',
    statement: 'People have managed to avert their eyes and hope for the best.',
  },
  {
    author: 'William Irwin Thompson',
    statement:
      'If you do not create your destiny, you will have your fate inflicted upon you.',
  },
  {
    author: 'Tommaso Campanella',
    statement: 'The world is a living image of God.',
  },
  {
    author: 'John Bradshaw',
    statement:
      "I define a 'good person' as somebody who is fully conscious of their own limitations...",
  },
  {
    author: 'Isaiah Berlin',
    statement: 'Liberty for wolves is death to the lambs.',
  },
  {
    author: 'Nicholas M. Butler',
    statement:
      'Optimism is essential to achievement and it is also the foundation of courage and true progress.',
  },
  {
    author: 'Wilhelm von Humboldt',
    statement:
      'True enjoyment comes from activity of the mind and exercise of the body...',
  },
  {
    author: 'Jean Vanier',
    statement: 'Growth begins when we begin to accept our own weakness.',
  },
  {
    author: 'F. H. Bradley',
    statement:
      'The secret of happiness is to admire without desiring. And that is not happiness.',
  },
  {
    author: 'Adam Ferguson',
    statement:
      'Every step and every movement of the multitude, even in what are termed enlightened ages...',
  },
  {
    author: 'Michael Novak',
    statement:
      'Love is not a feeling of happiness. Love is a willingness to sacrifice.',
  },
  {
    author: 'Robert Nozick',
    statement:
      'The libertarian position I once propended now seems to me seriously inadequate...',
  },
  {
    author: 'Plotinus',
    statement: 'Mankind is poised midway between the gods and the beasts.',
  },
  {
    author: 'Hans Jonas',
    statement:
      'That nature does not care, one way or the other, is the true abyss.',
  },
  {
    author: 'William of Occam',
    statement: 'It is vain to do with more what can be done with fewer.',
  },
  {
    author: 'Alain Badiou',
    statement:
      'There is a kind of serenity in love which is almost a paradise.',
  },
  {
    author: 'Michel Onfray',
    statement:
      'You cannot kill a breeze, a wind, a fragrance; you cannot kill a dream or an ambition.',
  },
  {
    author: 'Ken Wilber',
    statement:
      'I rise to taste the dawn, and find that love alone will shine today.',
  },
  {
    author: 'Herbert Marcuse',
    statement:
      'The range of choice open to the individual is not the decisive factor in determining the degree of human freedom...',
  },
  {
    author: 'Gabriel Marcel',
    statement:
      'On a grassroots level we say that man can touch more than he can grasp.',
  },
  {
    author: 'Marsilio Ficino',
    statement:
      'You are running to seek your friend. Let your feet run, but your mind need not.',
  },
  {
    author: 'Chogyam Trungpa',
    statement: 'A man will give up almost anything except his suffering.',
  },
  {
    author: 'Kerry Thornley',
    statement:
      'Organized religion preaches Order and Love but spawns Chaos and Fury. Why?',
  },
  {
    author: 'Xenophanes',
    statement:
      'If cattle and horses, or lions, had hands, or were able to draw with their feet and produce the works which men do...',
  },
  {
    author: 'P. F. Strawson',
    statement:
      'No philosopher understands his predecessors until he has re-thought their thought in his own contemporary terms.',
  },
  {
    author: 'George Henry Lewes',
    statement:
      'Originality is independence, not rebellion; it is sincerity, not antagonism.',
  },
  {
    author: 'Gray Scott',
    statement:
      'Robots will harvest, cook, and serve our food. They will work in our factories, drive our cars, and walk our dogs...',
  },
  {
    author: 'Nick Bostrom',
    statement: "There are some problems that technology can't solve.",
  },
  {
    author: 'A. P. Martinich',
    statement:
      "A philosopher once said, 'Half of good philosophy is good grammar.'",
  },
  {
    author: 'Henry Hazlitt',
    statement:
      'The art of economics consists in looking not merely at the immediate but at the longer effects of any act or policy...',
  },
  {
    author: 'Thomas Nagel',
    statement: 'Life may be not only meaningless but absurd.',
  },
  {
    author: 'Josiah Royce',
    statement:
      'Of this our true individual life, our present life is a glimpse, a fragment, a hint...',
  },
  {
    author: 'William Whewell',
    statement: 'Every failure is a step to success.',
  },
  {
    author: 'Johann Gottlieb Fichte',
    statement: "Only one man ever understood me, and he didn't understand me.",
  },
  {
    author: 'Abdolkarim Soroush',
    statement:
      'In order for answers to become clear, the questions have to be clear.',
  },
  {
    author: 'James Harrington',
    statement:
      'The Law is but words and paper without the hands of swords of men.',
  },
  {
    author: 'Roger Bacon',
    statement:
      'All science requires mathematics. The knowledge of mathematical things is almost innate in us...',
  },
  {
    author: 'Richard Rorty',
    statement:
      'There is nothing deep down inside us except what we have put there ourselves.',
  },
  {
    author: 'Johann Georg Hamann',
    statement: 'Poetry is the mother-tongue of the human race.',
  },
  {
    author: 'Susanne Langer',
    statement:
      'Art is the objectification of feeling, and the subjectification of nature.',
  },
];

export default generateRandom;
