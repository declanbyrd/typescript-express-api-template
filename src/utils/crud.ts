import { Request, Response } from 'express';
import { ModelCtor } from 'sequelize';
import { ItemInstance } from '../resources/item/item.model';
import { ListInstance } from '../resources/list/list.model';
import { UserInstance } from '../resources/user/user.model';

type ModelTypes = UserInstance | ItemInstance | ListInstance;

export const getOne = (model: ModelCtor<ModelTypes>) => async (
  req: Request,
  res: Response
) => {
  try {
    const record = await model.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!record) {
      return res.status(400).end();
    }

    res.status(200).json({ data: record });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};
export const getMany = (model: ModelCtor<ModelTypes>) => async (
  req: Request,
  res: Response
) => {
  try {
    const records = await model.findAll();
    if (!records) {
      return res.status(400).end();
    }

    res.status(200).json({ data: records });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};
export const createOne = (model: ModelCtor<ModelTypes>) => async (
  req: Request,
  res: Response
) => {
  // Implement this with user authentication
  // const createdBy = req.user.id
  try {
    const record = await model.create({ ...req.body });
    res.status(201).json({ data: record });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};
export const updateOne = (model: ModelCtor<ModelTypes>) => async (
  req: Request,
  res: Response
) => {
  try {
    const updatedRecord = await model.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedRecord) {
      return res.status(400).end();
    }

    res.status(200).json({ data: updatedRecord });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};
export const removeOne = (model: ModelCtor<ModelTypes>) => async (
  req: Request,
  res: Response
) => {
  try {
    const removed = await model.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!removed) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: removed });
  } catch (error) {
    console.error(error);
    res.status(400).end();
  }
};

export const crudControllers = (model: ModelCtor<ModelTypes>) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  createOne: createOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
});
