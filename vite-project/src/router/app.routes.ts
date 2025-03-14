import { DebtorCreate } from "../pages/app/debtor-create/debtor-create";
import { Debtors } from "../pages/app/debtors/debtors";
import { Home } from "../pages/app/home/home";
import { Report } from "../pages/app/report/report";
import { StoreCalendar } from "../pages/app/calendar/calendar";
import { CreateDebt } from "../pages/app/debt-create/debt-create";
import { Debts } from "../pages/app/debts/debts";
import { Profile } from "../pages/app/profile/profile";

export const appRoutes = [
  { comp: Home, path: "home" },
  { comp: StoreCalendar, path: "calendar" },
  { comp: Debtors, path: "debtors" },
  { comp: Debts, path: "debts/:id" },
  { comp: DebtorCreate, path: "debtor-create" },
  { comp: Report, path: "report" },
  { comp: CreateDebt, path: "create-debt/:id" },
  { comp: Profile, path: "profile" },
];
