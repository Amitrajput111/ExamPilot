import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('simplify')
  simplifyAnswer(@Body() body: { questionText: string; modelAnswer: string }) {
    return this.aiService.simplifyAnswer(body.questionText, body.modelAnswer);
  }

  @Post('summary')
  generateTopicSummary(@Body() body: { topicName: string; description: string }) {
    return this.aiService.generateTopicSummary(body.topicName, body.description);
  }

  @Post('plan')
  generate1DayPlan(@Body() body: { subjectName: string; totalUnits: number }) {
    return this.aiService.generate1DayPlan(body.subjectName, body.totalUnits);
  }
}
