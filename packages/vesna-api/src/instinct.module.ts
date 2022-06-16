import {Module} from '@nestjs/common';
import {GangModule} from './gang/gang.module';
import {RPUserModule} from './user/user.module';
import {SessionModule} from './session/session.module';
import {FeatureModule} from './feature/feature.module';
import {DatabaseModule} from './database/database.module';
import {BusinessModule} from './business/business.module';
import {GovernmentModule} from './government/government.module';
import {GuideModule} from './guide/guide.module';
import {FoodModule} from './food/food.module';
import {GamblingMachineModule} from './gambling-machine/gambling-machine.module';
import {WeaponModule} from './weapon/weapon.module';
import {VendingMachineModule} from './vending-machine/vending-machine.module';
import {CrimeModule} from './crime/crime.module';
import {RPRoomModule} from './rp-room/rp-room.module';
import {BountyModule} from './bounty/bounty.module';
import {PropertyModule} from './property/property.module';
import {RankModule} from './rank/rank.module';
@Module({
  imports: [
    DatabaseModule,
    BusinessModule,
    GangModule,
    GuideModule,
    SessionModule,
    RankModule,
    FeatureModule,
    RPUserModule,
    FoodModule,
    GovernmentModule,
    GamblingMachineModule,
    WeaponModule,
    RPRoomModule,
    VendingMachineModule,
    CrimeModule,
    BountyModule,
    PropertyModule,
  ],
  exports: [
    DatabaseModule,
    BusinessModule,
    GuideModule,
    GangModule,
    SessionModule,
    FeatureModule,
    RankModule,
    RPUserModule,
    FoodModule,
    RPRoomModule,
    GovernmentModule,
    GamblingMachineModule,
    WeaponModule,
    VendingMachineModule,
    CrimeModule,
    BountyModule,
    PropertyModule,
  ],
})
export class InstinctRPModule {}
