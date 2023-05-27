/* mui5 */
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Typography from "@mui/material/Typography"

/* features(RouteSelect) */
import {
  AreaGWRailwayList
} from "features/RouteSelect/RailwayList"

/* recoil */
import { useSetRecoilState } from "recoil"

/* recoil(atoms) */
import { RouteNameAtom } from "recoil/atoms"

/**
 * ## 路線選択ボタングループ
 * * 支線連絡系統
 */
export const AreaGWRailwaySelect = () => {

  const setIsRouteSelected = useSetRecoilState(RouteNameAtom);

  const handleOnClick = (routeName1: string, routeName2: string) => {
    if (routeName1 !== '') {
      console.info(routeName1 + routeName2);
      setIsRouteSelected(routeName1 + routeName2);
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
        {AreaGWRailwayList.map(p => (
          <Button
            key={p.id}
            sx={{
              height: '100px',
              width: '100px'
            }}
            onClick={() => handleOnClick(p.routeName1, p.routeName2)}
          >
            <Typography
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                fontSize: 16
              }}
            >
              {p.routeName1}<br/>{p.routeName2}
            </Typography>
          </Button>
        )
      )}
    </ButtonGroup>
   </Box>
   </>
  )
}
