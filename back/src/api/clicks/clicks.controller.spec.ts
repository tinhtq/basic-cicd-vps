import { Test, TestingModule } from '@nestjs/testing';
import { ClicksController } from './clicks.controller';

describe('ClicksController', () => {
  let controller: ClicksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClicksController],
    }).compile();

    controller = module.get<ClicksController>(ClicksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
