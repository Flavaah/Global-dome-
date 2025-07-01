import { testUser } from "./testUser";

export const auth = {
  login: (email: string, password: string) => {
    if (email === testUser.email && password === testUser.password) {
      localStorage.setItem("user", testUser.email);
      localStorage.setItem("kpi", JSON.stringify(testUser.kpi));
      return true;
    }
    localStorage.setItem("user", `${email}@globaldome.com`);
    localStorage.setItem("kpi", "0");
    return true;
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("kpi");
  },
  getUser: () => (typeof window !== "undefined" ? localStorage.getItem("user") : null),
  incrementKPI: (type: "samtal" | "bokade" | "svarade") => {
    const kpi = JSON.parse(localStorage.getItem("kpi") || "{\"samtal\":0,\"bokade\":0,\"svarade\":0}");
    kpi[type] = (kpi[type] || 0) + 1;
    localStorage.setItem("kpi", JSON.stringify(kpi));
  },
  getKPI: () => JSON.parse(localStorage.getItem("kpi") || "{\"samtal\":0,\"bokade\":0,\"svarade\":0}"),
};
