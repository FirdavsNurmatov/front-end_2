import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Repository } from 'typeorm';
import { Users } from 'src/users/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword, comparePassword } from 'src/config/hashingPassword';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private readonly authRepository: Repository<Users>,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async register(registerAuthDto: RegisterAuthDto) {
    const hasUser = await this.authRepository.findOneBy([
      {
        email: registerAuthDto.email,
      },
      { username: registerAuthDto.username },
    ]);

    if (hasUser) {
      throw new BadRequestException('Email or username already exists!');
    }

    const hashedPassword = await hashPassword(
      registerAuthDto.password,
      +this.configService.get<number>('BCRYPT_KEY'),
    );

    const newUser = this.authRepository.create({
      ...registerAuthDto,
      password: hashedPassword,
    });
    await this.authRepository.save(newUser);

    return { status: HttpStatus.CREATED, message: 'Created' };
  }

  async login(loginAuthDto: LoginAuthDto) {
    const oldUserData = await this.authRepository.findOneBy({
      email: loginAuthDto.email,
    });

    if (!oldUserData) {
      throw new NotFoundException('User not found!');
    } else {
      const res = await comparePassword(
        oldUserData.password,
        loginAuthDto.password,
      );
      if (!res) throw new BadRequestException('Incorrect password!');
    }

    const accessTokenPayload = {
      id: oldUserData.id,
      role: oldUserData.role,
    };

    const refreshTokenPayload = {
      id: oldUserData.id,
      email: oldUserData.email,
    };

    return {
      status: HttpStatus.OK,
      message: 'Logged in',
      data: {
        accessToken: this.jwtService.sign(accessTokenPayload),
        accessTokenTime: this.configService.get<string>(
          'ACCESS_TOKEN_EXPIRE_TIME',
        ),
        refreshToken: this.jwtService.sign(refreshTokenPayload),
        refreshTokenTime: this.configService.get<string>(
          'REFRESH_TOKEN_EXPIRE_TIME',
        ),
      },
    };
  }
}
