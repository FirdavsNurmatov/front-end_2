import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { hashPassword, comparePassword } from 'src/config/hashingPassword';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private configService: ConfigService,
  ) {}

  async findAll() {
    const allUsers = await this.usersRepository.find();

    if (!allUsers) throw new NotFoundException('No data in database!');

    return { status: HttpStatus.OK, message: 'Fetched', data: allUsers };
  }

  async findOne(id: number) {
    const oneUserData = await this.usersRepository.findOneBy({ id: id });

    if (!oneUserData) throw new NotFoundException('User not found!');

    return oneUserData;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const oldUserData = await this.usersRepository.findOneBy({ id: id });

    if (!oldUserData) throw new NotFoundException('User not found!');

    const comparedPassword = await comparePassword(
      oldUserData.password,
      updateUserDto.current_password,
    );

    if (!comparedPassword) {
      throw new BadRequestException('Password not matched!');
    }

    if (updateUserDto.new_password) {
      const newHashedPassword = await hashPassword(
        updateUserDto.new_password,
        +this.configService.get<number>('BCRYPT_KEY'),
      );

      const newUserData = this.usersRepository.create({
        username: updateUserDto.username || oldUserData.username,
        email: updateUserDto.email || oldUserData.email,
        password: newHashedPassword,
      });
      this.usersRepository.save(newUserData);

      return {
        status: HttpStatus.OK,
        message: 'Updated',
        data: { ...newUserData },
      };
    } else {
      const newUserData = this.usersRepository.create({
        username: updateUserDto.username || oldUserData.username,
        email: updateUserDto.email || oldUserData.email,
        password: oldUserData.password,
      });
      this.usersRepository.save(newUserData);

      return {
        status: HttpStatus.OK,
        message: 'Updated',
        data: { ...newUserData },
      };
    }
  }

  async remove(id: number) {
    const oneUserData = await this.usersRepository.delete({ id: id });

    if (oneUserData.affected == 0)
      throw new NotFoundException('User not found!');

    return oneUserData;
  }
}
