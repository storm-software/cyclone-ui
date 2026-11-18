import { renderToString } from "react-dom/server";
import { afterEach, expect, it, vi } from "vitest";
import { useLoadingData } from "./useLoadingData";

afterEach(() => vi.restoreAllMocks());

function LoadingChart() {
  const { loadingData } = useLoadingData(true, 4, 20, 80);
  return (
    <svg>
      {loadingData.map(({ loading }, index) => (
        <rect key={index} x={index * 10} height={loading} />
      ))}
    </svg>
  );
}

it("renders the same initial loading chart when server and browser random sources differ", () => {
  const random = vi.spyOn(Math, "random").mockReturnValue(0);
  const server = renderToString(<LoadingChart />);
  random.mockReturnValue(0.99);
  const browser = renderToString(<LoadingChart />);

  expect(browser).toBe(server);
  expect(server.match(/<rect /g)).toHaveLength(4);
});
