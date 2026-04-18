import { useDispatch, useSelector } from "react-redux";
import type { RootState , AppDispatch } from "./Store";
import callApi from "./callApi";
import { allCars } from "./Slice";
import { useEffect } from "react";

const getCars = () => {
    const selectorCar = useSelector((state: RootState) => state.Cars);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (selectorCar.loading) dispatch(allCars(callApi()));
    }, [dispatch])

    return selectorCar;
}

export default getCars