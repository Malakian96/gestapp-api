import { User } from '../../models/user';
import { CommonDto } from '../common.dto';

export class UserDto extends CommonDto {
    
    name: string;

    surname: string;

    email: string;
    
    entityToDto(user: User): UserDto{
        this.id = user?.id;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
        this.name = user.name;
        this.surname = user.surname;
        this.email = user.email;

        return this;
    }

    dtoToEntity(user: UserDto): User{
        const userEntity = new User();
        userEntity.id = user?.id;
        userEntity.createdAt = user.createdAt;
        userEntity.updatedAt = user.updatedAt;
        userEntity.name = user.name;
        userEntity.surname = user.surname;
        userEntity.email = user.email;
        return userEntity;
    }

}