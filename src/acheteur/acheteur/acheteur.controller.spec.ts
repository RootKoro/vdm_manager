import { Test, TestingModule } from '@nestjs/testing';
import { AcheteurController } from './acheteur.controller';

describe('AcheteurController', () => {
  let controller: AcheteurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcheteurController],
    }).compile();

    controller = module.get<AcheteurController>(AcheteurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
