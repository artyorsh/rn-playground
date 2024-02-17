import { IFAQQuestion, IFAQVM } from './faq.component';

const QUESTIONS = [
  { title: 'Wer steht hinter Timeless Investments?', url: 'https://timeless.investments' },
  { title: 'Wie funktioniert Timeless', url: 'https://timeless.investments' },
  { title: 'Wem gehören die Collectibles, nachdem investiert wurde?', url: 'https://timeless.investments' },
  { title: 'Was passiert im Falle einer Insolvenz?', url: 'https://timeless.investments' },
];

export class FAQVM implements IFAQVM {

  public get questions(): IFAQQuestion[] {
    return QUESTIONS.map(question => ({
      title: question.title,
      viewAnswer: () => console.log('FAQVM', 'View Answer', question.url),
    }));
  }

  public viewMore = (): void => {
    console.log('FAQVM', 'View More');
  };
}
