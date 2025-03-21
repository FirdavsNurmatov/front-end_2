import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from 'src/decorators/role.decorator';
import { Role } from 'src/enums/role.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const token =
      context
        .switchToHttp()
        .getRequest()
        .headers.authorization?.split(' ')[1] ?? [];

    try {
      const payload = await this.jwtService.verify(token, {
        secret: this.configService.get<string>('ACCESS_TOKEN_KEY'),
      });

      return requiredRoles.includes(payload.role);
    } catch (error) {
      return false;
    }
  }
}
