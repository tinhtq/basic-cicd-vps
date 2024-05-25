import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClicksController } from './api/clicks/clicks.controller';
import { PingController } from './api/ping/ping.controller';

@Module({
  imports: [],
  controllers: [AppController, ClicksController, PingController],
  providers: [AppService],
})

export class AppModule {}
