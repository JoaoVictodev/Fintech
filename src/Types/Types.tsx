export type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
};

export type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: null | number;
  data: string;
};
