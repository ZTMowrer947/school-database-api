// Imports
import { Service } from "typedi";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import User from "../database/entities/User.entity";
import UserInput from "../models/UserInput";

// Service
@Service()
export default class UserService {
    private repository: Repository<User>;

    public constructor(@InjectRepository(User) repository: Repository<User>) {
        this.repository = repository;
    }

    public async getUserByEmail(
        emailAddress: string
    ): Promise<User | undefined> {
        // Create query
        const query = this.repository
            .createQueryBuilder("users")
            .where("users.emailAddress = :emailAddress", { emailAddress });

        // Execute query
        const user = await query.getOne();

        // Return the user
        return user;
    }

    public async create(userData: UserInput): Promise<void> {
        // Create user instance
        const user = new User();

        // Set user properties
        user.firstName = userData.firstName;
        user.lastName = userData.lastName;
        user.emailAddress = userData.emailAddress;
        user.password = userData.password;

        // Persist user to database
        await this.repository.save(user);
    }
}
