export class OrderInfo {
    constructor(
        public orderItemId: number | null,
        public oid: number | null,
        public pid: number,
        public qty: number,
        public price: number

    ) {}
}
