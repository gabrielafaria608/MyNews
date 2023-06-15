import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoticiasController } from './noticias/noticias.controller';

@Module({
  imports: [],
  controllers: [AppController, NoticiasController],
  providers: [AppService],
})
export class AppModule {}
