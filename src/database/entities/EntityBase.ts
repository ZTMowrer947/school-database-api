// Imports
import crypto from "crypto";
import { Expose } from "class-transformer";
import base32 from "hi-base32";
import { InterfaceType, Field, ID } from "type-graphql";
import { BeforeInsert, PrimaryColumn } from "typeorm";
import JSONSerializable from "../../models/JSONSerializable";

// Entity
@InterfaceType()
abstract class EntityBase implements JSONSerializable {
    @Expose()
    @PrimaryColumn({ length: 16 })
    @Field(() => ID, { nullable: false })
    public id!: string;

    @BeforeInsert()
    private generateId(): void {
        // Generate 80 random bytes
        const bytes = crypto.randomBytes(10);

        // Encode as Base32 and store as ID
        this.id = base32.encode(bytes);
    }

    public abstract toJSON(): object;
}

// Export
export default EntityBase;
