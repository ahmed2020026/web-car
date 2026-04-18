import { dummyCarData } from "../assets/SYSTEM/assets"
import type { CarType } from "../types/Car.type"

const callApi = () => {
    const Cars:CarType[] = dummyCarData;
    return Cars;
}

export default callApi