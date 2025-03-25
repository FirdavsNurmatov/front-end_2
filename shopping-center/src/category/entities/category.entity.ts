import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
