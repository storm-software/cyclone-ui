import {
  BarChart,
  BarChartBar
} from "../../../../../../components/bar-chart/src";
import {
  ComposedChart,
  ComposedChartBar
} from "../../../../../../components/composed-chart/src";

const config = { series: { label: "Series" } };
const data = [{ label: "A", series: 12 }];
export default function ChartsProbe() {
  return (
    <main>
      <h1>Charts shell</h1>
      <BarChart config={config} data={data} isLoading>
        <BarChartBar dataKey="series" />
      </BarChart>
      <ComposedChart config={config} data={data} isLoading>
        <ComposedChartBar dataKey="series" />
      </ComposedChart>
      <BarChart config={config} data={data}>
        <BarChartBar dataKey="series" />
      </BarChart>
      <ComposedChart config={config} data={data}>
        <ComposedChartBar dataKey="series" />
      </ComposedChart>
    </main>
  );
}
