import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async findAll() {
    const allUsers = await this.usersRepository.find();

    if (!allUsers) throw new NotFoundException('No data in database!');

    return allUsers;
  }

  async findOne(id: number) {
    const oneUserData = await this.usersRepository.findOneBy({ id: id });

    if (!oneUserData) throw new NotFoundException('User not found!');

    return oneUserData;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const oneUserData = await this.usersRepository.delete({ id: id });

    if (oneUserData.affected == 0)
      throw new NotFoundException('User not found!');

    return oneUserData;
  }
}
