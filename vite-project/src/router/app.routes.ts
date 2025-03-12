import { DebtorCreate } from "../pages/app/debtor-create/debtor-create";
import { Debtors } from "../pages/app/debtors/debtors";
import { Home } from "../pages/app/home/home";
import { Report } from "../pages/app/report/report";
import { StoreCalendar } from "../pages/app/calendar/calendar";
import { CreateDebt } from "../pages/app/debt-create/debt-create";

export const appRoutes = [
  { comp: Home, path: "home" },
  { comp: StoreCalendar, path: "calendar" },
  { comp: Debtors, path: "debtors" },
  { comp: DebtorCreate, path: "debtor-create" },
  { comp: Report, path: "report" },
  { comp: CreateDebt, path: "create-debt/:id" },
];
