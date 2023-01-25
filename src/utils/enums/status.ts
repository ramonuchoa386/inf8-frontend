export enum ApplicationStatusText {
  ENABLED = 'Disponível',
  DISABLED = 'Indisponível',
  APPLICATION_PENDING_APPROVAL = 'Pendente aprovação',
  EDIT_APPLICATION_PENDING_APPROVAL = 'Edição em aprovação',
  REJECTED = 'Rejeitado',
  UNPUBLISHED = 'Não publicado',
  DEPRECATED = 'Depreciada',
  NEW = 'Novo',
}

export enum ApplicationStatusColor {
  ENABLED = 'positive',
  DISABLED = 'Cod',
  APPLICATION_PENDING_APPROVAL = 'warning',
  EDIT_APPLICATION_PENDING_APPROVAL = 'warning',
  REJECTED = 'negative',
  UNPUBLISHED = 'celeste',
  DEPRECATED = 'negative',
  NEW = 'primary',
}

export enum EndpointApplicationRefer {
  ENABLED = 'Enabled',
  DISABLED = 'Disabled',
  APPLICATION_PENDING_APPROVAL = 'Pendente Aprovação',
}

export enum QueryFileStatus {
  ENVIADO = 'enviado',
  ERRO = 'erro',
  INVALIDO = 'invalido',
}

export enum TextFileStatus {
  ENVIADO = 'Enviado',
  ERRO = 'Erro no envio',
  INVALIDO = 'Arquivo inválido',
}

export const fileStatus = [
  {
    text: TextFileStatus.ENVIADO,
    value: QueryFileStatus.ENVIADO,
  },
  {
    text: TextFileStatus.ERRO,
    value: QueryFileStatus.ERRO,
  },
  {
    text: TextFileStatus.INVALIDO,
    value: QueryFileStatus.INVALIDO,
  },
];
