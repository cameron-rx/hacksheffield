import { FunnelChart, Tooltip, Funnel, LabelList, ResponsiveContainer } from 'recharts';

const data = [
    {
      "value": 100,
      "name": "perfect",
      "fill": "#8884d8"
    },
    {
      "value": 80,
      "name": "excellent",
      "fill": "#83a6ed"
    },
    {
      "value": 50,
      "name": "well",
      "fill": "#8dd1e1"
    },
    {
      "value": 40,
      "name": "good",
      "fill": "#82ca9d"
    },
    {
      "value": 26,
      "name": "beginner",
      "fill": "#a4de6c"
    }
  ]

export function SecondStatisticalComponent() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <FunnelChart>
            <Tooltip />
            <Funnel
                dataKey="value"
                data={data}
                isAnimationActive
            >
                <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
            </Funnel>
            </FunnelChart>
        </ResponsiveContainer>

    );
}