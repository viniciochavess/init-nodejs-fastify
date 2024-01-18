-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_gym" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "latitude" DECIMAL NOT NULL,
    "longitude" DECIMAL NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_gym" ("description", "id", "latitude", "longitude", "phone", "title") SELECT "description", "id", "latitude", "longitude", "phone", "title" FROM "gym";
DROP TABLE "gym";
ALTER TABLE "new_gym" RENAME TO "gym";
CREATE TABLE "new_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_user" ("created_at", "email", "id", "name", "password_hash") SELECT "created_at", "email", "id", "name", "password_hash" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE TABLE "new_check_ins" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validated_at" DATETIME,
    "user_id" TEXT NOT NULL,
    "gym_id" TEXT NOT NULL,
    CONSTRAINT "check_ins_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "check_ins_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "gym" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_check_ins" ("created_at", "gym_id", "id", "user_id", "validated_at") SELECT "created_at", "gym_id", "id", "user_id", "validated_at" FROM "check_ins";
DROP TABLE "check_ins";
ALTER TABLE "new_check_ins" RENAME TO "check_ins";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
