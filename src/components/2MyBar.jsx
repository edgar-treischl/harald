import { ResponsiveBar } from '@nivo/bar'

const MyBar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['percent_repos']}
    indexBy="language"
    layout="horizontal"
    margin={{ top: 50, right: 130, bottom: 50, left: 100 }}
    padding={0.3}
    labelSkipWidth={12}
    labelSkipHeight={12}
    axisBottom={{
      legend: 'Percentage of repositories',
      legendOffset: 36,
      legendPosition: 'middle'
    }}
    axisLeft={{
      legend: 'Language',
      legendOffset: -80,
      legendPosition: 'middle'
    }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        translateX: 120,
        itemsSpacing: 3,
        itemWidth: 100,
        itemHeight: 16
      }
    ]}
  />
)

export default MyBar
