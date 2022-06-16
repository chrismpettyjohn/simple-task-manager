import {HasScope} from '@instinct-api/session';
import {RPPermissions} from '@bobba-rp/types';

export function HasRPScope(scope: keyof RPPermissions) {
  return HasScope(scope as any);
}
