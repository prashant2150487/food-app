import { NextFunction, Request, Response } from "express"
import { body, validationResult } from "express-validator"





const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();

}

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("addressLine1").isString().isEmpty().withMessage(" Address Line1 must be a string"),
    body("city").isString().isEmpty().withMessage("City Line1 must be a string"),
    body("country").isString().isEmpty().withMessage("Country must be a string"),
    handleValidationErrors


]