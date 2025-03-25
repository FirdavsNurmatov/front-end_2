import { Role } from 'src/enums/role.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'username', type: 'varchar', unique: true })
  username: string;

  @Column({ name: 'email', type: 'varchar', unique: true })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
    name: 'role',
  })
  role: Role;
}
