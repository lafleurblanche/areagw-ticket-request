/* recoil */
import { useRecoilValue } from "recoil"

/* features(RouteSelect) */
import {
  AreaGWRailwaySelect} from "features/RouteSelect/RailwaySelect"
import {
  ViaRouteSelectAreaGW01
} from "features/RouteSelect/ViaRouteSelect"

/* recoil(atoms) */
import { RouteNameAtom } from "recoil/atoms"

/**
 * ## 路線選択ボタングループ
 * * 支線連絡系統
 */
export const RouteSelectTest02 = () => {

  interface pageValue {
    [key: number]: () => JSX.Element
  }

  const selectRouteMap = new Map<string, number>(
    [
      ["", -1],
      ["梼谷線", 0],
      ["梼谷", 1],
      ["経梼", 2],
    ]
  );

  const pageComponent: pageValue = {
    1: ViaRouteSelectAreaGW01,
  };

  const isRouteSelected = useRecoilValue(RouteNameAtom);

  const RouteSelectBtnGrp = () => {
    let value = selectRouteMap.get(isRouteSelected)
    console.info(value)
    if (value === undefined) {
      value = -1
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
