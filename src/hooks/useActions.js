import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { actions } from "../store/basket.slice"

const rootActions = {
    ...actions
}

export const useActions = () => {
    const dispatch = useDispatch()


    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch)
    }, [dispatch])
}