import { LogService } from './log.service';
import { ILogService, ILogTransporter } from './model';
import { ConsoleLogTransporter } from './transporters/console-log-transporter';

describe('Log Service', () => {

  let logService: ILogService;

  let transporter1: ILogTransporter;

  const transporter2: ILogTransporter = {
    id: '@log/fs',
    destination: '',
    transport: jest.fn(),
    flush: jest.fn(),
  };

  const TAG: string = 'LogService Tests';
  const testMessage: string = 'Who let the dogs out?';

  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    transporter1 = new ConsoleLogTransporter();
    logService = new LogService({
      transporters: [transporter1, transporter2],
    });
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('logs debug to standard console', () => {
    const spy = jest.spyOn(console, 'log');
    logService.debug(TAG, testMessage);

    expect(spy).toHaveBeenCalledWith(expect.stringContaining(testMessage));
  });

  it('logs warn to standard console', () => {
    const spy = jest.spyOn(console, 'warn');
    logService.warn(TAG, testMessage);

    expect(spy).toHaveBeenCalledWith(expect.stringContaining(testMessage));
  });

  it('logs error to standard console', () => {
    const spy = jest.spyOn(console, 'error');
    logService.error(TAG, testMessage);

    expect(spy).toHaveBeenCalledWith(expect.stringContaining(testMessage));
  });

  it('able to log with custom transporter', () => {
    logService.debug(TAG, testMessage);
    logService.warn(TAG, testMessage);
    logService.error(TAG, testMessage);

    expect(transporter2.transport).toHaveBeenCalledWith(
      TAG,
      expect.stringContaining(testMessage),
      expect.objectContaining({ level: 'debug' }),
    );

    expect(transporter2.transport).toHaveBeenCalledWith(
      TAG,
      expect.stringContaining(testMessage),
      expect.objectContaining({ level: 'warn' }),
    );

    expect(transporter2.transport).toHaveBeenCalledWith(
      TAG,
      expect.stringContaining(testMessage),
      expect.objectContaining({ level: 'error' }),
    );
  });

  it('flushes every 50ms', () => {
    logService = new LogService({ flushInterval: 50 });
    logService.flush = jest.fn();

    jest.advanceTimersByTime(200);

    expect(logService.flush).toHaveBeenCalledTimes(4);
  });

  it('does not flush with 0 interval', () => {
    logService = new LogService({ flushInterval: 0, transporters: [transporter2] });
    logService.flush = jest.fn();

    jest.advanceTimersByTime(200);

    expect(logService.flush).toHaveBeenCalledTimes(0);
  });

  it('flushes all transporters', () => {
    transporter1.flush = jest.fn();
    logService.flush();

    expect(transporter1.flush).toHaveBeenCalled();
    expect(transporter2.flush).toHaveBeenCalled();
  });

});

