import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class UniversitiesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.university.findMany({
      include: {
        branches: {
          include: {
            semesters: true,
          },
        },
      },
    });
  }

  async findOne(acronym: string) {
    const uni = await this.prisma.university.findUnique({
      where: { acronym: acronym.toUpperCase() },
      include: {
        branches: {
          include: {
            semesters: {
              include: {
                subjects: true,
              },
            },
          },
        },
      },
    });
    if (!uni) {
      throw new NotFoundException(`University with acronym ${acronym} not found`);
    }
    return uni;
  }

  async findSubjectDetails(code: string) {
    const subject = await this.prisma.subject.findUnique({
      where: { code: code.toUpperCase() },
      include: {
        units: {
          include: {
            topics: true,
            questions: {
              include: {
                answer: true,
              },
            },
            revisionSheet: true,
          },
        },
      },
    });
    if (!subject) {
      throw new NotFoundException(`Subject code ${code} not found`);
    }
    return subject;
  }
}
