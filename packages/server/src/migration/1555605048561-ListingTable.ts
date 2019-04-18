import {MigrationInterface, QueryRunner} from "typeorm";

export class listingTable1555605048561 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "pictureUrl"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "beds"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "guests"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "amenities"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "confirmed"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "forgotPasswordLocked"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "confirmed" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "forgotPasswordLocked" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "pictureUrl" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "price" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "beds" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "guests" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "latitude" double precision`);
        await queryRunner.query(`ALTER TABLE "users" ADD "longitude" double precision`);
        await queryRunner.query(`ALTER TABLE "users" ADD "amenities" text array`);
        await queryRunner.query(`ALTER TABLE "users" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_8bf09ba754322ab9c22a215c919" FOREIGN KEY ("userId") REFERENCES "users"("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_8bf09ba754322ab9c22a215c919"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "amenities"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "guests"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "beds"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "pictureUrl"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "forgotPasswordLocked"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "confirmed"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "forgotPasswordLocked" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "confirmed" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "amenities" text array`);
        await queryRunner.query(`ALTER TABLE "users" ADD "longitude" double precision`);
        await queryRunner.query(`ALTER TABLE "users" ADD "latitude" double precision`);
        await queryRunner.query(`ALTER TABLE "users" ADD "guests" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "beds" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "price" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "pictureUrl" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" character varying(100)`);
    }

}
