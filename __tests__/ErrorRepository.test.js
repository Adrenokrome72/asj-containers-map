import ErrorRepository from '../src/ErrorRepository';

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
    errorRepo.errors.set(404, 'Not Found');
  });

  test('translate возвращает описание ошибки', () => {
    expect(errorRepo.translate(404)).toBe('Not Found');
  });

  test('translate возвращает "Unknown error"', () => {
    expect(errorRepo.translate(500)).toBe('Unknown error');
  });
});