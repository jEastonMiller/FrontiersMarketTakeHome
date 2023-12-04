export {};
declare global {
  namespace Express {
    export interface Request {
      cookies?: string;
    }
  }
}
