import { lazyInject, AppModule } from '../../../../di/container';
import { ILogService } from '../../../../service/log/model';
import { IGrowthRateVM } from './growth-rate.component';

export class GrowthRateVM implements IGrowthRateVM {

  @lazyInject(AppModule.LOG) private log!: ILogService;

  public get rate(): string {
    return '17,67%';
  }

  public get growthPeriod(): string {
    return '12.5.21 - 22.9.22';
  }

  public get dropDate(): string {
    return '19.12.2023';
  }

  public get dropPrice(): string {
    return '€99.950,00';
  }

  public viewDetails = (): void => {
    this.log.info('ProductDetailsVM', 'Pressed View Growth Rate');
  };
}
