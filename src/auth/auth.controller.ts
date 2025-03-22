import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    async signup( @Body() signupUserDto: Prisma.UserCreateInput) {
        return this.authService.signup(signupUserDto);
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        return this.authService.login(email, password);
    }
}
