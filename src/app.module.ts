import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
