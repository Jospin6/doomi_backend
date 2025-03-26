import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "../../user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 🔑 Récupère le token du header
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || "super-secret-key", // 🔐 Change ça en variable d'env
        });
    }

    async validate(payload: { sub: string }) {
        const user = await this.usersService.findOne(payload.sub);
        if (!user) {
            throw new Error("User not found");
        }
        return user; // L'utilisateur validé est ajouté automatiquement à `req.user`
    }
}
