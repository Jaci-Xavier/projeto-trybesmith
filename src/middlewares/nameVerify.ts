import { Request, Response, NextFunction } from 'express';

const nameVerify = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { name } = req.body;

  switch (true) {
    case !name:
      return res.status(400).json({ message: '"name" is required' });
    case typeof name !== 'string':
      return res.status(422).json({ message: '"name" must be a string' });
    case name.length < 3:
      return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
    default:
      next();
  }
};

export default nameVerify;