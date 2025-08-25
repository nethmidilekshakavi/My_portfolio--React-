import { createBrowserRouter } from "react-router-dom";
import PortfolioHomepage from "./src/components/PortfolioHomepage";
import Layout from "./src/components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PortfolioHomepage />
      }
    ]
  }
]);

export default router;
