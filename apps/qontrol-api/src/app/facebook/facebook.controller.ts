import { Controller, Get } from '@nestjs/common';

import { FacebookService } from './facebook.service';

@Controller('facebook')
export class FacebookController {
  constructor(private readonly facebookService: FacebookService) {}

  @Get()
  getData() {
    return this.facebookService.getPreviewsWithHttpGet();
  }

  @Get('generate-previews')
  generatePreviews() {
    return this.facebookService.generatePreviews();
  }
}
