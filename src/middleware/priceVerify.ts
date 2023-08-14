import { Request, Response, NextFunction } from 'express';

const priceVerify = (req: Request, res: Response, next: NextFunction): void | Response => {
  const price = req.body;

  switch (price) {
    case !price:
      return res.status(400).json({ message: '"price" is required' });
    case typeof price !== 'string':
      return res.status(422).json({ message: '"price" must be a string' });
    case price.length < 3:
      return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
    default:
      next();
  }
};

export default priceVerify;