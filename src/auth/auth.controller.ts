import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';
import { JwtGuard } from './jwt/jwt.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('signup')
    async signup(@Body() signupUserDto: Prisma.UserCreateInput) {
        return this.authService.signup(signupUserDto);
    }

    @Post('signin')
    async login(
        @Body('email') email: string,
        @Body('password') password: string
    ) {
        return this.authService.login(email, password);
    }

    @Get("me")
    @UseGuards(JwtGuard) // 🔐 Protège l'endpoint avec JWT
    getProfile(@Req() req) {
        return req.user; // L'utilisateur est récupéré depuis le token
    }
}
