import { Module, HttpModule } from '@nestjs/common';
import { FacebookController } from './facebook.controller';
import { FacebookService } from './facebook.service';



@Module({
    imports: [HttpModule],
    controllers: [FacebookController],
    providers: [FacebookService],
  })
export class FacebookModule {}
