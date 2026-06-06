import { PrismaClient, Role, Importance } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Database...');

  // Create Users
  const student = await prisma.user.upsert({
    where: { email: 'student@exampilot.in' },
    update: {},
    create: {
      email: 'student@exampilot.in',
      name: 'Amit Kumar',
      password: 'studentpassword123',
      role: Role.STUDENT,
    },
  });

  const admin = await prisma.user.upsert({
    where: { email: 'admin@exampilot.in' },
    update: {},
    create: {
      email: 'admin@exampilot.in',
      name: 'Dr. R. K. Vyas',
      password: 'adminpassword123',
      role: Role.ADMIN,
    },
  });

  // Create University: RGPV
  const rgpv = await prisma.university.upsert({
    where: { acronym: 'RGPV' },
    update: {},
    create: {
      name: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      acronym: 'RGPV',
    },
  });

  // Create Branch: CSE
  const cse = await prisma.branch.create({
    data: {
      name: 'Computer Science & Engineering',
      universityId: rgpv.id,
    },
  });

  // Create Semester: 5
  const sem5 = await prisma.semester.create({
    data: {
      number: 5,
      branchId: cse.id,
    },
  });

  // Create Subject: Computer Graphics
  const cg = await prisma.subject.create({
    data: {
      name: 'Computer Graphics',
      code: 'CS-504',
      semesterId: sem5.id,
    },
  });

  // Create Unit 1
  const unit1 = await prisma.unit.create({
    data: {
      number: 1,
      title: 'Introduction and Line Generation',
      overview: 'Introduction to Computer Graphics, video display devices, raster scan and random scan displays. Basic line drawing algorithms including DDA and Bresenham.',
      subjectId: cg.id,
    },
  });

  // Create Topics for Unit 1
  await prisma.topic.createMany({
    data: [
      {
        name: 'Bresenham\'s Line Drawing Algorithm',
        importance: Importance.HIGH,
        description: 'Derivation and algorithm steps for line generation.',
        unitId: unit1.id,
      },
      {
        name: 'Raster vs Random Scan Displays',
        importance: Importance.MEDIUM,
        description: 'Key architectural and visual differences between the two display systems.',
        unitId: unit1.id,
      },
    ],
  });

  // Create Question 1 for Unit 1
  const q1 = await prisma.question.create({
    data: {
      text: 'Derive and explain Bresenham\'s Line Drawing Algorithm for lines with slope m < 1. Write the step-by-step procedure.',
      askedYears: [2020, 2022, 2024],
      frequency: 3,
      importance: Importance.HIGH,
      unitId: unit1.id,
    },
  });

  // Create Model Answer for Question 1
  await prisma.answer.create({
    data: {
      introduction: 'Bresenham\'s Line Drawing Algorithm is an efficient raster scan line-generating algorithm. It uses only integer addition, subtraction, and multiplication by 2, avoiding floating-point calculations, making it extremely fast.',
      diagramSvgType: 'bresenham',
      diagramDescription: 'Bresenham Decision Variable Diagram showing pixel choices (E vs NE) based on midpoint evaluation.',
      explanation: [
        'Understand the decision variable: Let the starting pixel be (x_k, y_k). The next pixel to choose is either E (x_k + 1, y_k) or NE (x_k + 1, y_k + 1). We determine this using a decision variable p_k.',
        'Initial Decision Variable: p_0 = 2 * dy - dx, where dx = x2 - x1 and dy = y2 - y1.',
        'Loop Step: At each step, if p_k < 0, the next pixel is E, and p_{k+1} = p_k + 2 * dy.',
        'If p_k >= 0, the next pixel is NE, and we increment y by 1. The decision parameter updates to p_{k+1} = p_k + 2 * dy - 2 * dx.',
      ],
      conclusion: 'Bresenham\'s algorithm is standard in computer graphics because of its high efficiency, precision, and ease of hardware implementation.',
      questionId: q1.id,
    },
  });

  // Create Revision Sheet for Unit 1
  await prisma.revisionSheet.create({
    data: {
      quickSummary: 'Unit 1 focuses on drawing basic 2D primitives. Memorize the decision variables for Bresenham\'s line algorithm and midpoint circle algorithm.',
      formulasOrKeypoints: [
        'Bresenham initial parameter: P_0 = 2*dy - dx',
        'If P_k < 0: P_{k+1} = P_k + 2*dy',
        'If P_k >= 0: P_{k+1} = P_k + 2*dy - 2*dx',
      ],
      revisionChecklist: [
        'Bresenham\'s slope derivation (for m < 1)',
        'Raster Scan vs Random Scan comparison matrix',
      ],
      unitId: unit1.id,
    },
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
