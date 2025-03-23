import { AppModule, lazyInject } from '../../../../di/container';
import { ILogService } from '../../../../service/log/model';
import { IFAQQuestion, IFAQVM } from './faq.component';

const QUESTIONS = [
  { title: 'Wer steht hinter Timeless Investments?', url: 'https://timeless.investments' },
  { title: 'Wie funktioniert Timeless', url: 'https://timeless.investments' },
  { title: 'Wem gehören die Collectibles, nachdem investiert wurde?', url: 'https://timeless.investments' },
  { title: 'Was passiert im Falle einer Insolvenz?', url: 'https://timeless.investments' },
];

export class FAQVM implements IFAQVM {

  @lazyInject(AppModule.LOG) private log!: ILogService;

  public get questions(): IFAQQuestion[] {
    return QUESTIONS.map(question => ({
      title: question.title,
      viewAnswer: () => this.log.info('ProductDetailsVM', 'Pressed FAQ Answer', { url: question.url }),
    }));
  }

  public viewMore = (): void => {
    this.log.info('FAQVM', 'Pressed View More FAQs');
  };
}
