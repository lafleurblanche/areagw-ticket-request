/* recoil */
import { useRecoilValue } from "recoil"

/* recoil(atoms) */
import { RouteNameAtom } from "recoil/atoms"

/* features(RouteSelect) */
import { AreaGWRailwaySelect } from "features/RouteSelect/RailwaySelect"
import { RouteSelectTest02 } from "./RouteSelectTest02"
import {
  ToStaSelectAreaGW01} from "features/RouteSelect/ToStaSelect"
import {
  FromStaSelectAreaGW01
} from "features/RouteSelect/FromStaSelect"

/**
 * ## 路線選択ボタングループ
 * * 支線連絡系統
 */
export const RouteSelectTest01 = () => {

  interface pageValue {
    [key: number]: () => JSX.Element
  }

  const isRouteSelected = useRecoilValue(RouteNameAtom);
  const selectRouteMap = new Map<string, number>(
    [
      ["", -1],
      ["梼谷線", 0],
      ["梼谷", 1],
      ["経梼", 2],
    ]
  );

  const pageComponent: pageValue = {
    0: FromStaSelectAreaGW01,
    1: RouteSelectTest02,
    2: ToStaSelectAreaGW01,
  };


  const RouteSelectBtnGrp = () => {
    let value = selectRouteMap.get(isRouteSelected)
    console.info(value)
    if (value === undefined) {
      value = 0
    }
    if(value === -1) {
      return <AreaGWRailwaySelect />
    } else {
      const Page = pageComponent[value];
      return <Page />
    }
  }

  return(
    <RouteSelectBtnGrp />
  )
}
