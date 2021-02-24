import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../utils/db';
import { List } from '../list/list.model';
import { User } from '../user/user.model';

export interface ItemInstance extends Model {
  id: number;
  name: string;
  status: string;
  notes: string;
  createdBy: string;
  list: string;
}

const itemSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['active', 'complete', 'pastdue'],
    defaultValue: 'active',
    allowNull: false,
  },
  notes: { type: DataTypes.STRING },
  due: { type: DataTypes.DATE },
  createdBy: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  list: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: List,
      key: 'id',
    },
  },
};

export const Item = sequelize.define<ItemInstance>('Item', itemSchema, {
  timestamps: true,
});
