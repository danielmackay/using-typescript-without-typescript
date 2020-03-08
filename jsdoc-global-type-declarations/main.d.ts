export interface ICreditNoteTaxRequestViewModel{
    orderID: number;
    shippingCredit: number;
    lines: IICreditNoteTaxLineViewModel[]
}

export interface ICreditNoteTaxLineViewModel{
    originalOrderLineID:number;
    creditQuantity: number;
}

export interface ICreditNoteTaxResponseViewModel{
    feeAmount: number;
    inclGst: number;
    subTotal: number;
    total: number;
}

export interface IApiResponse{
    status: string;
    status: message;
    response: ICreditNoteTaxResponseViewModel;
}