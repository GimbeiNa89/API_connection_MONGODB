import { constants } from "../constants";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(statusCode);

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "You don't have the permission",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVER_ERROR:
      res.json({
        title: "Server error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      console.log("No error, All good!");
      break;
  }
};
