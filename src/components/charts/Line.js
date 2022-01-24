import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";

const Line = (props) => {
  return (
    <Chart>
      <ChartTitle text={props.text} />
      <ChartLegend position="top" orientation="horizontal" />
      <ChartValueAxis>
        <ChartValueAxisItem title={{ text: "Population Count" }} />
      </ChartValueAxis>
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={props.categories} />
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          key={props.datavalue}
          type="line"
          tooltip={{ visible: true }}
          data={props.datavalue}
        />
      </ChartSeries>
    </Chart>
  );
};

export default Line;
/*
pannable zoomable style={{ height: 350 }}
yeh chart ke andar hai


*/
