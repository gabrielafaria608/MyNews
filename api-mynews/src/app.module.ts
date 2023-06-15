import { Module } from '@nestjs/common';
import { NoticiasController } from './noticias/noticias.controller';
import { NoticiasRepository } from './noticias/repository/noticias-repository';

@Module({
  imports: [],
  controllers: [NoticiasController],
  providers: [NoticiasRepository],
})
export class AppModule {}
