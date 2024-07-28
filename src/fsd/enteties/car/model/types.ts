export type { TCarModel } from "@/models/car/types";
export type TCarsByMarkQuery = {
    mark?: string,
    limit?: string,
    skip?: string,
    model?: string
}