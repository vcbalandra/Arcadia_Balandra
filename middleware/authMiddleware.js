import {
  UnauthenticatedError,
  UnauthorizedError,
} from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = (req, res, next) => {
  const token = req.cookies.token; 
  
  if (!token) {
    throw new UnauthenticatedError('Authentication invalid: No token provided');
  }

  try {
    const { userId, role } = verifyJWT(token);  
    req.user = { userId, role }; 
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid: Invalid token');
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unauthorized to access this route');
    }
    next();
  };
};