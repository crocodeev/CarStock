import { TCarModel } from "@/models/car/types";

class rowFormatter {

    private car: TCarModel;
    public equipment: string;

    constructor(car: TCarModel) {
        this.car = car
        this.equipment = car.equipmentName;
    }

    get id() {
      return this.car._id;
    }

    get markModel() {

      return `${this.car.mark} ${this.car.model}`;
    }

    get modification() {

      const engineCapacity = this.car.engine.volume.toString().padEnd(3, ".0");
      const horsePower = `(${this.car.engine.power}) л.с`;

      return `${engineCapacity} ${horsePower} ${this.car.drive}`;
    }

    get price() {

      return new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", minimumFractionDigits: 0}).format(this.car.price)
    }

    get createdAt () {

      return new Date(this.car.createdAt).toLocaleString("ru", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })

    }

}

export { rowFormatter }