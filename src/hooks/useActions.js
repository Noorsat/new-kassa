import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { actions as basketActions } from "../store/basket/basket.slice"
import { actions as seanceActions } from "../store/seance/seance.slice"

const rootActions = {
    ...basketActions,
    ...seanceActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch)
    }, [dispatch])
}