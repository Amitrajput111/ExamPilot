import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UniversitiesModule } from './modules/universities/universities.module';
import { AiModule } from './modules/ai/ai.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UniversitiesModule,
    AiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
