/**
 * exception to the rule of FSD acrhitecture, I took dependencies from high level
 */

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/fsd/app/store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();