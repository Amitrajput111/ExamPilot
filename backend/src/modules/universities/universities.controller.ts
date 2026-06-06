import { Controller, Get, Param } from '@nestjs/common';
import { UniversitiesService } from './universities.service';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Get()
  findAll() {
    return this.universitiesService.findAll();
  }

  @Get(':acronym')
  findOne(@Param('acronym') acronym: string) {
    return this.universitiesService.findOne(acronym);
  }

  @Get('subject/:code')
  findSubject(@Param('code') code: string) {
    return this.universitiesService.findSubjectDetails(code);
  }
}
