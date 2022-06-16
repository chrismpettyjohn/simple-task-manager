import {BountyEntity} from './bounty.entity';
import {Bounty, RPUser} from '@bobba-rp/types';

export function bountyWire(
  entity: BountyEntity,
  targetUser: RPUser,
  addedByUser: RPUser
): Bounty {
  return {
    id: 1,
    target: targetUser,
    addedBy: addedByUser,
    reward: entity.reward,
    addedAt: entity.addedAt,
    expiresAt: entity.expiresAt,
  };
}
