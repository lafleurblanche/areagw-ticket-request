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
  ToStaAtom,
  ToStaCodeAtom
} from "recoil/atoms"

/* features(OneTouch) */
import {
  OneTouchMenuList01,
  OneTouchMenuList02,
  OneTouchMenuList03
} from "features/OneTouch/OneTouchMenuList"

/**
 * ## ワンタッチメニューグループ
 * * 支線連絡系統
 * * ワンタッチ候補
 */
export const OneTouchMenuSelect01 = () => {

  const setFromSta = useSetRecoilState(FromStaAtom)
  const setFromStaCode = useSetRecoilState(FromStaCodeAtom)
  const setToStaCode = useSetRecoilState(ToStaCodeAtom)
  const setToSta = useSetRecoilState(ToStaAtom)

  const handleOnClick = (
    fromStaName: string,
    fromStaCode: string,
    toStaName: string,
    toStaCode: string
  ) => {
    if(fromStaName !== '') {
      setFromSta(fromStaName);
      setFromStaCode(fromStaCode);
      setToSta(toStaName);
      setToStaCode(toStaCode);
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
          {OneTouchMenuList01.map(p => (
            <Button
              key={p.id}
              sx={{
                height: '100px',
                width: '100px'
              }}
              onClick={() => handleOnClick(
                p.fromStaName,
                p.fromStaCode,
                p.toStaName,
                p.toStaCode,
                )
              }
            >
              <Typography
                color="inherit"
                noWrap
                sx={{
                  flexGrow: 1,
                  fontSize: 18
                }}
              >
                {p.menuTitle1}<br/>{p.menuTitle2}
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
          {OneTouchMenuList02.map(p => (
            <Button
              key={p.id}
              sx={{
                height: '100px',
                width: '100px'
              }}
              onClick={() => handleOnClick(
                p.fromStaName,
                p.fromStaCode,
                p.toStaName,
                p.toStaCode,
                )
              }
            >
              <Typography
                color="inherit"
                noWrap
                sx={{
                  flexGrow: 1,
                  fontSize: 18
                }}
              >
                {p.menuTitle1}<br/>{p.menuTitle2}
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
          {OneTouchMenuList03.map(p => (
            <Button
              key={p.id}
              sx={{
                height: '100px',
                width: '100px'
              }}
              onClick={() => handleOnClick(
                p.fromStaName,
                p.fromStaCode,
                p.toStaName,
                p.toStaCode,
                )
              }
            >
              <Typography
                color="inherit"
                noWrap
                sx={{
                  flexGrow: 1,
                  fontSize: 18
                }}
              >
                {p.menuTitle1}<br/>{p.menuTitle2}
              </Typography>
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </>
  )
}
