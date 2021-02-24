import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../utils/db';

export interface UserInstance extends Model {
  id: string;
}

const userSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
};

export const User = sequelize.define<UserInstance>('User', userSchema, {
  timestamps: true,
});
