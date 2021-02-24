import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../utils/db';
import { User } from '../user/user.model';

export interface ListInstance extends Model {
  id: string;
  name: string;
  description: string;
  createdBy: string;
}

const listSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: { type: DataTypes.STRING },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
};

export const List = sequelize.define<ListInstance>('List', listSchema, {
  timestamps: true,
});
