import q1q from './assets/questions/1/q.jpg';
import q1a from './assets/questions/1/a.png';
import q1s from './assets/questions/1/s.png';
import q2q from './assets/questions/2/q.jpg';
import q2a from './assets/questions/2/a.png';
import q2s from './assets/questions/2/s.png';
import q3q from './assets/questions/3/q.jpg';
import q3a from './assets/questions/3/a.png';
import q3s from './assets/questions/3/s.png';
import q4q from './assets/questions/4/q.jpg';
import q4a from './assets/questions/4/a.png';
import q4s from './assets/questions/4/s.png';
import q5q from './assets/questions/5/q.jpg';
import q5a from './assets/questions/5/a.png';
import q5s from './assets/questions/5/s.png';
import q6q from './assets/questions/6/q.jpg';
import q6a from './assets/questions/6/a.png';
import q6s from './assets/questions/6/s.png';
import q7q from './assets/questions/7/q.jpg';
import q7a from './assets/questions/7/a.png';
import q7s from './assets/questions/7/s.png';
import q8q from './assets/questions/8/q.jpg';
import q8a from './assets/questions/8/a.png';
import q8s from './assets/questions/8/s.png';
import q9q from './assets/questions/9/q.jpg';
import q9a from './assets/questions/9/a.png';
import q9s from './assets/questions/9/s.png';

const questionSet = [
  {
    questionText: 'Qual a imagem correspondente a um avião?',
    answerText: 'Nesta imagem consegue-se ver a diferença entre o ceu e o avião. Também dá para ver a forma triagular do avião.',
    hardAnswerText: 'Nesta imagem consegue-se ver alguns detalhes apanhados pela rede neuronal. Estes detalhes realçam a forma triangular do avião.',
    questionImg: q1q,
    answerImg: q1a,
    harderImg: q1s,
  },
  {
    questionText: 'Qual a imagem correspondente a um pássaro?',
    answerText: 'A forma do pássaro vê-se claramente na imagem, sendo que as bordas do pássaro estão mais claras, nomeadamente no canto superior direito.',
    hardAnswerText: 'A forma do pássaro não se distingue tão facilmente nesta imagem. Só as bordas do canto inferior esquerdo do pássaro estão "iluminadas".',
    questionImg: q2q,
    answerImg: q2a,
    harderImg: q2s,
  },
  {
    questionText: 'Qual a imagem correspondente a um carro?',
    answerText: 'Nesta imagem, a rede realça o carro claramente no centro da ecrã, ignorando o fundo que deixou preto.',
    hardAnswerText: 'Nesta imagem a rede realça mais uns detalhes do fundo que,para o olho human, faz com que seja mais dificil distinguir o carro.',
    questionImg: q3q,
    answerImg: q3a,
    harderImg: q3s,
  },
  {
    questionText: 'Qual a imagem correspondente a um cavalo?',
    answerText: 'Nesta imagem, a rede realçou aspetos do cavalo em si, visivel nas suas bordas, tal como parte do chão.',
    hardAnswerText: 'Nesta imagem a rede parece ter realçado as pernas do cavalo, fazendo com que a imagem fosse bastante diferente da original. Isto acontece em várias camadas das redes quando procura detalhes relevantes da imagem.',
    questionImg: q4q,
    answerImg: q4a,
    harderImg: q4s,
  },
  {
    questionText: 'Qual a imagem correspondente a pássaro?',
    answerText: 'Nesta imagem, a rede realçou as bordas do pássaro enquanto classificava a imagem. Isto torna a imagem simples de perceber, pois a forma do pássaro está bem visível.',
    hardAnswerText: 'Nesta imagem, a rede parece ter realçado outros aspetos para além do pássaro enquanto tentava classificar a imagem. Isto torna esta imagem mais difícil de perceber.',
    questionImg: q5q,
    answerImg: q5a,
    harderImg: q5s,
  },
  {
    questionText: 'Qual a imagem correspondente a uma galinha?',
    answerText: 'Nesta imagem, a rede realçou as detalhes e as boardas da galinha, ignorando o fundo.',
    hardAnswerText: 'Nesta imagem, a rede realçou as bordas da galinha, nomeadamente as da esquerda.',
    questionImg: q6q,
    answerImg: q6a,
    harderImg: q6s,
  },
  {
    questionText: 'Qual a imagem correspondente a um carro?',
    answerText: 'Nesta imagem, a rede destacou detalhes do carro, nomeadamente nas traseiras. Também realçou parte da estrada por baixo enquanto procurava os detalhes que identificam um "carro".',
    hardAnswerText: 'Nesta imagem, a rede destacou ligeiramente vários aspetos, incluindo a estrada. A imagem parece cheia de ruído por causa destes destaques.',
    questionImg: q7q,
    answerImg: q7a,
    harderImg: q7s,
  },
  {
    questionText: 'Qual a imagem correspondente a um cavalo?',
    answerText: 'Nesta imagem, a rede destacou parte o chão e parte do topo do cavalo. Consegue-se ver a forma das suas costas e pescoço.',
    hardAnswerText: 'Nesta imagem, a rede destacou mais o fundo do que o cavalo em si, parecendo agora uma sombra.',
    questionImg: q8q,
    answerImg: q8a,
    harderImg: q8s,
  },
  {
    questionText: 'Qual a imagem correspondente a um pássaro pousado num ramo?',
    answerText: 'Nesta imagem, a rede destacou o ramo mais do que o pássaro. Contudo, dá para ver que a rede ainda conseguiu distinguir o pássaro do fundo que está escuro.',
    hardAnswerText: 'Nesta imagem, a rede destacou as bordas do ramo e não destacou o pássaro. Isto pode ser devido à cor do pássaro ser parecida ao do fundo, disfarçando-o.',
    questionImg: q9q,
    answerImg: q9a,
    harderImg: q9s,
  },
];

export default questionSet;