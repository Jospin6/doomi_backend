import { JwtGuard } from './jwt.guard';
import { JwtService } from '@nestjs/jwt';

describe('JwtGuard', () => {
  it('should be defined', () => {
    const jwtService = new JwtService({}); // Pass appropriate options if needed
    return expect(new JwtGuard(jwtService)).toBeDefined();
  });
});
