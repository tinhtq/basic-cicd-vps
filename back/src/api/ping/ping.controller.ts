import { Controller, Get, Header } from '@nestjs/common';

@Controller('api/ping')
export class PingController {
  @Get()
  @Header('Content-type', 'application/json')
  ping(): object {
    return {ping: "pong"};
  }
}
