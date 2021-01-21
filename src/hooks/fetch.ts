import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ApplicationActionType } from "store";

export const useFetch = (actionCreator: (args: any) => ApplicationActionType, args?: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actionCreator(args));
  }, [actionCreator, args, dispatch]);
}