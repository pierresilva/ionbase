<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call(UsersTableSeeder::class);
        $this->call(UserProfilesTableSeeder::class);
        $this->call(SystCitiesTableSeeder::class);
        $this->call(SystRegionsTableSeeder::class);
        $this->call(SystCountriesTableSeeder::class);
        $this->call(CompaniesTableSeeder::class);
        $this->call(CompPhonesTableSeeder::class);
        $this->call(CompAddressesTableSeeder::class);
        $this->call(CompContactsTableSeeder::class);
        $this->call(SystPositionsTableSeeder::class);
        $this->call(SystParametersTableSeeder::class);
        $this->call(SystParameterGroupsTableSeeder::class);
        $this->call(CompResponsabilitiesTableSeeder::class);
        $this->call(HousUnitsTableSeeder::class);
        $this->call(HousUnitAreasTableSeeder::class);
        $this->call(OperSectorsTableSeeder::class);
        $this->call(CounMeetingsTableSeeder::class);
        $this->call(CounMeetingAgendasTableSeeder::class);
        $this->call(CounMeetingCitationsTableSeeder::class);
        $this->call(OperSchedulesTableSeeder::class);
        $this->call(OperContractorsTableSeeder::class);
        $this->call(OperMovementsTableSeeder::class);
        $this->call(CounMembersTableSeeder::class);
        $this->call(MailTemplatesTableSeeder::class);
        $this->call(MailsTableSeeder::class);
        $this->call(FilesTableSeeder::class);
        $this->call(CorrPacketsTableSeeder::class);
        $this->call(SettingsTableSeeder::class);
        $this->call(SettingGroupsTableSeeder::class);
        $this->call(UserRolesTableSeeder::class);
        $this->call(UserPermissionsTableSeeder::class);
        $this->call(UserUserRoleTableSeeder::class);
        $this->call(UserPermissionUserRoleTableSeeder::class);
    }
}
