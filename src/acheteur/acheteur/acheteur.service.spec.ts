import { Test, TestingModule } from '@nestjs/testing';
import { AcheteurService } from './acheteur.service';

describe('AcheteurService', () => {
  let service: AcheteurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcheteurService],
    }).compile();

    service = module.get<AcheteurService>(AcheteurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
