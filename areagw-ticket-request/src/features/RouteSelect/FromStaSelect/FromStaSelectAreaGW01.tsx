/* mui5 */
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"

/* recoil */
import { useSetRecoilState } from "recoil"

/* recoil(atom) */
import {
  FromStaAtom,
  FromStaCodeAtom,
  RouteNameAtom
} from "recoil/atoms"

/* common(constant) */
import { RouteName } from "common/constant/RouteName"

/* features(RouteSelect) */
import {
  AreaGW01FromStaList01,
  AreaGW01FromStaList02
} from "features/RouteSelect/FromStaList"

/**
 * ## 乗車駅候補ボタングループ
 * * 支線連絡系統梼谷線
 */
export const FromStaSelectAreaGW01 = () => {

  const setFromSta = useSetRecoilState(FromStaAtom)
  const setIsRouteSelected = useSetRecoilState(RouteNameAtom)
  const setFromStaCode = useSetRecoilState(FromStaCodeAtom)

  const handleOnClick = (staName: string, staCode: string) => {
    if(staName !== '') {
      setFromSta(staName);
      setFromStaCode(staCode);
      setIsRouteSelected(RouteName.ViaRouteAreaGW01);
    }
  }

  return(
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 0.05,
          },
        }}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="outlined large button group"
          size="large"
        >
          {AreaGW01FromStaList01.map(p => (
            <Button
              key={p.id}
              sx={{
                height: '100px',
                width: '100px'
              }}
              onClick={() => handleOnClick(p.staName, p.staCode)}
            >
              <Typography
                color="inherit"
                noWrap
                sx={{
                  flexGrow: 1,
                  fontSize: 18
                }}
              >
                {p.staName}
              </Typography>
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 0.05,
          },
        }}
      >
        <ButtonGroup
          variant="outlined"
          aria-label="outlined large button group"
          size="large"
        >
          {AreaGW01FromStaList02.map(p => (
            <Button
              key={p.id}
              sx={{
                height: '100px',
                width: '100px'
              }}
              onClick={() => handleOnClick(p.staName, p.staCode)}
            >
              <Typography
                color="inherit"
                noWrap
                sx={{
                  flexGrow: 1,
                  fontSize: 18
                }}
              >
                {p.staName}
              </Typography>
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </>
  )
}
