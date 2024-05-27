'use client'

import { useList } from '@/context/list-invoice-context';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const chartSetting = {
  width: 650,
  height: 450,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};


const valueFormatter = (value: number | null) => `${value} kwh`;

export const KWHChart = () => {
  const {kwh} = useList()
    return (
        <div className="container">
             <BarChart
                colors={['#7A4D8B', '#03A862']}
                dataset={kwh}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={[
                    { dataKey: 'consumed', label: 'Consumida', valueFormatter },
                    { dataKey: 'compensated', label: 'Compensada', valueFormatter },
                    
                ]}
                {...chartSetting}
            />
            
        </div>
    )
}