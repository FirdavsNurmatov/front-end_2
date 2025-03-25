import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'price' })
  price: number;

  @Column({ type: 'varchar', name: 'description' })
  description: string;

  @Column({ type: 'int', name: 'quantity' })
  quantity: number;

  @Column({ type: 'int', name: 'category_id' })
  category_id: number;

  @ManyToOne(() => Category, (category) => category.products, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
