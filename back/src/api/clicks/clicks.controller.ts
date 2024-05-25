import { Controller, Get, Header } from '@nestjs/common';
import { createClient } from 'redis';

const client = createClient({url: `redis://${process.env.REDIS_SERVER}`});
client.on('error', (err) => console.log('Redis Client Error', err));

@Controller('api/clicks')
export class ClicksController {
  @Get()
  @Header('Content-type', 'application/json')
  @Header('Access-Control-Allow-Origin', '*')
  async clicks() {
    client.isOpen || await client.connect();

    let clicks = parseInt(await client.get('clicks')) || 0;

    return {clicks: clicks};
  }

  @Get('incr')
  @Header('Content-type', 'application/json')
  @Header('Access-Control-Allow-Origin', '*')
  async incr() {
    client.isOpen || await client.connect();

    await client.incr('clicks');

    let clicks = parseInt(await client.get('clicks'));

    return {clicks: clicks};
  }
}
