/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsuarios = /* GraphQL */ `
  mutation CreateUsuarios(
    $input: CreateUsuariosInput!
    $condition: ModelUsuariosConditionInput
  ) {
    createUsuarios(input: $input, condition: $condition) {
      id
      name
      mensaje {
        items {
          id
          idUsuario
          mensaje
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUsuarios = /* GraphQL */ `
  mutation UpdateUsuarios(
    $input: UpdateUsuariosInput!
    $condition: ModelUsuariosConditionInput
  ) {
    updateUsuarios(input: $input, condition: $condition) {
      id
      name
      mensaje {
        items {
          id
          idUsuario
          mensaje
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsuarios = /* GraphQL */ `
  mutation DeleteUsuarios(
    $input: DeleteUsuariosInput!
    $condition: ModelUsuariosConditionInput
  ) {
    deleteUsuarios(input: $input, condition: $condition) {
      id
      name
      mensaje {
        items {
          id
          idUsuario
          mensaje
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createMensajes = /* GraphQL */ `
  mutation CreateMensajes(
    $input: CreateMensajesInput!
    $condition: ModelMensajesConditionInput
  ) {
    createMensajes(input: $input, condition: $condition) {
      id
      idUsuario
      usuario {
        id
        name
        mensaje {
          nextToken
        }
        createdAt
        updatedAt
      }
      mensaje
      createdAt
      updatedAt
    }
  }
`;
export const updateMensajes = /* GraphQL */ `
  mutation UpdateMensajes(
    $input: UpdateMensajesInput!
    $condition: ModelMensajesConditionInput
  ) {
    updateMensajes(input: $input, condition: $condition) {
      id
      idUsuario
      usuario {
        id
        name
        mensaje {
          nextToken
        }
        createdAt
        updatedAt
      }
      mensaje
      createdAt
      updatedAt
    }
  }
`;
export const deleteMensajes = /* GraphQL */ `
  mutation DeleteMensajes(
    $input: DeleteMensajesInput!
    $condition: ModelMensajesConditionInput
  ) {
    deleteMensajes(input: $input, condition: $condition) {
      id
      idUsuario
      usuario {
        id
        name
        mensaje {
          nextToken
        }
        createdAt
        updatedAt
      }
      mensaje
      createdAt
      updatedAt
    }
  }
`;
