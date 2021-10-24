import { AppRequest } from '../models';

/**
 * @param {AppRequest} request
 * @returns {string}
 */
export function getUserIdFromRequest(request: AppRequest): string {
<<<<<<< HEAD
  return (request.user && request.user.id) || 'anonymous';
=======
  return request.user && request.user.id;
>>>>>>> bdb582633a7f5262035096260989bbeb8781e742
}
