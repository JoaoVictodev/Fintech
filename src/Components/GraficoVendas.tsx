import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda, VendaDia } from "../Types/Types";

function trasformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dias) => ({
    ...dias,
    data: dias.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const trasformedData = trasformData(data);

  return (
    <>
      <ResponsiveContainer width={"99%"} height={400}>
        <LineChart
          width={400}
          height={400}
          data={trasformedData}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="data" />
          <YAxis yAxisId={0} />
          <YAxis yAxisId={1} orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#a36af9"
            yAxisId={0}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#fbcb21"
            yAxisId={1}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="falha"
            stroke="#000"
            yAxisId={1}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default GraficoVendas;
