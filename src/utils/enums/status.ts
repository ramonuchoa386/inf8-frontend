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
