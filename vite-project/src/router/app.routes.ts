import { Product } from "../pages/app/product/product";
import { Debtors } from "../pages/app/debtors/debtors";
import { Home } from "../pages/app/home/home";
import { Report } from "../pages/app/report/report";
import { Calendar } from "../pages/app/calendar/calendar";

export const appRoutes = [
  { comp: Home, path: "home" },
  { comp: Calendar, path: "calendar" },
  { comp: Debtors, path: "debtors" },
  { comp: Product, path: "product" },
  { comp: Report, path: "report" },
];
