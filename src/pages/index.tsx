import {
  LoaderFunction,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Root } from "./Root";
import { GlobalStyles } from "../styles/Global";

const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const path = url.searchParams.get("path");
  return fetch(
    `http://localhost:8080/files${path ? "?path=" + path : ""}`
  ).then((r) => r.json());
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader,
  },
]);

export function Router() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}
