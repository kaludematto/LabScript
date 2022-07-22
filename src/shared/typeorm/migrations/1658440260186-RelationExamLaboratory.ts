import { MigrationInterface, QueryRunner } from 'typeorm';

export class RelationExamLaboratory1658440260186 implements MigrationInterface {
  name = 'RelationExamLaboratory';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "exams_laboratories_laboratory" ("examsId" uuid NOT NULL, "laboratoryId" uuid NOT NULL, CONSTRAINT "PK_79a5d32fb0b106eac9e280214b4" PRIMARY KEY ("examsId", "laboratoryId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6b051a9c36fd7a9c5e1f01c5ab" ON "exams_laboratories_laboratory" ("examsId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_703a61e2bd523438e5819b7b9e" ON "exams_laboratories_laboratory" ("laboratoryId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "exams_laboratories_laboratory" ADD CONSTRAINT "FK_6b051a9c36fd7a9c5e1f01c5ab7" FOREIGN KEY ("examsId") REFERENCES "exams"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "exams_laboratories_laboratory" ADD CONSTRAINT "FK_703a61e2bd523438e5819b7b9ea" FOREIGN KEY ("laboratoryId") REFERENCES "laboratory"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "exams_laboratories_laboratory" DROP CONSTRAINT "FK_703a61e2bd523438e5819b7b9ea"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exams_laboratories_laboratory" DROP CONSTRAINT "FK_6b051a9c36fd7a9c5e1f01c5ab7"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_703a61e2bd523438e5819b7b9e"`);
    await queryRunner.query(`DROP INDEX "IDX_6b051a9c36fd7a9c5e1f01c5ab"`);
    await queryRunner.query(`DROP TABLE "exams_laboratories_laboratory"`);
  }
}
