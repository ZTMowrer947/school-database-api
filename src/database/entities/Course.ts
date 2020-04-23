// Imports
import { classToPlain, Expose, Type } from "class-transformer";
import { Column, Entity, ManyToOne } from "typeorm";
import TimestampedEntity from "./TimestampedEntity";
import User from "./User";

// Entity
@Entity("courses")
export default class Course extends TimestampedEntity {
    @Expose()
    @Column({ length: 127, nullable: false })
    public title!: string;

    @Expose()
    @Column({ type: "text", nullable: false })
    public description!: string;

    @Expose()
    @Column({ nullable: true, default: null })
    public estimatedTime!: string | null;

    @Expose()
    @Column({ nullable: true, default: null })
    public materialsNeeded!: string | null;

    @Expose()
    @Type(() => User)
    @ManyToOne(
        () => User,
        user => user.createdCourses,
        {
            nullable: false,
            onDelete: "CASCADE",
        }
    )
    public creator!: User;

    /* istanbul ignore next */
    public toJSON(): object {
        return classToPlain(this, { strategy: "excludeAll" });
    }
}