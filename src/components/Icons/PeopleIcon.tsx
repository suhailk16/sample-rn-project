import * as React from 'react'
import Svg, { G, Mask, Path } from 'react-native-svg'
import { type SVGIconProps } from 'src/typings/common'
import useAppTheme from '~/hooks/useTheme'

const PeopleIcon: React.FC<SVGIconProps> = (props) => {
  const theme = useAppTheme()
  const { fill = theme.colors.black } = props

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill={fill} {...props}>
      <Mask id="a" maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
        <Path fill="#D9D9D9" d="M0 0H24V24H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M7 21v-3.762c-.95-.866-1.688-1.84-2.213-2.922C4.263 13.235 4 12.125 4 10.986c0-2.218.778-4.104 2.333-5.657C7.89 3.776 9.778 3 12 3c1.801 0 3.43.548 4.884 1.645 1.454 1.097 2.397 2.513 2.83 4.25l1.036 4.104a.756.756 0 01-.142.69.778.778 0 01-.646.311H18v3.385c0 .444-.158.824-.474 1.14a1.556 1.556 0 01-1.141.475H14v2h-1v-3h3.385c.18 0 .326-.058.442-.173a.599.599 0 00.173-.442V13h2.7l-.95-3.875a6.462 6.462 0 00-2.47-3.71C15.019 4.472 13.592 4 12 4c-1.933 0-3.583.677-4.95 2.03C5.683 7.385 5 9.03 5 10.97c0 .996.204 1.943.612 2.84a7.476 7.476 0 001.738 2.392L8 16.8V21H7zm4.442-6.423h1.116l.073-.923c.261-.05.51-.137.747-.262.236-.124.435-.286.595-.484l.804.404.558-.95-.731-.539c.11-.274.165-.549.165-.823 0-.274-.055-.549-.165-.823l.73-.539-.557-.95-.804.404a1.876 1.876 0 00-.595-.484 2.678 2.678 0 00-.747-.262l-.073-.923h-1.116l-.073.923c-.261.05-.51.137-.747.262a1.876 1.876 0 00-.595.484l-.804-.404-.558.95.731.539c-.11.274-.165.549-.165.823 0 .274.055.549.165.823l-.73.538.557.95.804-.403c.16.198.359.36.595.484.237.125.486.212.747.262l.073.923zM12 12.865c-.519 0-.959-.181-1.321-.544a1.802 1.802 0 01-.543-1.322c0-.519.181-.959.544-1.321a1.802 1.802 0 011.322-.543c.519 0 .959.181 1.321.544.362.363.543.804.543 1.322 0 .519-.181.959-.544 1.321a1.802 1.802 0 01-1.322.543z"
          fill="#1C1B1F"
        />
      </G>
    </Svg>
  )
}

export default PeopleIcon
